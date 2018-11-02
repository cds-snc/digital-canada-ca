---
title: "Your team doesn’t have time <strong>not</strong> to use automated testing"
description: "On the Natural Resources Canada (NRCan) application
programming interface (API) product, we follow a common continuous
integration (CI) process, including extensive use of automated testing.
In our opinion, CI and automated testing is a fundamental requirement for
producing and maintaining high-quality software products."
author: Jason White, Head of data science
date: 2018-03-26 09:00:00 -0400
image: /img/cds/blog-automated-testing.jpg
image-alt: "Three people are sitting around a table working on laptops. One person is pointing at the screen of a person across the table, who gives a thumbs-up."
translationKey: "automated-testing-blog"
---

On the Natural Resources Canada (NRCan) application programming interface (API) product, we follow a common continuous integration (CI) process, including extensive use of automated testing. In our opinion, CI and automated testing is a fundamental requirement for producing and maintaining high-quality software products.

Following this CI process is one tool we use to **reduce risk and save time** in our software development practices.

## What does continuous integration look like?

Our developers follow a simple process to contribute changes to our codebase:

* Create a branch from the current “master”
* Push their small proposed changes to this new branch
* Automated test suite runs automatically to verify 100% of tests pass
* Create a pull request and ask their teammates to review the code
* Merge the proposed changes to “master”
* Automated test suite runs automatically again on the master branch

This pattern is one type of CI. It allows developers to commit multiple independent changes simultaneously in a team, with rapid iteration.

It differs from the more common “feature branch” pattern, where developers work in isolation on their own branch for weeks or months. This pattern usually leads to painful and buggy merges as deadlines approach.

We chose CircleCI to automate our test processes. It runs our entire test suite on every push to Github. Running the test suite takes approximately two minutes after pushing, so developers get very rapid, automated feedback on their proposed changes. Branches with a failed CI run are not permitted to be merged.

<img width="80%" alt="Output logs showing CircleCI passing test results" src="/img/cds/nrcan3-img1.png">

Successful CI run

<img width="80%" alt="Output logs showing three passing CircleCI test results and one failed" src="/img/cds/nrcan3-img2.png">
<img width="80%" alt="Output logs showing a failed test result" src="/img/cds/nrcan3-img3.png">

Failed CI run

The master branch is never permitted to remain in a failing state. This state, known as a “broken master” or a “red master”, is treated as an urgent situation that must be fixed immediately, usually by simply reverting the change that broke it.

## This is great, but what about time and costs?

Setting up CircleCI to run an existing test suite took approximately 45 minutes. The test suite takes about two minutes to run each time. It costs us approximately $50/month to run CircleCI on this project ($50 per month. Not $50 per month per user).

When we discuss these efforts with other teams, they often claim that they’d love to follow this approach, but they don’t have enough time. We beg to differ: your team doesn’t have the time **not** to use automated testing. In the short term, it might be correct (debatably), but it certainly doesn’t make sense in the medium to long term.

Having a reliable, comprehensive suite of tests provides many long-term benefits:

* New and junior team members can be onboarded quickly and safely
* Developers are able to contribute code quickly and confidently
* Separate testing steps are redundant, improving iteration speed

## Wait, you don't have separate software testers?

That’s right. The idea that developers shouldn’t test their own code is, frankly, antiquated. Patterns like [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development) are common modern practices that have shown to result in higher quality code, and are common in industry today.

With this approach, a separate testing function is counterproductive, as it externalizes the responsibility for code quality outside of the development team. Catching bugs becomes someone else’s problem, and that’s not conducive to good quality software development. As a result, we have no need for dedicated QA specialists.

## Results

The [API codebase](https://github.com/cds-snc/nrcan_api) is of very high quality, one that each member of the team can be proud of. It has allowed us to onboard new members of various skill levels with ease and safety, pushing their first changes within a day or two of arriving. We can depend on our testing infrastructure to ensure that people can make changes independently in a safe manner.

Our developer teammates are empowered to try new approaches to solve problems or reduce technical debt. They have confidence that the test suite is there to catch them if they make a mistake. If they don’t understand a portion of the codebase, the testing suite is a great first stop to see examples of how the code is designed to be used.

Perhaps the best result is the simplest: after six weeks following these practices, not one member of the team would consider going back.

We will share more on the technical aspects of the API we are building with NRCan. In the meantime, you can read our previous posts on this partnership:

* [Part 1: Conducting user research with NRCan to inform an API build](https://digital.canada.ca/2018/02/15/a-conducting-user-research-with-NRCan/)
* [Part 2: Co-locating with NRCan for a week](https://digital.canada.ca/2018/02/15/b-colocating-with-NRCan/)
