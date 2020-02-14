---
title: Technology choices at CDS
description: >-
  A few weeks ago, we opened our public recruitment campaign, looking for
  designers, developers, data scientists, product managers, and engagement
  experts. On the developer stream, a number of people have reached out to ask
  which technology platforms and programming languages we work in. It’s a great
  question! One of the exciting parts of joining CDS at such an early stage in
  our existence is that you’ll have a chance to shape how our technology choices
  evolve. With that in mind – none of these are set in stone – I thought I’d
  share the current thinking of our developer team, and the two (competing)
  goals that influence the technologies we choose.
author: 'Sean Boots, Developer'
date: '2017-11-06 09:00:00 -0400'
image: /img/cds/blog-technology-choices-at-cds-2017.jpg
image-alt: A computer screen showing results from a test suite
translationKey: technology-choices-at-cds
thumb: /img/cds/thumbnails/blog-technology-choices-at-cds-2017.jpg
processed: 1550672961768
---
A few weeks ago, we opened our [public recruitment campaign](/join-our-team/), looking for designers, developers, data scientists, product managers, and engagement experts. On the developer stream, a number of people have reached out to ask which technology platforms and programming languages we work in. It’s a great question! One of the exciting parts of joining CDS at such an early stage in our existence is that you’ll have a chance to shape how our technology choices evolve. With that in mind – none of these are set in stone – I thought I’d share the current thinking of our developer team, and the two (competing) goals that influence the technologies we choose.

## Being pragmatic and moving quickly

When it comes to project delivery work, CDS’ focus is to build high-quality and user-friendly digital public services. In practical terms, that typically means building web applications. By building for the web, in an accessible and inclusive way, we’re able to reach a broader range of people than if we built (for example) native mobile apps or desktop software. There are definitely cases where these would make sense, but they introduce challenges around ongoing maintenance and future-proofing, as mobile platforms like iOS and Android change quickly and apps need to be constantly updated. Web applications are more universal – anyone with a web browser can use them – and they’re simpler to test and deploy than native mobile apps.

There’s a wide range of languages and frameworks that people use to build web applications. If you’re reading this, you probably have a favourite framework of your own!  Many of our international partners ([18F](https://18f.gsa.gov/) and [GDS](https://gds.blog.gov.uk/), for example) build a lot of their services and tools with Ruby or Python. Different platforms (like Rails or Django) add useful benefits for different technology use-cases, and one of our goals is to choose the best technology for a given problem (rather than starting with a particular technology in mind first).

In the work we’ve done so far, there are two frameworks and approaches that we’ve tended to use the most. Pragmatically, these are also the frameworks that the lead developers on our small team are the most experienced with. [Dave](https://twitter.com/dsamojlenko) (who launched the federal government’s first [GitLab](https://about.gitlab.com/) instance) is a PHP/Laravel developer, and [Mike](https://twitter.com/dexterchief) (who co-leads the [Ottawa Graph meetup](https://www.meetup.com/Ottawa-Graph/)) builds in React and full-stack JavaScript. These frameworks are quite different from each other, but I think it’s healthy that we’re building projects in both of them. Both frameworks are nicely optimized towards different goals.

## Goal 1: Optimizing for reusability

CDS’ mandate is to [build prototypes and digital solutions](/partnerships/) for our departmental partners, who will deploy and maintain these services in the long-term. That makes it critical that the IT teams within departments we work with are able to easily take and run with the things that we build. Within the federal government, many of these teams are specialized in .NET or Java – languages and frameworks that have been standardized for years, but that aren’t particularly well-optimized for building web applications quickly.

[Laravel](https://laravel.com/) is a PHP framework that is highly-flexible, and has a wide-ranging community of open-source packages that easily handle anything from complex user roles and permissions to integrations with other systems. For developers that are used to .NET and Java, Laravel projects are easy to understand, learn from, and build on, which makes Laravel a really useful framework for the projects that we’ll be co-developing with other government IT teams.

We’re also building one of our first major projects with [DrupalWXT](https://github.com/drupalwxt/wxt), a specialized version of Drupal that includes all of the accessibility features of the [Web Experience Toolkit](http://wet-boew.github.io/wet-boew/index-en.html). DrupalWXT provides a great foundation for this project in particular, since the project could involve a lot of customization work in the years beyond CDS’ involvement. The Ottawa region has a talented Drupal community that could help support this, both inside and outside of the federal government. 

## Goal 2: Optimizing for technology pathfinding

On the other hand, [React](https://reactjs.org/) (and full-stack JavaScript more broadly) has taken the web development community by storm, since Node.js was created a few years ago. React (and competing JavaScript frameworks) have enthusiastic open-source communities around them, and technologies like GraphQL introduce entirely new ways of building APIs and integrations with other services. The overall model is, building larger systems by creating small, composable parts or micro-services that fit together. React makes this easy, and new cloud services (particularly serverless or lambda systems) work really well with this approach.

As Mike would say, though, the skills used to build React projects are almost completely different from the skills used to build with more traditional MVC frameworks. It’s fascinating to watch him build components and projects in React – the final products are stunning, but the learning curve is steep. 

## The road ahead

As an organization with a mandate to experiment and to demonstrate what’s possible when building digital services, I think it’s important that we build things with the same cutting-edge technologies as our private sector peers. It’s also important, though, that we build things that colleagues across government can easily deploy, customize, and run with. Having a combination of PHP and full-stack JavaScript-based projects allows us to do both, and to optimize for either reusability or experimentation depending on the project.

A key part of this is also about helping enable colleagues across government to experiment as well. If you’re a developer working in a “.NET shop” and you’d like to build something in a new framework or programming language, we’d love to chat. We’ll share what we’re learning along the way – when things work, and when they don’t – and if there’s any way we can empower you to use leading-edge tools, we’re here to help.

What do you think? Are we missing the latest and greatest modern framework? We’d love to hear from you. All of our code [is on GitHub](https://github.com/cds-snc), and we’re just getting started on new projects. Give us a shout on Twitter anytime you have questions, and if you’re interested in joining the team [apply now](/join-our-team/)! We’d love to have you along for the journey.

