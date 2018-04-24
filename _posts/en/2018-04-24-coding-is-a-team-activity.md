---
title: "Coding is a Team Activity"
description: "In our experience, software development should be a team effort. This doesn’t mean multiple developers individually contributing code to a single code base; rather, the team as a whole is responsible for each line of code."
author: Jason White, Head of Data Science
date: 2018-04-24 09:00:00 -0400
image: blog-team-coding.jpg
image-alt: A computer screen displays 200 lines of JavaScript code in Sublime Text.
lang: en
layout: cds/post
trans_url: "/2018/04/24/coder-une-activite-dequipe"
---

In our experience, software development should be a team effort. This doesn’t mean multiple developers individually contributing code to a single code base; rather, the team as a whole is responsible for each line of code. For any production system, we have an expectation that all code will be approved by at least one other developer, before it is accepted.

If you read our previous blog post on [Continuous Integration](https://digital.canada.ca/2018/03/26/automated-testing-blog/), you know our basic coding workflow is:

* Branch from master
* Develop feature/fix bug
* Create pull request
* Perform automated tests and peer code review
* Merge to master and deploy

The peer code review step provides us several benefits:

* More comprehensible code
* Helping onboard junior developers
* Increased personal accountability
* Shared team responsibility

## More comprehensible code

It isn’t sufficient that our code functions. It isn’t even sufficient that it works perfectly. It must be maintainable, which means it must be readable by humans. The truth is, in a well-maintained codebase, code will be read by humans much more often than it is written. It must be understandable and logical by humans, and almost incidentally understandable by computers.

As the famous paraphrase of Brian Kernighan goes:

> Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.

The peer review process prevents “clever” or other incomprehensible code from being merged in. Everyone on the team is encouraged to ask questions or raise objections, regardless of “rank” or experience level. If the pull request doesn’t have sufficient tests, or doesn’t meet other requirements like accessibility, security, or privacy concerns, this is a line of defence.

Importantly, this is a peer review process. Managers cannot be the bottleneck here.

## Helping onboard junior developers

I’m a huge fan of tagging new team members on every pull request. They aren’t required to respond, but the more they read and see how the process works, the faster their confidence grows. I’m often surprised by how quickly their questions reflect areas of my own code that could be improved.

## Increased personal accountability

Developers often don’t like to admit when they’re stuck. We often see it as a personal failing, a symptom of the very common [Imposter Syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome). Sometimes, this results in spending too much time spinning wheels on a difficult problem, growing ever more frustrated for not figuring it out faster.

To break out of this cycle, sometimes it’s tempting to copy/paste some hacky solution to get out of a jam. This just increases [technical debt](https://en.wikipedia.org/wiki/Technical_debt) for the rest of the team.

Both issues are addressed by teamwork. If a team member stops contributing for a few days, it’s very obvious to the rest of the team that something is wrong. If the team member tries to slip a bad hack into the codebase, the rest of the team gets a chance to point out alternatives.

Taking a more proactive approach, when I’m stuck, I like to push whatever I’ve figured out up to GitHub, and create a Work-in-Progress pull request, marked with the title “[WIP]” to make it clear that it isn't complete. I’ll then tag people I think might have an opinion and invite feedback. It might be uncomfortable to admit that I don’t know how to do something, but it gets easier in time.

## Shared team responsibility

We can’t maintain the system if it’s written by a bunch of individuals. We must act as a team, collectively responsible for the system. Therefore, we need to collectively approve all code, as a team.

Anyone who approves a pull request is equally responsible for the code as the author. This gives future developers more of a paper trail to follow later if they have questions. It also enables us to take slightly larger risks when writing the code, knowing there is a team of peers that will have an opportunity to object or suggest alternatives.

## Expectations

It’s important to set some team norms with respect to pull requests, specifically around size and turnaround times.

> 10 lines of code = 10 issues.  
> 500 lines of code = looks fine.  
> Code reviews.

> Author: @iamadeveloper

I like to keep pull requests down to 200 lines of code or less. Preferably less. They should also ideally fix one thing. One-line pull requests are my favourite. Special credit for one-character pull requests that actually fix something. This helps code reviewers focus on one atomic change.

If we fix the size of pull requests down to a reasonable size, we can also set expectations for turnaround time. One business day is about as long as I find reasonable, along with an ability to ping someone to see if a faster review is possible if the pull request is blocking other work.

Quality peer code reviews are typically fairly easy to begin on your projects right away. We encourage you to give them a shot!
