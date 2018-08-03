---
title: "Getting prototypes out the door: the e-briefing app"
description: "Getting hands-on feedback from users is the best way to improve a digital product. To get our feet wet, prior to our official launch, we wanted to tackle a quick project that showed “the art of the possible” with modern digital tools."
author: Dave Samojlenko and Sean Boots
date: 2018-01-29 09:00:00 -0400
image: blog-ebriefing-2018.jpg
image-alt: "The initial CDS delivery team finalizing and testing the first version of the e-briefing app."
lang: en
layout: cds/post
trans_url: "/2018/01/29/sortir-les-prototypes"
---

Getting hands-on feedback from users is the best way to improve a digital product. All of the strategy meetings, planning, and requirements-gathering that are typical steps in developing software in government can’t compare to the experience of 
[actually having people test](https://medium.com/code-for-america/what-healthcare-gov-has-to-do-with-the-hawaii-false-alarm-and-what-to-do-about-it-445cb2b7af82) what you build.

A couple of months before CDS officially launched, we assembled our first delivery team – a group of UX designers, developers, and user researchers that at the time could all fit into a small meeting room. To get our feet wet, we wanted to tackle a project that showed “the art of the possible” with modern digital tools. Prior to our [official launch](https://digital.canada.ca/2017/07/18/launch-of-the-canadian-digital-service/), we couldn’t yet partner with departments (the primary focus of our work today), so we focused on an in-house need: briefing binders for government delegations with meetings abroad.

## Building a better binder

Briefing binders are a niche area of government, but they’re an obvious candidate for a digital approach. In the weeks before international trips, the coordination team in our department’s Strategic Policy branch prepares meeting agendas, biographies of international counterparts, and other supporting documents. These are printed out, manually hole-punched, and assembled into large binders on a tight schedule. Last-minute schedule changes lead to a frantic re-shuffling of papers. 

A ministerial delegation from our department would soon be [travelling to the UK](https://gds.blog.gov.uk/2017/12/14/gds-academy-sharing-with-other-governments/), providing a great chance to see what we could put together. [Yeremia](https://www.linkedin.com/in/yeremia-djaja-325b30a4/), our first front-end developer, learned how to build iPad apps (using HTML/CSS and Cordova) in a single afternoon, and four days later we had a fully-functional prototype preloaded with the background materials for the trip.

## Build, learn, iterate

The delegation team was excited to test the “[e-briefing app](https://github.com/cds-snc/e-briefing-app)”, as it came to be known, and our deputy minister decided to leave her traditional paper binder behind in the office after seeing how well the app worked. 

When the delegation returned, they provided a wealth of feedback on what future iterations of the app could include. The highest priority was the ability to remotely update the content as meeting schedules and agendas changed – our first iteration simply hardcoded the content into the app itself. Annotation tools were the other main request, so that meeting notes could be captured next to the background materials.

Over the summer, amidst other projects that were taking flight, our team developed “iteration 2” of the e-briefing project, which became a simple online content management interface (built [using Laravel](https://digital.canada.ca/2017/11/06/technology-choices-at-cds/)) and an updated app (built with Ionic) that could pull content changes remotely. With this, the international coordination team (and other departmental teams they work with) could push updates while the delegation was travelling, and have the content sync automatically.

Since then, the app and content interface have been used by a number of international delegations here at the Treasury Board Secretariat, including trips to the United Nations General Assembly in New York, the Open Government Partnership Americas Regional Summit in Argentina, and several other international conferences. Friends of CDS at Transport Canada and the Privy Council Office have also used the app, and we demoed it to the Deputy Minister’s Committee on Policy Innovation as a way of replacing paper-based processes in their departments. Paper briefing processes are a pain point for a lot of public servants, and we’re excited about how many trees could be saved as e-briefing apps become more popular!

## What’s next?

As part of CDS’ commitment to open source, both the [iOS e-briefing app](https://github.com/cds-snc/e-briefing-app) and the [content management software](https://github.com/cds-snc/e-briefing-service) are available on our Github repository. As our [project delivery work](https://digital.canada.ca/2017/08/24/picking-our-projects/) has scaled up, we haven’t had the capacity in-house to develop it further, but we wanted to share it with the community and invite others to experiment with it.

A few important caveats: both the iOS app and the management software are early MVPs (minimum viable products). They don’t meet our own internal standards for the services that we build with departments, and a lot more work is needed to get them to that point. Multilingual support and more accessibility refinements would be the immediate next steps, along with feature improvements like notetaking. Deploying a system that could handle protected data would add another layer of complexity. iOS apps in particular can be challenging to configure and deploy, since they require a Mac running Xcode and an Apple developer license. Future iterations deployed via the iOS App Store would be easier to update and maintain.

Building the e-briefing app was an early chance for us to test ourselves – how we work together, and how we develop applications. Building something imperfect, but working, and getting that into the hands of our users – both ministerial delegations and the trip coordination team – was a great way to learn how to build things better. Sharing what we build publicly is part of that commitment. As our colleague [Jason](https://twitter.com/Actinolite) would say, “if you wait to launch something until you’re not embarrassed by it, you’ve waited too long”. We’d love to hear people’s reactions, and if you take the e-briefing app and run with it, we’d [love to hear from you](mailto:cds-snc@tbs-sct.gc.ca).  
