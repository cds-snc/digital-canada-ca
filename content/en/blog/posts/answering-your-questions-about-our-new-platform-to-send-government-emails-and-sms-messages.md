---
layout: blog
title: >-
  Answering your questions about our new platform to send government emails and
  SMS messages
description: >-
  Since we introduced our Notify platform, we’ve received many questions about
  how it works, who can use it, and most frequently, whether or not it's free.
  With such great interest around the platform, we wanted to take the time to
  answer your questions and encourage more organizations to bring their live
  services onto Notify.
author: 'Max Neuvians and Tim Arney, Developers'
date: 2020-02-18T17:04:57.318Z
image: https://de2an9clyit2x.cloudfront.net/blog_notify2_89a385e31d.jpg
image-alt: >-
  Three people talking with one another, with a person on the left side holding
  a laptop talking about the Notify API’s code. A person on the right side holds
  a laptop, while talking about the emails and text messages that result from
  using the Notify service.
translationKey: notify-blog2
thumb: https://de2an9clyit2x.cloudfront.net/small_blog_notify2_89a385e31d.jpg
---
*Update: Like any digital product, GC Notify is constantly being improved to meet the needs of teams across government.* *For the most up-to-date  information, please refer to the [GC Notify features page](https://notification.canada.ca/features).*

Since we introduced our [Notify platform](https://digital.canada.ca/2019/11/26/introducing-notify/), we’ve received many questions about how it works, who can use it, and most frequently, whether or not it's free. With such great interest around the platform, we wanted to take the time to answer your questions and encourage more organizations to bring their live services onto Notify.

As developers, we also want to provide a clearer path forward on why Notify should be integrated with new and existing government services.

But first, let’s address our single most common question:

## Is there a cost for sending email notifications through Notify?

**No**. Using Notify is **free**, and it will stay that way for the lifetime of the product at the Canadian Digital Service (CDS).

Secondly, many people ask why and how they should be using Notify. We think we can address this by providing a compelling example from our own product delivery history.

One of the first projects we worked on here CDS was a service for [rescheduling citizenship appointments](https://digital.canada.ca/2018/04/13/reschedule-a-citizenship-appointment/). We learned that once applicants sent in their request to reschedule, they weren’t always clear on what happened next and as a result, there was a need for the service to send a transactional email to confirm receipt of one’s information.

As it turned out, sending an email from a cloud-based service was easier said than done. It involved several steps including procurement of services, verification of domain ownership, and setting up appropriate safeguards against email spoofing - all things that could potentially take months to accomplish, depending on organizational processes.

As developers, we just wanted to send timely emails.

Fast forward to today, where we’ve built Notify, a platform that allows you to skip to the front of the line and send notifications quickly and reliably (because we’ve taken care of a lot of the additional work for you)!

## Why should you use Notify?

Much like the email client on your desktop, Notify allows you to send emails and text messages through a website (either in bulk using the list upload feature, or to single recipients).

Using open source code from the GOV.UK Notify service (created by GDS, the Government Digital Service in the UK), we built and adapted the Notify Application Programming Interface to fit our Canadian context, making it easier to integrate into your own system.

While sending messages manually can make sense in certain situations, it generally requires a lot of time and resources to do so. By using the API, you are able to automate your messaging requirements. For developers, that means you can expect to take a more hands-off approach to sending status updates, confirmations and reminders, once a service has integrated the Notify API.

## Advantages of using the Notify API

Here are some of the benefits of sending your messages through the Notify API:

* Valid Sender Policy Framework (SPF) and DomainKeys Identified Mail records (DKIM);
* Automatic compliance with upcoming email sending guidelines, most notably, Domain-based Message Authentication, Reporting, and Conformance (DMARC);
* Default Government of Canada branding in place (you can also upload your own to match your service)
* Emails will be sent from a trusted Canada.ca domain, minimizing the risk of spam detection. Sending from your own domain is also possible but not recommended.
* A dashboard feature that tells you how many emails were successfully delivered over time.

All of that to say, if we had Notify when building the service for rescheduling citizenship appointments, it would have saved a lot of blood, sweat, and tears.

## Now that we’ve sold you on the idea, how can you get started?

Sign up for a Notify account and visit the API [documentation](https://notification.alpha.canada.ca/documentation). You’ll see there are clients for many common programming languages, such as Java, Python, and JavaScript. These clients and documentation are maintained by GDS.

![A screenshot of the Notify API integration page, which includes a section asking a user to create an API key by filling in the name for the key. There are three types of keys they can select - live, team and safelist, and test. ](https://de2an9clyit2x.cloudfront.net/notify_api_en_61ddd3729d.jpg)

Take note, we’re utilizing those clients (hurray open source!) with an undocumented parameter **BASE URL**, so you’ll need to set that to point to our version of the API. For more details, see [how to change your API endpoint](https://github.com/cds-snc/notification-api/wiki/How-to-change-your-API-endpoint%3F).

## But wait, there's more!

Sometimes using an API just isn’t an option - perhaps you’re using Commercial-off-the-shelf (COTS) product that requires sending using Simple Mail Transfer Protocol (SMTP). We’re excited to announce that alongside the API, we’re experimenting with a new SMTP option.

Messages sent through SMTP have largely the same features available to them as those sent through the API. Contact us for more details or if you’re interested in trying out this new feature.

## Connect with your users and connect with us

We built Notify with the goal that it will open the door for you to connect with the people who will use your service. Since announcing our Notify platform, we’ve seen over a hundred new trial accounts created to test out Notify and consequently, we’ve tripled the amount of live services on our platform to date.

We hope you’ll find this platform as easy and enjoyable to integrate as we did.

If you have questions or would like to participate in ongoing research around Notify, [connect with us](https://notification.canada.ca/contact) directly, or use the Twitter hashtag **\#notifygc** for more details, queries and assistance.



