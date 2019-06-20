---
layout: blog
title: Security is hard. It’s also necessary and manageable.
description: Digital security explained like airport security.
author: 'Tim Arney, Developer'
date: 2019-06-20T13:00:00.000Z
image: /img/cds/airplane.jpg
image-alt: An airplane taking off on a runway at dusk.
translationKey: security-hard
thumb: /img/cds/airplane.jpg
---
Digital security is hard. Even the best engineering and IT teams are prone to make mistakes at some point. But like airport security, steps and processes along the way keep you safe and secure.

## Base assumptions

As far as security in your code goes, there are some basic assumptions we can make:

* _Your security posture decays over time._ Iterations to the process will always be needed as technology updates.
* _Self-policing is inefficient._ Airports don’t trust passengers to simply self-monitor as they pass through metal detectors.
* _We need to constantly monitor._ Someone needs to be paying attention at all times, not just at the beginning.

## Change is constant

Agile or waterfall, at some point, you’re going to have to make changes to your code. When you introduce new features or update packages, the surface area of what we're building changes. Bits of your code may be true at one point in time but may not necessarily be true later. We call this "decay". Decay can happen in many ways. There's clearly a vulnerability there. 

For example, the contents of your luggage are going to change over time. At the beginning of your trip, your luggage was mostly empty, on the way back you have a lot of souvenirs. Security in the airport cannot ensure that those new contents are safe simply because they’ve seen your suitcase before.

## Identity check

In an airport, you're going through a series of checkpoints to validate that you are who you say you are. Your passport and boarding pass are subsequently checked at multiple points from when you enter the airport, to when you board the plane.

When it comes to code, we follow the same type of patterns. We can run our code through a series of checks and tests to prove it does what it says does. Ensuring that all your code performs the way it should protects us from wonky code being deployed.

But what if we could automate these security checks? 

## Automatic reporting

Given current infrastructure and developer tooling, it should be possible to automatically verify a large number of controls listed inside the [ITSG-33](https://www.cse-cst.gc.ca/en/system/files/pdf_documents/itsg33-overview-apercu-eng_1.pdf). The ITSG-33 being security guidance documentation that the Government of Canada has put into place for all departments.

When it comes to security, we know that quality assurance checks need to be implemented and verified in a manual process. Typically that means manually assembling and printing a document or a series of documents. That would be like airport security printing off all your information and walking it over to the next person who needed to scan your passport. This doesn’t scale, right?

## What we did

Our mission was simple; build a prototype and research it with possible users. So that’s what we did. Here’s how.

To keep our deploys secure and to avoid manually creating these large documents, our mission was to build a series of checks that run on every deploy of our applications. Also we wanted to make the results of these checks available through an API. By doing this we can:

* Ensure our controls don’t decay over time
* Rerun our checks automatically and create up to date reports as changes happen
* Run checks when we release new code or when we restart our containers

### Goals

* Build security reviews into continuous integration pipeline. As code is deployed, security checks happen automatically, and trigger at every release.
* Leverage existing features and use common APIs to complete checks. Why reinvent the wheel when there are great fully functioning wheels available? 
* Decouple checks from the reporting tool. That means that regardless of what language you chose to write you code, the reporting tool can still do checks. 
* Make reports available through multiple channels in real time (GraphQL, PDF, web). If we still need to print documents to prove our work is secure, at least we don’t have to do so manually anymore.

### What we came up with

We created a series of checks that can validate that our infrastructure and code is indeed doing what it says it is doing. When a check finishes it reports back by writing a file to a shared directory with its results.

### How we did it, step by step

1. When an app is deployed it triggers a list of jobs (checks) to be run.
2. Jobs are containers written in different programming languages (Go, Rust, JavaScript, Crystal).
3. Each container writes a JSON file to a shared directory, tagged with the release ID.

![The application uses an ESLint file to do a static code analysis.](/img/cds/compliance-code-en.png)

4. We have a JavaScript app to watch a shared directory and ingest JSON files.
5. The results get saved into MongoDB grouped by release and control.
6. This app serves the data through a GraphQL API.
7. We have a public facing JavaScript app that renders the data in a user friendly format

Show me the code for [Security Goals](https://github.com/cds-snc/security-goals).

## Moving forward

We've only begun our journey to prove our assumptions. We’re currently in the process of testing this on a couple of services we're working on at CDS. As we go we’ll be writing reusable “check containers” and working with the security teams of our partners to determine exactly how much we can automate.
