---
layout: blog
title: Putting your trust in humans… and robots
description: >-
  By using automated feedback loops, we build an environment of trust that
  improves the quality of products we build.
author: 'Max Neuvians, Developer'
date: 2019-03-14T14:19:27.827Z
image: /img/cds/grass-lawn-green-wooden-6069.jpg
image-alt: 'A small wooden robot stands in a grassy green lawn. '
translationKey: trust-humans-and-robots
thumb: ''
processed: ''
---
Effective product development and service delivery is nothing without trust.  As a delivery team at CDS, we often speak to our partners about extending us the trust to help them leave their comfort zones and try new approaches. 

But that means we have to practice what we preach. If we ask for trust externally, it’s important to see its value within our own team. 

As a result, we have established processes that help us build trust in each other and the [choices](https://digital.canada.ca/2017/11/06/technology-choices-at-cds/) we make for the organization. These include automated feedback tools that empower developers with the information they need to make critical decisions. Equally as important, we review each other’s work in a blameless environment. 

## Automating feedback loops

We trust our team members to make good choices around questions of accessibility, security, and usability, which are grounded in our experiences and industry data. 

But collecting enough information and context around a particular decision can be onerous, so we believe a lot of it can be automated using our everyday development process.

Some of our automated feedback tools include:

* [Automatically scoring dependencies as they’re added to projects, and alerting developers to double check any packages that may not be good choices](https://github.com/cds-snc/dependency-checker/)
* [Continuously calculating bundle sizes in web applications, which helps developers avoid degrading application performance](https://github.com/cds-snc/bundle-size-tracker/) 
* [Continuously checking if applications perform IP address anonymization when using web  analytics](https://github.com/cds-snc/pii-checker) 
* [Automatic security and accessibility compliance checking](https://github.com/cds-snc/symmorfosi) 
* [Automatic branch review applications](https://github.com/cds-snc/elenchos)

We also use industry tools to help us with:

* [Continuous integration and continuous deployment](https://digital.canada.ca/2018/03/26/automated-testing-blog/) 
* [Code review](https://digital.canada.ca/2018/04/24/coding-is-a-team-activity/) 
* Security analysis and penetration testing

Our team designs internal tools to be \*descriptive rather than prescriptive\* - we don’t tell developers what they need to do, but give them the necessary information to navigate crossroads. This empowers the expert to make the decision, rather than relying on a generic policy as a catch-all safeguard. We also share this information publicly so that these decisions are transparent. 

While using automated tools helps us maintain transparency, the second core ingredient to creating an environment of trust is not punishing mistakes.

## Accepting that humans make mistakes

It’s rare to find a developer who at no point in their career has knocked a website offline for a couple hours, or introduced a bug into production code. But shaming developers - and more broadly, people - for their errors leads to an atmosphere of fear and concealment, which can hinder any team’s commitment to true collaboration and working in the open.

Having worked as a sole and lead developer for many years in the private sector, I often wished I had a second pair of eyes to look over issues that arose. What attracted me to join the CDS development team was their supportive environment and constructive approach to issue management.

A big part of starting this journey with a new team was embracing [“blameless postmortems,”](https://landing.google.com/sre/sre-book/chapters/postmortem-culture/) an approach that focuses on figuring out the circumstances that contributed to a mistake, without pointing fingers at any team member.  

By accepting that mistakes have occurred in the past and will continue to be made in the future, we trust that we can learn from and safeguard against them in the future. 

We also believe that acting on a known problem is better than reacting out of embarrassment to one discovered later - it keeps us honest to ourselves, our partners, and the people we serve. 

This approach does not discount solid security practices or release people from their responsibility - it actually spreads that responsibility across many shoulders and eliminates single points of failure.

Since using these tools across our projects, we discovered multiple accessibility and vulnerability issues, and been able to address them before shipping our products out. The process is not perfect, but we’re always iterating and learning with every new tool we build.

While we may not dream of electric sheep, I sleep better at night knowing that the information we use to make decisions is public and at the disposal of developers when they need it most. 

If you or your team would like to know more about the tools or processes discussed above, please contact any of the authors of the tools directly on [Github](https://github.com/cds-snc) or [reach out to CDS](https://digital.canada.ca/our-team/) via your preferred medium.
