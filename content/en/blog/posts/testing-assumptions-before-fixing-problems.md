---
layout: blog
title: 'Testing assumptions before fixing problems'
description: >-
  In this post we talk about how we tested assumptions before jumping in to solve assumed problems around a process for getting an Authority to Operate (ATO) – and ended up learning some things we wouldn’t have otherwise known!
author: 'Caitlin Tuba, CDS and Po Tea-Duncan, TBS Cyber Security, Office of the CIO'
date: '2021-03-25T14:30:00.000Z'
image: https://de2an9clyit2x.cloudfront.net/blog_banner_testing_security_assumptions_946d799a9a.jpeg
image-alt: A person brainstorming questions and then investigating those questions deeper, before trying to fix and find answers for them.
thumb: https://de2an9clyit2x.cloudfront.net/small_blog_banner_testing_security_assumptions_946d799a9a.jpeg
translationKey: blog-testing-security-assumptions
---
Is solving a problem that doesn’t actually exist, really solving a problem? When we work off of assumptions – and don’t test them – we may be doing just that. 

Assumptions make it easier for our brains to process information by finding patterns in past experiences or things we’ve read. This is a helpful way for our brains to save energy, but not always helpful when trying to fix problems. Assumptions aren’t fool-proof, and don’t often address nuance and context, which are important for effective problem solving. 

Verifying our assumptions is needed to go beyond our own internal biases and agendas. Sometimes we tend to assume things mostly from our standpoint and what will impact us, but testing those ideas helps to broaden that perspective.

We learned this when we partnered with the Cyber Security team at Treasury Board of Canada Secretariat (TBS) to address the challenges around the process for getting an Authority to Operate (ATO) – and ended up learning some things we wouldn’t have otherwise known.

## Noticing challenges with getting an ATO

There’s [an official definition of an ATO](https://cyber.gc.ca/en/guidance/it-security-risk-management-government-canada-itse10033), but simply put – it’s an approval from a senior official that gives a team permission to run a service, after that team has shown how it’s addressing IT security risks. The way that a team addresses the security risks in order to get that coveted ATO, is through a process called “Security Assessment and Authorization”, aka SA&A.

The Cyber Security team knew something wasn’t working with the SA&A. They noticed that teams looking to get an ATO would complete the SA&A very late in the process of building their service – almost as an afterthought. 

The Cyber Security team knew the community was frustrated with the SA&A and wanted to understand what they could do to make it more user-friendly. The goal was to encourage teams to start working on it earlier in their building process – rather than seeing it as a checklist item to save for the end – so they could launch when they wanted to launch, with all security risks accounted for. Win-win! 

## Understanding the problem

When we started the partnership, we had a few hunches as to where the frustrations were coming from. However, instead of jumping right in and starting to fix these assumed issues, we wanted to validate our assumptions to ensure our decisions and problem-solving efforts were based in fact.

### 1. Brainstorm and prioritize assumptions
As a team we brainstormed our assumptions of what the problem might be. We then prioritized our assumptions based on the impact it would have if the assumption was wrong. This helped us focus on validating the most impactful assumptions first.

These were:

* Security processes within government are slowing down iterative development cycles;
* Security assessments take 60-90 days to complete;
* Long timelines are due to back and forth between security teams and application teams (throwing over the fence vs. working collaboratively); 
* Teams are focused on ticking checkboxes without really considering the risk profile and security of a system; 
* There should be more of an iterative way to perform security assessment activities;
* Business leaders evaluate their security risk based on the report that comes out of the SA&A process, and;
* It is possible to be both iterative and secure.

### 2. Research each assumption

With a list of prioritized assumptions, we picked a research methodology that would help us better understand each one. 

* First, we went broad: reading documentation of how application security assessments are done by other organizations. 
* Then, we interviewed people involved in security assessments, inside and outside government, using open-ended and non-leading questions. 
* Finally, we narrowed our focus on the specific Government of Canada context. We interviewed nine different departments of varying sizes and risk appetites, including development teams, security assessors and authorizers.

### 3. Gather and share insights 

By the end of the research, we had a lot of helpful information around both challenges and potential solutions.

First, we gained a better understanding of the **specific challenges people in the Government of Canada were facing** when they tried to get an ATO using the current process (outlined in the Canadian Centre for Cyber Security’s IT Security Risk Management Framework, otherwise known as ITSG-33). For example, we heard that the current process could unintentionally increase risk because of how siloed delivery and security teams are, making security more of a compliance audit rather than an ongoing risk-based cooperative effort. 

We also heard how **other organizations implemented a continuous security approach** to address some of the problems we had validated. This included embedding security expertise into all teams and all roles.

## Validating assumptions

Throughout this process, many of our assumptions were validated. But we also learned some nuance about the challenges we might not have known if we hadn’t done the additional research. 

For example, we had assumed teams were implementing all of the security controls from the ITSG-33 controls catalog, and more specifically the Protected B, Medium Integrity, Medium Availability (PBMM) [profile](https://cyber.gc.ca/sites/default/files/publications/itsg33-ann4a-1-eng.pdf) from CCCS, because it was required. 

Through research we learned that teams were using the profile as is, and not tailoring the controls to meet specific business needs. To help with this, the Cyber Security team put together and released their [Security Playbook for Information Systems Solutions](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/cloud-services/security-playbook-information-system-solutions-cloud.html#toc1) to further clarify the baseline controls required of a system ensuring alignment with the [Policy on Government Security](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=16578). 

That’s one example of many we couldn’t possibly fit in one blog post. But if you have questions about the continuous security approach and other work the Office of the CIO is doing to help improve the SA&A process, please [reach out to them](mailto:zztbscybers@tbs-sct.gc.ca)!
## New contexts, new assumptions to validate

The exercise of validating assumptions was a helpful reminder that our experiences and assumptions only show one small part of the picture. To be effective at solving problems, and – as was the case for us – making processes more user friendly, we had to understand all the pieces of the puzzle to make sure we were solving problems based on people’s reality – and not just our assumptions of it.

It’s also important to understand that contexts change all the time *(enter the COVID-19 pandemic)*, so problems should be revisited, and assumptions should be re-validated. Applying a risk-based continuous security approach will help with this, especially in the context of our more virtual world!
