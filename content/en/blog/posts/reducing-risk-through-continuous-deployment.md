---
title: "Reducing risk through continuous deployment"
description: "It’s not just possible; it’s standard practice in industry. The tooling is available to everyone today, and it’s cheap."
author: Jason White, Head of data science
date: 2018-05-16 09:00:00 -0400
image: /img/cds/blog-continuous-deployment.jpg
image-alt: A man works at his desk working on code.
translationKey: "reducing-risk-through-continuous-deployment"
---

Most of the departments we work with are deploying new versions of their code quarterly, semi-annually, or annually. This fits well with the standard [waterfall software development](https://en.wikipedia.org/wiki/Waterfall_model) process, but it comes with some serious risks.

## Big Bang deployments are risky

What are [Big Bang deployments](https://en.wikipedia.org/wiki/Big_bang_adoption)? It’s the simplest kind of system changeover or release deployment. One system is turned off while another is turned on. 

We’ve all seen these. They can manifest in several ways:
* “The system is down for the weekend for planned maintenance.”
* “New version number 16 is out!”
* “The system is offline until Wednesday.”

Big Bang deployments rely on a simple assumption: the new version will install and operate as intended. Experience teaches us that the more different the new version is, the more is likely to go wrong, and the more difficult it is to figure out the cause of the failure.

## Bug fixes take too long

A department recently shared an anecdote with us. They have a bug in their code in production, and it’s affecting users today. The bug was fixed weeks ago, but it can’t be deployed until July, meaning though there is a solution readily available, users won’t see it for months.

This is a common story and a side effect of the fixed quarterly (or longer) release cycle. We’ve all been there. It’s frustrating for everyone involved.

## Emergency patches are untested

We don’t get much advance notice on critical security vulnerabilities, like [Heartbleed](https://en.wikipedia.org/wiki/Heartbleed). We also can’t wait to fix them, since they can put our infrastructure at severe risk of being compromised.

This means we have to resort to non-standard, out-of-cycle, untested emergency patches to fix the problem. There are a lot of ways this can go wrong.

## There’s another way: deploy every change, every day

It’s not just possible; it’s standard practice in industry. The tooling is available to everyone today, and it’s cheap. [Amazon deployed to production every 11.6 seconds](http://joshuaseiden.com/blog/2013/12/amazon-deploys-to-production-every-11-6-seconds/), four years ago.

If you’ve read our previous blog posts on [continuous integration](https://digital.canada.ca/2018/03/26/automated-testing-blog/) and [code quality](https://digital.canada.ca/2018/04/24/coding-is-a-team-activity/), you know we follow a pattern of very short, small changes, each reviewed by colleagues and passing a suite of automated tests. The combination of both continuous integration and peer review unlocks the ability to also *deploy* each of these changes individually to production.

Deploying each change, every day, has many benefits:
* The deployment mechanism is completely automated and reliable.
* Each change is very small and therefore *minimizes risk*.
* Critical problems can usually be resolved in minutes by simply reverting the offending change.
* Responding to emerging security threats is much simpler and faster.
* Developers can truly consider features as “shipped”, clearing up valuable mental real estate.

## Deploy != Release

This approach can seem very foreign to those used to the waterfall software development model. One might find it irresponsible to release a new feature this way, and one would be right. But, that’s not what this is proposing. 

“**Deploying**” is just the mechanism we use to get updated code running in production.  
“**Releasing**” is marketing - enabling a feature for general use and encouraging people to use it.

## Both are important; but they can be quite different.

A very common approach is that of “[feature flags](https://en.wikipedia.org/wiki/Feature_toggle)”. You deploy the new feature to production, but only enable it for certain users, such as your development team or user experience researchers. As your confidence in the implementation grows, you gradually turn it up to 1%, 2%, and then maybe 5% of your users, iterating and deploying as you go. When you’re fully confident, you “release” the feature; it’s simply switched on for everyone.

[A/B testing](https://en.wikipedia.org/wiki/A/B_testing/) is another similar approach to iterating, using data from real usage. It can be used in combination with feature flags, but both rely on the simple idea that not everyone has to see the same interface.

## Enabling conditions for continuous deployment

The ability to continuously deploy new code to production depends on a few assumptions:
* Each small change can be trusted - good code review and automated tests are in place.
* The build and deploy process is completely automated.
* We’re building web applications.
* We’re using public cloud (AWS/Azure/Google Cloud).

These assumptions probably don’t hold true for legacy applications, but, they’re usually true for newer systems being planned today. We used all three of these practices (continuous integration, code reviews, continuous deployment) on our recent [API project with NRCan](https://github.com/cds-snc/nrcan-energuide-api-poc/).
