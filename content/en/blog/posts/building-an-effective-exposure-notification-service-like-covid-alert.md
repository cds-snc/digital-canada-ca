---
layout: blog
title: Building an effective exposure notification service like COVID Alert
description: >-
  We’re sharing the main considerations we had while building the
  privacy-preserving exposure notification app, COVID Alert. In this post, we’ll
  talk about what’s needed at a basic level for an exposure notification service
  to work while getting the app into as many hands as possible.
author: 'Josh Ruihley, Service Owner, and Emily Kuret, Product Manager - COVID Alert'
date: 2020-10-02T15:04:18.149Z
image: https://de2an9clyit2x.cloudfront.net/covid_alert_vision_banner_5a8a8a87f1.jpg
image-alt: 'A scale, balancing people using the COVID Alert app in the middle. '
translationKey: covid-alert-utility-scale
thumb: https://de2an9clyit2x.cloudfront.net/small_covid_alert_vision_banner_5a8a8a87f1.jpg
---
*On July 31, 2020, we released COVID Alert, Canada’s COVID-19 exposure notification service.
The app was built in the open. Continuing in that vein, we’ll be sharing posts that explain the reasons behind the choices we’re making as we continue to update, test, and iterate on this service.*

*In the first blog post here, we’ll talk about what’s required for an exposure notification service to work well at a foundational level and be used by as many people as possible.*

## Balancing utility and scale

Our mission with COVID Alert is to help limit the spread of COVID-19 across the country by creating a privacy-preserving exposure notification service that addresses as many barriers to adoption as possible.

When we talk about the COVID Alert “service”, the public-facing app is a big piece of that - but it’s not the only piece. It also includes portals for healthcare workers to generate one-time keys in different provinces, and technical support for both the public and healthcare workers. So those barriers to adoption could apply to these other elements of the full service as well.

There are a lot of paths we could have taken as we shaped the direction of the initial service, but ultimately two considerations were put above all:

1. The service must work well
2. The more people that use the service, the more impactful it will be

As we continue to build and improve COVID Alert, it’s important that these two considerations **still stay top of mind** and in balance with each other. If, by trying to improve the functionality of the application, it has a negative impact on how many people use it, we’ve set back the entire service. Alternatively, if we increase the number of people using the application at the expense of core functionality, it could also be a step backwards.

## A service that works well

An exposure notification service that works well will **detect** when there’s a good chance that someone has been in contact with a person with COVID-19 and it will **guide** the person to appropriate action. In our case, this means getting a person to follow public health advice.

### Detection

If done correctly, a detection is triggered when:

* Someone with the app has been near a person who also has the app and who’s been diagnosed with COVID-19.
* The diagnosed person chooses to enter the one-time key in the app to alert people.
* The contact between the two of them is close enough and long enough for a potential exposure to take place.
* The person who’s diagnosed was contagious when the contact happened.

### Guidance

When the detection criteria is met and it’s confirmed that someone may have had a possible exposure to COVID-19, the app must then share information to guide the user’s next steps to prevent spread. This guidance comes from the public health authority in the app user’s jurisdiction.

Here in Canada, each province and territory has different guidance based on their regional situation. We’re working closely with these healthcare partners across Canada to make sure that when a person is notified that they may have been exposed, they’re given guidance that is relevant to their specific situation and region.

Guidance is successful when:

* A person is made aware that they may have been exposed.
* The person is given next steps based on public health guidance.
* The person takes those next steps.



## Getting the app into more hands

The more people who use COVID Alert, the more impact it will have at slowing the spread of COVID-19 across Canada. To help us get COVID Alert into as many hands as possible, we’re working to address five key factors that may influence uptake:

* Availability: The service must be available to as many people as possible.
* Accessibility: The service must be usable by as many people as possible.
* Awareness: People need to know that the service exists and how it can help them and their communities.
* Understanding: People need to understand how to use the service and have help available to them when they do not.
* Trust: People need to be confident that the app is private and secure, and working with their best interests in mind.

## Keeping the balance in place

As we work to roll out COVID Alert across Canada, we’ll continue to share examples of how COVID Alert is built and how the decisions around its design are based on the two main considerations of utility and scale, as described above. Stay tuned!

Until then, you can [follow our work on Github](https://github.com/cds-snc/covid-alert-app).
