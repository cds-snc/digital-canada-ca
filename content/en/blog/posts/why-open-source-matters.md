---
layout: blog
title: Why open source matters
description: >-
  Working in the open and publishing open source software is a key part of how
  CDS works. Here’s why open source is useful, how CDS approaches it, and
  answers to questions that our friends across government sometimes ask.
author: 'Sean Boots, Policy & Josh Ruihley, Technical Advisor'
date: 2020-02-24T14:58:16.697Z
image: https://de2an9clyit2x.cloudfront.net/blog_open_source_b720f5ece8.jpg
image-alt: >-
  People collaborating on putting together a puzzle and building a house out of
  different blocks.
translationKey: why-open-source-matters
thumb: https://de2an9clyit2x.cloudfront.net/small_blog_open_source_b720f5ece8.jpg
---
A few weeks ago, we posted [a Twitter thread](https://twitter.com/CDS_GC/status/1227971000471560197) on what open source is and how it makes online services better. We get a lot of questions about open source software from across the government. Using open source code – and publishing the software code we write – are some of the Canadian Digital Service’s (CDS) most important principles. If you’re curious why, read on!

## Benefits of open source

Open source refers to software code that’s available for others to view, copy, and modify for their own purposes. It’s code that’s published under an [open source license](https://opensource.org/licenses) (like the [MIT License](https://github.com/wet-boew/wet-boew/blob/master/License-en.txt), for example) and typically shared on a software collaboration platform like GitHub.

Open source software is used all over the world, by small and large companies, organizations, and governments alike. It’s been used in the Government of Canada for more than twenty years. The browser you’re reading this in and the systems that transmit information across the Web are almost all built with open source software.

When you’re a government team developing or buying new software (for a new online service, for example), publishing your new code as open source provides a number of important benefits. Anna Shipman (the UK government’s former open source lead) put together [a great list of these benefits](https://gds.blog.gov.uk/2017/09/04/the-benefits-of-coding-in-the-open/):

*   It encourages good practice
*   It makes collaboration easier
*   External users can help make it better
*   Others can learn from your work
*   It makes it easier to share standards
*   It improves transparency on government’s work
*   It clarifies ownership
*   It helps make government technology seamless

Building software in the open brings out the best in people’s work. It helps us learn from each other, and makes it easy for people to continue contributing to useful software even as they move from one part of government to another. Open source saves time and money, by making software easier to reuse and adapt. Because of these benefits, governments around the world have more enthusiastically adopted open source in the past few years.

## CDS’s approach

Inspired by other countries’ adoption of open source (particularly the UK, France, and the United States), we knew that working in the open and publishing open source code would be a key part of CDS’s approach since [before we launched](https://digital.canada.ca/2017/07/28/think-big-start-small/).

All of the software code we develop is published as open source code [on our GitHub organization](https://github.com/cds-snc). We’ve licensed our code under the MIT License to maximize its reusability, inspired by other Government of Canada open source projects like the [Web Experience Toolkit](https://github.com/wet-boew/wet-boew). Publishing the code we develop as open source software is [built into all of our partnership agreements](https://digital.canada.ca/partnerships/) with the departments we work with.

Keeping this code open source is important, to make it easier for our partners to adopt and use, and to make it easier for other departments to adapt and learn from. Working in the open (on a mature platform like GitHub) also lets us use a wide range of modern software development tools (like [continuous integration systems](https://digital.canada.ca/2018/03/26/automated-testing-blog/)).

And, most importantly, working in the open as we develop software code is a great way of collaborating with the people that we serve. As [our recent Twitter thread](https://twitter.com/CDS_GC/status/1227971000471560197) illustrates, members of the public have made suggestions to our code that improved the content, accessibility, and functionality of the things we build.

## Frequent questions

Although open source has been used in government for a long time, it’s still new to a lot of teams. In our work, we’re often introducing fellow public servants to open source for the first time. Here are some of the questions we sometimes get!

### Can anyone just modify your code?

No. People can make suggestions (by [creating a pull request](https://digital.canada.ca/2018/04/24/coding-is-a-team-activity/) on GitHub) that our developers then carefully review and decide whether to use or not. [Automated testing tools](https://digital.canada.ca/2018/03/26/automated-testing-blog/) also help make sure any new suggestions don’t accidentally (or purposefully) introduce bugs or vulnerabilities into our systems.

### Am I allowed to go ahead and publish my team’s code on GitHub?

You should make sure that an executive on your team is okay with you doing that beforehand (for example, someone at a level with financial signing authority). Ideally, they can give you blanket permission so that you can create and publish open source code anytime in the future. Managers and senior leadership [are strongly encouraged](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/open-source-software.html) to support you in publishing your code as open source. This process varies a bit by department, but if someone tells you “no”, let us know! We really think every software team in government should be working in the open, and we’re happy to help out.

### Does TBS policy support open source software?

It does! “Work in the open by default” is one of the [Government of Canada Digital Standards](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html). [Appendix A to the new Directive on Service and Digital](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32602) says, “where possible, use open standards and open source software first” (section A.2.3.8.1), and “by default any source code written by the government must be released in an open format” (section A.2.3.8.3). Our colleagues in the [Office of the CIO](https://www.canada.ca/en/treasury-board-secretariat/corporate/organization.html#ocio) have published [detailed guidance on open source](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/open-source-software.html), and recently [launched a new website](https://canada-ca.github.io/ore-ero/en/index.html) that lets departments share open source software they’re working on. If the software you’re producing _isn’t_ open source, you might end up facing more scrutiny from various review or oversight groups in the future.

### What if our software code is protected information?

If you’re using modern software development best practices, you shouldn’t have any sensitive information in your software code. Things like administrative credentials, server addresses, API keys, and other secrets should be stored in environment variables or other equivalents, rather than in the source code itself. Our cybersecurity colleagues in the Office of the CIO stated that, under almost all circumstances, [software code doesn’t fall into any of the government’s categories for protected information](https://github.com/canada-ca/Open_First_Whitepaper/issues/83#issuecomment-361065123).

### What about old software code that we’re not regularly updating?

Old software code (for example, from legacy systems) that isn’t regularly updated is more likely to have sensitive information or vulnerabilities in the code. Cleaning this up to make it ready to publish can often be challenging. It’s not impossible, but as a first step, it’s often easier for teams to release new projects first. Anna Shipman from the UK has some really useful guidance on [how to open up closed code](https://technology.blog.gov.uk/2018/02/19/how-to-open-up-closed-code/). For code that’s no longer in use, publishing it in the open can still be really valuable to students and researchers – NASA open sourcing [the software code that powered Apollo 11](https://github.com/chrislgarry/Apollo-11) is a great example of this.

### How do I comply with Official Languages requirements when I’m publishing open source code?

Working in the Government of Canada includes important commitments to communicating and providing services in both English and French, and promoting a bilingual public service, based on the [Official Languages Act](https://laws-lois.justice.gc.ca/eng/acts/o-3.01/), the [Directive on Official Languages for Communications and Services](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26164), and the [Directive on Official Languages for People Management](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26168) (among others). Our approach is to ensure that Readme files and product documentation (for example, on [how a product works](https://cds-snc.github.io/track-web-security-compliance/)) are made available in both official languages, in equal quality, by the end of the product’s [alpha phase](https://digital.canada.ca/2018/11/29/from-build-first-to-users-first/#the-details) or by time we blog or tweet about it – whichever comes first. The software code itself (including inline comments) can be [written in the official language of choice](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/open-source-software/guide-for-publishing-open-source-code.html#toc08-4) of each contributing public servant or member of the public.

### If I’m procuring software from a vendor, can I require that the code they write is open source?

You can! This was a key feature of the [agile procurement pilots](https://buyandsell.gc.ca/cds/public/2017/11/23/11cd6397ea30bc8d834c50dba11e6aca/loi_no_24062-180181_e.pdf) undertaken recently by the Office of the CIO. As long as license requirements are clearly stated upfront in your procurement documents (for example, that any software code produced under this contract must be the intellectual property of the Government of Canada, and licensed under an MIT License), you’re good to go! You can also ask for examples of previous, publicly-available open source work as an evaluation criteria.

### Is there any code that we shouldn’t make open source?

Old source code that you haven’t yet reviewed for sensitive information (or, if you’re still using it in production, for reliability or security issues) isn’t appropriate to make open source. That’s also true for software used for fraud detection or national security work. People are often nervous about making eligibility criteria, business rules, or algorithms open source, but doing this provides [a number of transparency and auditability benefits](https://www.themandarin.com.au/116681-when-machines-are-coding-the-rules-on-which-our-society-runs-we-get-better-results-new-opportunities-for-the-public-and-regulators-and-companies-looking-to-make-compliance-easier/). Overall we’d say: the more software you make open source, the better.

### Who else is using open source in the Government of Canada?

The [Web Experience Toolkit](https://github.com/wet-boew) and the [GCTools team](https://github.com/gctools-outilsgc) were early champions of open source, who paved the way for working in the open. Other great examples include the Communications Security Establishment, which released [Assemblyline](https://cyber.gc.ca/en/assemblyline) in 2017, an open source malware-detection tool; more recently, the [GC InfoBase project](https://github.com/TBS-EACPD/infobase) and [GC Accelerators](https://medium.com/core-technologies/gc-accelerators-6d3787269ebd#b170) were also published as open source software. You can find more examples on the Canada-wide [Open Resource Exchange](https://canada-ca.github.io/ore-ero/en/index.html).

### Where can I learn more?

The [Government of Canada Digital Standards](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html) are a great place to start – they’re what we should all be aiming for as we design and build better services for Canadians. Our colleagues at the Office of the CIO recently published an [Open First Whitepaper](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/open-source-software/open-first-whitepaper.html) as well as as a [Guide for Contributing to Open Source Software](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/open-source-software/guide-for-contributing-to-open-source-software.html).

We’re indebted to the public servants and citizens who have [championed open source](https://open.canada.ca/en/blog/open-source-software-and-open-standards-government-canada) in the Government of Canada for more than a decade. Here’s to making things open! If you have questions about using or publishing open source software in government, [don’t hesitate to reach out](mailto:cds-snc@tbs-sct.gc.ca).


