---
layout: blog
title: >-
  Meeting the needs of healthcare authorities to roll out COVID Alert across
  Canada
description: >-
  This blog shares how service design is being applied to the COVID Alert app to
  make sure it works with different provincial and territorial healthcare
  authorities in order to meet their varying needs, and the needs of their
  patients.
author: 'Brian Hendrick, Service Design'
date: 2020-09-03T13:29:16.969Z
image: https://de2an9clyit2x.cloudfront.net/app_portal_blog_banner_dddd52ec15.jpg
image-alt: >-
  A map of Canada showing patients and healthcare workers in different provinces
  and territories.
translationKey: healthcare-portal-service-design
thumb: https://de2an9clyit2x.cloudfront.net/small_app_portal_blog_banner_dddd52ec15.jpg
---
[COVID Alert](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert.html), the free Government of Canada exposure notification app for COVID-19, has been downloaded by over 2 million people. While the app itself is the public-facing touchpoint, there are things going on behind the scenes that enable it to do what it’s designed to do.

One of these things is the generation of an alpha-numeric encrypted code known as a ‘one-time key’. Healthcare workers distribute these one-time keys to people who test positive for COVID-19, and they can be entered into the app to notify others of potential exposure. [(You can read more about how the public app works in this blog post.)](https://digital.canada.ca/2020/07/31/continuously-improving-covid-alert/)

These keys don’t already exist for Canadian healthcare systems, so our challenge was to find a way to generate them so they could work for the different provincial and territorial healthcare authorities and the people who would receive them and enter them into the app. Since each healthcare system across Canada runs slightly differently, we wanted to come up with flexible options that could empower the provinces’ and territories’ healthcare workers to choose a solution that best meets their specific needs.

## API or portal?

There are two ways to generate the one-time key within the constraints of the exposure notification framework developed for Apple and Google phones: pulling keys directly from the server through an application programming interface (API), or using a web portal designed and built by CDS, that generates the keys.

The API or portal options are set up to help by integrating within existing workflows, and provinces and territories have the option to choose the one that best suits their needs.

For example, some regions allow patients to check COVID-19 test results online themselves. In these instances the API would work, as it could generate a key directly to existing online systems.

Other regions depend on healthcare workers calling patients over the phone with test results so having the healthcare worker be able to generate a key on the patient's behalf and read it out over the phone, would be the best bet. This could be done through integrating the API directly into their existing system or embedding the portal within their existing workflow.

The API and portal solutions aren’t binary choices. They’re meant to **empower the provinces’ and territories’ healthcare workers to use the option that will best meet their needs and the needs of the patients they serve.**

Ontario, for example, has a self-serve model which uses the API but also integrates the portal to generate the one-time key for people who may not have access or confidence to use the online self-service system.

Approaches differ across Canada. For example, Newfoundland and Labrador are using the portal for the initial rollout while they set-up the API at a later date, while another province may choose to integrate the API directly into their systems or use the portal only.

## Reducing burden on healthcare workers

We designed the portal option with simplicity in mind so that it remains a minimum burden on healthcare workers and can be a new tool to integrate into their existing workflows. In order to do this, we turned to best practices, user research, and behavioural insights.

### Best practices

When preparing for the initial launch of the portal we identified that we’d need the following basic features:

* account creation
* login credentials with two-factor authentication
* generation of one-time keys
* admin access to invite, manage, and delete users

We didn’t need to design these things from scratch since there were existing design patterns which follow best practices for accessibility, security and ease of use. So that’s what we used to start off.

### User research

We are grateful that, through their already busy schedules, we were able to research with some healthcare workers to gather insights and help improve the portal. This resulted in features like:

* clearer onboarding instructions in invitation emails for healthcare workers to access the portal
* screenshots they can use to guide patients on how to enter the one-time keys into the app
* a [quick guide](https://covid-alert-portal.alpha.canada.ca/en/quick-guide/) with additional context if needed

The end result helped provide clearer information to healthcare workers about how the portal fits within COVID-19 exposure notification, and also additional guidance for patients so that they can better support them.

### Behavioural insights

To further reduce cognitive load of healthcare workers and alleviate the anxieties of patients who have tested positive, we also applied some behavioural insights research.

For example, we created a phonetic alphabet that could be provided alongside the generated key. This makes it easier for the healthcare worker to read out the one-time key over the phone, and also makes it easier for the patient to enter the correct key into the app.

![Screenshot of the 10 digit alphanumeric one-time key 284 FKQ 8889. Underneath are instructions on how to read it out. “To read this phonetically: Two. eight. Four. F as in family. K as in kangaroo. Q as in question. Eight. Eight. Eight. Nine](https://de2an9clyit2x.cloudfront.net/app_portal_blog_1_en_9220f61127.jpg)

## Help us continuously improve

Our team is working hard to provide a solution that meets the needs of healthcare workers and patients across Canada, to make generating and entering one-time keys into the app as simple as possible. We strive to continuously improve the process as we roll out across Canada.

The best way for us to improve is to get feedback from the people who are, and will be, using this service.

If you or anyone you know is a healthcare worker responsible for contacting patients with positive results, please [sign up to be part of ongoing research](https://digital.canada.ca/covid-alert-research-signup/). Sign up takes less than 5 minutes and your feedback will help us improve the COVID Alert app as we work towards reducing the spread of COVID-19 across Canada.
