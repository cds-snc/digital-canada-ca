---
title: "The s(ecurity) in digital is silent"
description: "I’ve come to the conclusion that writing about security is harder than actually doing it. This is likely due to having avoided talking or writing about what I’ve done at work for the better part of the last decade. Bear with me, this may be interesting."
author: John O'Brien, Security lead
date: 2018-07-11 09:00:00 -0400
image: the-security-in-digital-is-silent.png
image-alt: An open lock
lang: en
layout: cds/post
trans_url: "/2018/07/11/dans-le-monde-numerique-la-securite-se-cache"
---

I’ve come to the conclusion that writing about security is harder than actually doing it. This is likely due to having avoided talking or writing about what I’ve done at work for the better part of the last decade. Bear with me, this may be interesting.

I’ve spent the majority of my career with the Communications Security Establishment (CSE) as a [‘super secret spy’](https://www.cbc.ca/news/technology/cse-canada-cyber-spy-malware-assemblyline-open-source-1.4361728), doing my best to detect and respond to cyber attacks against Government of Canada systems. CSE does some seriously cool stuff. You should totally [apply](https://www.cse-cst.gc.ca/en/careers-carrieres), after a stint [with CDS](https://digital.canada.ca/work-with-us/) first of course.

Joining CDS was not a decision I took lightly. Security professionals, myself included, tend to be a particularly odd bunch; naturally pessimistic, analytical, and not prone to bouts of cheer. Core to that decision was the offer to apply the knowledge and lessons learned from defending government systems, to build a culture and practice of good security and reliability engineering within CDS. To borrow a phrase from a friend, [‘Pushing left, like a boss’](https://medium.com/@shehackspurple/pushing-left-like-a-boss-part-1-80f1f007da95).

Security is one of those topics that is easy to ignore. The security industry has allowed an ecosystem to emerge where the things that get the most attention are vulnerabilities with fancy logos and catchy names, massive data breaches, and state-sponsored hacking that appears to be unstoppable. Fancy schmancy self-taught artificial intelligence blockchain neuralnets take precedence over mundane tasks such as reducing technical debt because let’s face it, very few people win awards for writing less code.

I’d like to try a slightly different approach to security; a little more mundane and a little more pragmatic. We plan to publish a series of articles about our own best practices as we work with new partners and build new products. These practices will be crucial to our path forward in delivering secure and reliable services to Canadians.

## HTTPS everywhere

Before joining CDS, I read through the government’s recently published [‘Strategic plan for information management and information technology’](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/strategic-plan-2017-2021.html), to see what security-related initiatives were in the pipe. Imagine my surprise when I saw the words ‘HTTPS everywhere’. 

The HTTPS protocol and its insecure cousin HTTP are the protocols that allowed your web browser to talk to our web servers and load this page. HTTPS ensures that no one can peek at the data you send and receive, nor can it be altered in transit. 

The HTTPS everywhere initiative has provided an opportunity to leverage my relationships at CSE, help out some colleagues within the TBS’s Chief Information Officer branch, and to reuse an existing project, [Pulse](https://pulse.cio.gov/), kindly shared with the community by the awesome people at [18F](https://18f.gsa.gov/).

CDS is currently partnering with TBS to extend and deploy this product to assist with the government wide [implementation of secure web connections](https://www.canada.ca/en/treasury-board-secretariat/services/information-technology/policy-implementation-notices/implementing-https-secure-web-connections-itpin.html). We’re committed to providing a secure connection to any service or website that we build. Look up in the top left corner of your web browser. Do you see a little green lock or bar that says “Secure”? Great! If not, let us know as something has gone horribly wrong. 

The benefit to this product? When you’re building the “thing” you get to be the first to test it. We tested our own domain names and were dismayed to realize that in our excitement to deploy our website last year, we chose a setting in our AWS Cloudfront configuration that prioritized backwards compatibility over the use of secure ciphers and protocols.

<img width="100%" style="float:left;" alt="Initial testing of the Pulse platform seeded with canada.ca domains." src="/assets/img/cds/post-images/https-en.png">

Suffice it to say, we failed our own compliance checks, but were able to fix one of the issues in less time than it took to write this last paragraph. We’ll be cracking away at implementing HSTS soon, but that will likely be the topic of a future post. 

## Start with the fundamentals, work towards the shiny

Implementing secure connections may seem like a trivial issue to tackle as a one of our first ‘security’ projects. It’s simple, it’s safe, but it it’s also an area where there is still room for significant improvement, and we’re glad to help others. We’ll be talking more about our work on this project in the coming weeks so stay tuned for further details.

My plan is to focus on the fundamentals and work towards the shiny. I hope you come along for the adventure.
