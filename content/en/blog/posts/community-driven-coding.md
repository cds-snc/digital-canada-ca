---
title: "Community-driven coding: Cooperating to make each other’s work better"
description: "If you're looking, you can find community all around you. Open source software development is no exception. By its nature, open source development is community-driven. People share and build on each other's work, making it better for all."
author: David Buckley, Developer
date: 2018-07-17 09:00:00 -0400
image: /img/cds/blog-david-https-header.jpg
image-alt: Illustration of two people painting a giant, physical web page.
translationKey: "community-driven-coding"
---

If you're looking, you can find community all around you. Open source software development is no exception. By its nature, open source development is community-driven. People share and build on each other's work, making it better for all.

When we adapt software, our relationship with the original author(s) could be distant - just a footnote attribution to their original work. But it's hard to stay distant when the developers go out of their way to be helpful. Eric went out of his way.

[Eric Mill](https://twitter.com/konklone) is one of the original Pulse developers. [Pulse](https://pulse.cio.gov/) is a project by 18F to help federal domain owners know if they meet new security requirements such as enforcing HTTPS. The Government of Canada has the same need, so we used 18F's existing open source code for Pulse to kick-start our development.

As a bonus, we got Eric's experience with it. Eric helped us know what to expect during the development phase of the HTTPS project. He shared:
* the most common questions he got from domain owners
* what expectations domain owners had for how fresh results were
* what kind of traffic volume Pulse got, and
* who their users were.

The cooperation went both ways. We gave back a small set of improvements, such as some basic packaging, more formalized logging, and a bit of general cleanup. The most important addition was automated testing. During development we write tests to verify the system is correct, our addition means that every time a change is proposed those tests will be run automatically verifying that nothing has been broken by the changes. 

And the cooperation continues. While testing our system last week, we uncovered a bug. Values in one of the columns were not being sorted correctly. After tracing it back to the original Pulse repository and verifying that the bug was present on their version too, we worked with Eric to figure out what was going on. Eric noticed that the values were being sorted as if they were text (ie. 33% 33% 33% 33% 3% 29% 28% …)

<div class="col-sm-6">
    <img width="100%" style="max-width:190px;" alt="A values table with seven bars, each displaying a different percentage. In this table, the percentage values are sorted by text order (33%, 33%, 33%, 33%, 3%, 29%, and 28%)." src="/img/cds/blog-david-https-en_1.png">
</div>

<div class="col-sm-6">
    <img width="100%" style="max-width:200px;" alt="A values table with seven bars, each displaying a different percentage. In this table, the percentage values are sorted by numeric order (33%, 33%, 33%, 33%, 29%, 28%, and 26%)." src="/img/cds/blog-david-https-en_2.png">
</div>

Once that realization was made, it was a fairly simple thing to enforce numeric sorting on the column, resolving the issue.

The fix has now made its way into both our projects, leaving them both better off. And our relationship with Eric a little bit stronger. Thanks, Eric.