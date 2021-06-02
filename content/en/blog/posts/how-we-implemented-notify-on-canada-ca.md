---
layout: blog
title: How we implemented Notify on Canada.ca
description: >-
  The team from Service Canada shares how they got Notify up and running on
  Canada.ca to send auto-replies from their questions and comments form.
author: 'Kelly Galbraith and Pierre Dubois, Service Canada'
date: 2020-03-05T15:28:44.137Z
image: https://de2an9clyit2x.cloudfront.net/blog_service_canada_notify_227a13a007.jpg
image-alt: Rainbow parachute in the sky.
translationKey: blog-service-canada-notify
thumb: https://de2an9clyit2x.cloudfront.net/small_blog_service_canada_notify_227a13a007.jpg
---
[Canada.ca](https://www.canada.ca/en.html), the Government of Canada’s centralized website, is now using Notify for sending auto-reply emails for its [questions and comments form](https://www.canada.ca/en/contact/questions.html). These notifications reassure users that their form was successfully submitted to a trusted Canada.ca domain.

Joining the Notify movement is a significant step for us because of the high volume of visitors Canada.ca observes every single day. The implementation of Notify not only helps Canadians, but also makes it easier on our development team here at Principal Publisher, the Service Canada team responsible for managing Canada.ca’s Managed Web Service. This includes the content management system used for publishing, as well as the infrastructure that delivers and protects Canada.ca.
We had a discussion with our developers to get their first impressions of Notify and how the implementation process went.

## Benefits of using Notify from a developer’s perspective
The team listed many benefits of the service from a developer’s perspective. These include:

* Not having to develop and maintain an email template. It is done for you.
* A software release is not needed to modify content (e.g. fixing a typo or adding a notice). The Notify operator can quickly make any necessary changes.
* The implementation of the service is similar to that of any other Simple Mail Transfer Protocol (SMTP) library. In other words, it is pretty simple.
* The developer has control over which template is used and to whom the notification is sent. For example, data from an online form can be sent to an internal department for their action and used to send a confirmation e-mail to the user. This would require configuration if we were using our own SMTP library.

## Benefits of using Notify from a GC-wide perspective
There are other, bigger picture advantages to using Notify. As one of our developers noted, Notify has “a great potential to become the centralized management system for all communications material (email, SMS, etc.) sent to clients per service, per program, per department, etc.”
Notify meets the common need among federal departments to send out e-notifications in a timely and less expensive manner.  By meeting this need, Notify can also be a way for the Government of Canada (GC) as a whole to leverage a common tool. Doing so would save taxpayers’ money and create more consistency in how we communicate with Canadians, who will now know that their feedback has been received and will be processed.

## Implementing Notify
Implementing Notify was simple. As with any implementation, we made a few minor adjustments to ensure that everything was working as we expected. We made it so that there are two Notify Application Programming Interface (API) calls in order to be able to send notifications to both an internal recipient (GC department) and an external client using data from an online form. The Notify team was very helpful in meeting our specific needs during the implementation.

## Collaborating with CDS

It was fantastic to work with the CDS team. They were receptive, took the time to listen to our needs and had the answers to all of our questions. Moreover, they are open to improvement in order to offer the best service possible.

We are currently using Notify mainly to send data from web forms to the appropriate internal group and to send an acknowledgement email to the user. For now, we are focusing on a few key web forms. This gives us time to develop a new Managed Web Service (MWS) component to help departmental web authors incorporate Notify during the creation of their web forms.

We can see a near future in which all lines of business use Notify to centrally manage communication materials sent out to Canadians.

