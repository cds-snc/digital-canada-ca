---
layout: blog
title: 'Moving fast, staying safe: Being ‘agile’ in government'
description: >-
  Working in digital government service delivery, it’s important to find a balance between moving fast and staying safe. In my agile team at the Canadian Digital Service (CDS), we find ‘success’ (releasing products that meet people’s needs) relies on this.
author: 'Paul Craig, Senior Developer, CDS Platform Team'
date: '2022-06-08T16:00:00.000Z'
image: https://de2an9clyit2x.cloudfront.net/banner_blog_fast_safe_agile_b003ff8c43.jpg
image-alt: Two protective helmets – a motorcycle helmet showing “move fast” and a hard hat for construction showing “stay safe.”
thumb: https://de2an9clyit2x.cloudfront.net/small_banner_blog_fast_safe_agile_b003ff8c43.jpg
translationKey: blog-fast-safe-agile
---
It’s a great time to be working in digital service delivery. People are more connected than ever expecting to have access to modern digital services. At the same time, “agile” development — building and testing prototypes in weeks rather than spending years in planning — has gained mainstream acceptance. 

As a Technical Lead at the Canadian Digital Service (CDS), I’ve seen many of the problems that new teams run into, stemming from a cultural clash between code-first agile teams and paperwork-heavy waterfall gating processes. Departments experimenting with agile(-ish) teams still want them to work with approvals groups, which ultimately means finding accommodation within existing departmental cultures and getting work signed off like any other team.

On an agile team, your strength is your ability to quickly prototype and talk to users, but your weakness is the perception that these practices introduce undue risk. It is crucial **to strike a balance between quickly getting to a product release and writing documentation required by traditional gating processes.** Successful agile teams have to move fast, and be safe.

## Move fast: The agile advantage

Agile teams are the real deal. Some of today’s largest companies got to where they are because agile workflows are really good at quickly delivering value, beating out more established companies with slower delivery models. 

In general, as part of an agile team, you want to define your MVP (minimum viable product) and then test it with users as soon as possible. Waterfall planning does not have a good answer to “user needs” . The Agile methodology prioritizes early user engagement. User feedback not only gives you insight to improve your product, it also functions as internal documentation that boosts your credibility. 

Once you are confident that your product works, focus on what you need to do to get it released. It’s far better to have a released “alpha” service than a highly-polished internal prototype. Of course, the tradeoff with “fast” is that, conventionally understood, it means compromising on safety, so you need to balance “moving fast” with “being safe.” 

## “Being safe” in agile

For agile teams, there are 4 main ways in which Agile development is safer than traditional waterfall product development.

1. **Agile reduces existential mistakes** in the design of a service: early user engagement mitigates the risk of launching a poorly performing service.

2. **Agile reduces the cost of mistakes:** frequent iteration means smaller changes more often, which means mistakes tend to be smaller and faster to repair.

3. **Agile reduces the likelihood of mistakes** through increased use of automated processes. In addition to these orthodox agile arguments, there is a final, more philosophical point to consider.

4. **Agile is, above all, a flexible approach that adapts quickly.** Agile teams are pragmatic in solving problems for users.

We’ve previously discussed the first response in other posts (see the blog posts [Learning from the people who want to use our reporting service](https://digital.canada.ca/2019/08/29/learning-from-the-people-who-want-to-use-our-reporting-service-but-might-not-use-it-now/) and [Validation testing: A way to challenge your assumptions](https://digital.canada.ca/2019/07/31/validation-testing-a-way-to-challenge-your-assumptions/)), so let’s look at the others.

### Agile reduces the cost of mistakes

Trying to prevent problems by layering on committees can create a vicious cycle. All these layers of governance are created to prevent costly mistakes, but mistakes are often costly *because* of excessive governance. 

By contrast, agile product development *reduces the cost of mistakes.* Teams who release daily can fix bugs within hours, whereas you might be looking at 3-12 month “release silos” in more traditional teams. 

### Agile reduces the likelihood of mistakes

Traditional waterfall governance relies on humans to audit products *before* they are released. 

This is expensive to run and hard to scale [^1]. If you want to move twice as fast, you need to hire twice the staff. In contrast, agile software development seeks to replace this bottleneck with automated tests a computer can perform, usually in a matter of seconds. It is very common for security documentation to be out of date — once written, it describes how the system *used* to work — whereas automated tests (created through human-led auditing) remove the need for documentation and are up-to-date by definition. 

### Agile is flexible

The second principle in the [Manifesto for Agile Software Development](https://agilemanifesto.org/) is “working software over comprehensive documentation”, which seems like a pretty good approach: let’s focus on building the product rather than writing up lengthy Word docs or PowerPoint presentations. However, the *first* principle is “individuals and interactions over processes and tools,” and unfortunately current governance states that these teams require comprehensive documentation. Traditional oversight teams ask product teams for extensive written documentation about how their system works and is administered. If you don’t provide it, there is little chance that your project will be approved. As an agile team in government, your principle is ‘working software' **and** ‘comprehensive documentation’.

## Moving faster or being safer?

To recap, the two important considerations for agile teams in large organizations are:

1. **Delivering value quickly**, which means getting something into the hands of users rapidly, without spending years in planning.
2. **Managing (perceived) risk**, which means guarding against mistakes and filling out paperwork.

Teams that **move** fast optimize for velocity and build quickly. Teams that **are safe** take their time, focusing on testing pipelines and sometimes writing large documents.

These two points appear to be in tension with each other. If you want maximum velocity, don’t write any tests. Just write code, ship it, and test it in production by having real users find bugs. On the other hand, if you want maximum safety, never release anything. Software that never gets launched never gets hacked.

So where should you come down on the “fast” vs. “safe” continuum? To answer this, figure out what you are up against. If typical product development timelines are 2-3 years to release, see if you can get an alpha service released in 6-9 months. 

## Conclusion

As agile practitioners, the opportunity that exists in government is clear: traditional government IT projects often fail to deliver products that put users first/that fulfill user's expectations. 

Given these systemic problems, it seems like a slam dunk to switch to a widely successful model of project delivery that prioritizes quick feedback and early return-on-investment. Agile teams get more done with less overhead, and by testing with users they are more confident in what they are building.

However, agile teams in the Canadian government operate under pretty tough conditions, typically having to seek accommodation within an existing culture of extreme risk-avoidance. The strength of agile teams is their focus on shipping early and improving incrementally — but you *do* have to ship *something*. Given this, it is extremely important to balance a commitment to safety with a desire to quickly get to a release.

Blending two opposed approaches will always present challenges, but it’s important to remain focused on delivering real value for citizens. At the end of the day, you need to prove your approach works by getting it to work. Pick a product, keep a tight rein on your scope, get it into the hands of users, and tell your story along the way. Moving fast shows what is possible, while being safe ensures you are viable.

------
[^1]: [The practice of System Reliability Engineering](https://sre.google/sre-book/eliminating-toil/) defines this low-value, repetitive work as “toil.”
