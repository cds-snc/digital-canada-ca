---
layout: blog
title: Continuously improving COVID Alert
description: Last month the Prime Minister announced the development of a
  nationwide exposure notification app, to help Canadians stay safe and reduce
  the spread of COVID-19. Since then, our product teams at CDS have been working
  quickly to build an accessible, reliable, secure, and user-friendly app for
  people to use across the country.
author: Josh Ruihley, Emily Kuret, Stephen Yates, Courtney Claessens, and Sean
  Boots, CDS
date: 2020-07-31T13:44:03.404Z
image: /img/cds/improving-covid-alert-banner.jpg
image-alt: Three people working to improve the COVID Alert application.
translationKey: covid-alert-blog
thumb: ""
processed: ""
---
Last month the Prime Minister announced [the development of a nationwide exposure notification app](https://pm.gc.ca/en/news/news-releases/2020/06/18/prime-minister-announces-new-mobile-app-help-notify-canadians-covid), to help Canadians stay safe and reduce the spread of COVID-19. Since then, our product teams at CDS have been working quickly to build an accessible, reliable, secure, and user-friendly app for people to use across the country. **COVID Alert officially launched today – you can [download the iOS app](https://apps.apple.com/ca/app/id1520284227) or [download the Android app](https://play.google.com/store/apps/details?id=ca.gc.hcsc.canada.stopcovid)**.

Our starting point was the [open source code developed by volunteers at Shopify](https://www.covidshield.app/), which is based on [Apple and Google’s exposure notification Bluetooth technology](https://www.apple.com/covid19/contacttracing). We’ve worked really closely with our friends at [Health Canada](https://www.canada.ca/en/health-canada.html), at the [Ontario Digital Service](https://www.ontario.ca/page/ontario-digital-service) and with a number of other teams and experts inside and outside government.
 
From that starting point, we’ve made a wide range of changes to improve the accessibility and reliability of the app, and to make sure that it works well with Apple and Google’s underlying systems. We’ve also done usability testing, small- and large-scale [beta testing](https://twitter.com/CDS_GC/status/1285771764900012032), and other design research activities to make sure that the app’s design and content are easy for people to use and understand. 

We’re building COVID Alert in the open, and you can follow our development work in real time on our GitHub repositories [for the mobile app](https://github.com/cds-snc/covid-shield-mobile), [for the server software that supports it](https://github.com/cds-snc/covid-shield-server), and [for the optional healthcare portal](https://github.com/cds-snc/covid-healthcare-portal) that provinces and territories can use to generate one-time keys for COVID-positive patients. Provinces and territories can also connect their healthcare IT systems directly to the server software via API, to generate one-time keys automatically.

For anyone who is curious, here are a few of the recent changes we’ve made throughout the app.

## Accessibility improvements

Making sure that our services work for everyone is one of our main goals in the Government of Canada. Our CDS [Accessibility Handbook](https://digital.canada.ca/a11y/) outlines how we do this, although most of our work is usually focused on online services. For the COVID Alert app, diving into accessibility for mobile applications has been good practice for our team. There’s some great resources that we’ve used along the way:

* [Mozilla’s Mobile accessibility checklist](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Mobile_accessibility_checklist)
* [Uswitch’s Smartphone accessibility: a comprehensive guide](https://www.uswitch.com/mobiles/guides/smartphone-accessibility/)
* [Designing for accessibility during COVID-19 from the Digital Transformation Office](https://blog.canada.ca/2020/06/05/designing-for-accessibility.html)

Some of the improvements that we’ve made to COVID Alert based on accessibility testing include VoiceOver and TalkBack (screenreader) capabilities, voice control options, support for higher-zoom text sizes and magnification, focus changes for navigation, contrast inversion support, immersive reading options, and colour contrast fixes. You can see [open and closed accessibility issues on our GitHub issue tracker for the app](https://github.com/cds-snc/covid-alert-app/issues?q=label%3Aa11y+). 

Making sure that COVID Alert is accessible to everyone with an Apple or Android phone is our top priority. We’re really grateful to Health Canada’s accessibility team and developers from Shopify who have worked alongside our product team. You can read our [Accessibility Statement](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert/accessibility-statement.html) for the app here, and see the [Accessibility Report](https://github.com/cds-snc/covid-alert-documentation/blob/main/AccessibilityReport.md) which is actively updated for more details. 

## More robust one-time keys

One of the “key” parts of the exposure notification system is the one-time keys that are used to confirm a positive COVID-19 diagnosis within the app. These one-time keys are provided by provincial and territorial public health care authorities to COVID-positive individuals, who can then enter them into COVID Alert. They exist to make sure that only valid positive results are used to send exposure notifications. 

After someone enters a one-time key, they can consent to upload their phone’s random Bluetooth codes to the key server. These codes are then retrieved by other people’s phones with the app installed, to alert them that they were in contact with someone who was COVID-positive.

Originally, these one-time keys were an 8-digit set of numbers, with an expiry value of 10 minutes. We realized early on that a 10-minute countdown could be overwhelming to people – particularly as they would be dealing with a COVID diagnosis – so we decided to extend this expiry to 24 hours, to give people time to process, and make an informed decision, when they were ready. 

Because of this, we needed [more entropy](https://en.wikipedia.org/wiki/Entropy_(computing)) to make sure that these keys were secure. We switched to [a new 10-digit alphanumeric pattern](https://github.com/cds-snc/covid-shield-server/pull/197), and we structured the codes into groups of letters or numbers to make it easier to read. 

The letters and numbers we use for the new pattern are “AEFHJKLQRSUWXYZ - 2456789”. Why those? It avoids numbers and letters that might cause confusion when they’re read on a screen or communicated over the phone (for example, the letter O versus the number 0) before people enter them into COVID Alert.

## Precise privacy language

The COVID Alert app and the Apple/Google Bluetooth technology that it runs on have been carefully designed to maximize people’s privacy. The app doesn’t have any way of knowing your location, your name or address, your phone contacts, your health information, or the health information of anyone you’re near. When you get an alert that you were exposed to someone with COVID-19, neither you nor the app can tell who that person was. This [decentralized, privacy-preserving exposure notification approach](https://github.com/DP-3T/documents#dp3t---decentralized-privacy-preserving-proximity-tracing) has been adopted by a number of countries around the world, including [Ireland](https://github.com/HSEIreland/covid-tracker-app), [Germany](https://github.com/corona-warn-app), [Italy](https://github.com/immuni-app), and others.

Throughout the development of COVID Alert, we’ve worked really closely with our colleagues in [Health Canada’s privacy division](https://www.canada.ca/en/health-canada/corporate/about-health-canada/activities-responsibilities/access-information-privacy/privacy.html), who in turn have meaningfully and transparently engaged the [Office of the Privacy Commissioner](https://www.priv.gc.ca/en/) (OPC). 

Part of the OPC’s feedback on initial versions of the app was that we used the word “anonymous” to describe how the app works and what information it collects. “Anonymous” implies that there is no risk whatsoever that a person could be identified, however, and although we all agreed that while there’s a very, very low risk that someone could be re-identified through the app, it isn’t necessarily zero. Someone living in a remote area and only interacting with one or two other people could theoretically be identified by their neighbours if they received exposure notification alerts, for example. 

![A screenshot from COVID Alert’s introduction screen, saying: Your privacy is safe. COVID Alert does not use GPS or location services. It has no way of knowing: Your location. Your name or address. Your phone’s contacts. Your health information. The health information of anyone you’re near.](/img/cds/improving-covid-alert1-en.jpg)

More importantly, exposure notifications exist in a bigger ecosystem of public health response efforts led by provincial and territorial governments (including manual contact tracing), and using the word “anonymous” might give people an incorrect impression of this broader ecosystem. Based on the OPC’s feedback, we removed the word “anonymous” from the app and replaced it with more specific text explaining how people’s privacy is safe.

Since we started working on COVID Alert, we’ve made more than 2300 commits, opened more than 370 technical issues, and resolved more than 310 of them on our GitHub repositories (including 70 resolved issues that were accessibility-related). It’s been a busy time! Each of those commits is a fix or improvement to the app or the supporting pieces of software that make it work.

Throughout the app, and throughout the web pages and other materials supporting it, we’ve reviewed and edited the content to make it clear, accessible, and inclusive as possible for users all across Canada. We’ll keep on collecting feedback to improve this content as well.

We’re excited to share the app with everyone in Canada today. You can [download it here for iOS](https://apps.apple.com/ca/app/id1520284227), or [download it here for Android](https://play.google.com/store/apps/details?id=ca.gc.hcsc.canada.stopcovid). This is not the end of our work – we’re looking forward to the feedback we’ll get from people using the app, to continuously improve it post-launch as we all join the fight to stop the spread of this virus.

