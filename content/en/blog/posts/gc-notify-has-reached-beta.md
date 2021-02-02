---
layout: blog
title: GC Notify has reached Beta
description: >-
  After developing a first version of the service and improving the ways it
  meets people’s needs, we’d like to announce that GC Notify has officially
  moved from the Alpha to Beta phase, meaning its more stable, reliable and
  secure than ever before. 
author: 'Bryan Willey and Clementine Hahn, Product Managers '
date: 2021-02-01T13:51:01.383Z
image: /img/cds/notify-blog-beta-banner-en.jpg
image-alt: 'A laptop and phone showing the GC Notify home page in Beta. '
translationKey: blog-notify-beta
thumb: /img/cds/thumbnails/notify-blog-beta-banner-en.jpg
processed: 1612203119355
---
Since introducing the GC Notify tool in 2019, we’ve helped government departments send [over 8.8 million notifications](https://notification.canada.ca/activity). After developing a first version of the service and improving the ways it meets people’s needs, we’d like to announce that GC Notify has officially moved from the Alpha to Beta phase, meaning its more stable, reliable and secure than ever before. 

We’re grateful to the government teams that adopted and tested GC Notify to help us improve the service in our journey towards Beta. With their help, we’ve supported departments like [Health Canada in sending COVID-19 related updates to Canadians](https://digital.canada.ca/2020/05/13/get-updates-on-covid-19-email-notification-service/), and [Service Canada in sending email confirmations to improve people’s experiences with Canada.ca](https://digital.canada.ca/2020/03/05/how-we-implemented-notify-on-canada-ca/). Most recently, we had the honour of working with the Government of Nova Scotia, helping their team send text updates to Nova Scotians about their appointment statuses to manage physical distancing during COVID-19. 

Our hope is that the added features and improvements that come with Beta will encourage more teams, at the provincial and federal levels of government, to join Health Canada, Service Canada, and the Government of Nova Scotia, in incorporating GC Notify into their services.

## For those that aren’t familiar, what is GC Notify? 

GC Notify is a free-to-use, cloud-based government tool developed by us - the Canadian Digital Service (CDS) platform team -  that provides a simple and efficient way for departments to integrate simple email and text notifications into their services. 

Using open source code from our counterparts at the [Government Digital Service (GDS)](https://gds.blog.gov.uk/), we adapted [GOV.UK’s Notify](https://www.notifications.service.gov.uk/) to fit the Canadian context, ensuring its features meet all government standards, including accessibility, official languages (English and French), security and privacy. 

Today, GC Notify has over 81 services sending important updates to the public and members of the government, including appointment reminders, automated status updates, confirmation of submissions, and requests for more information. 

## Some of GC Notify’s original and existing features include: 

* **Default Government of Canada branding** in place for emails, in compliance with [Federal Identity Program (FIP)](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/federal-identity-program/manual.html) requirements 
* **Two-factor authentication (2-FA)**, which sends a unique one-time code to your phone or email after you sign in to GC Notify, in order to keep your account secure. 
* Emails are sent from **a trusted Canada.ca domain**, and are in **automatic compliance with email sending guidelines**, including Domain-based Message Authentication, Reporting, and Conformance (DMARC)
* **A real-time dashboard feature** that tracks the different states of sending a message, including how many messages you’ve sent and whether a message was successfully delivered or not. 

## So what does “Beta” mean for GC Notify? 

GC Notify’s journey began after we saw a need to create a simple, flexible service to help government departments keep the public informed. 

Our Platform team then worked to adapt and deploy open source code from GOV.UK Notify to create a minimum viable product of GC Notify, releasing a working Alpha version in November 2019. During the Alpha phase, over 20 government departments integrated GC Notify into their services, as our team worked to incorporate their feedback into the service and improve the ways it meets people’s needs. 

Our move to Beta and plans for continuous improvement of the service (based on user feedback) means departments can reap the added benefits of new and improved GC features and security, on top of existing ones they already rely on. 

**Here are some of the new and improved features that come with GC Notify’s Beta version:**

* **Enhanced security and reliability**, through a full migration to a Canadian Amazon Web Services (AWS) Data Centre behind Shared Services Canada (SSC) guardrails.  
* Notify now comes with **24/7 Incident support** to ensure the service is always up and running in order to meet your department’s needs.
* Departments may need to send messages containing sensitive information to those that rely on their services. **You can now use Notify to send messages designated up to and including “Protected A.”**
* Notify has successfully completed a security penetration test with no vulnerabilities, so you can be **confident your information is protected against third parties.** 
* Notify can now send **text messages from Canadian numbers.**  
* Notify has been integrated with Canadian telecommunications companies to **report the status of text message delivery.** 

Additionally, departments can send up to 10 million emails a year for free, and up to 250,000 text messages —a testament to the service’s capacity to potentially serve as a secure, centralized email notification system for all government services. 

## We’re here to help — during and beyond COVID-19

If you’re part of a government team that needs to send important messages to the public, we encourage you to [try GC Notify today](https://notification.canada.ca/). 

Our team is also available to answer any questions about the service - [connect with us directly,](https://notification.canada.ca/contact) or use the Twitter hashtag #GCNotify for more details, queries and assistance. We hope to hear from you.
