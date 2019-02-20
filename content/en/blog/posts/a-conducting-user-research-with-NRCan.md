---
title: 'Conducting user research with NRCan to inform an API build: Part 1'
description: >-
  When Natural Resources Canada (NRCan) came to us with the idea of opening up
  access to EnerGuide data, the solution seemed pretty obvious — build an
  ‘Application Programming Interface’ (API) that would allow users to query the
  EnerGuide data; but first, we had to validate whether this proposed solution
  was the way to go.
author: Eman El-Fayomi and Jennifer Fletcher
date: '2018-02-15 09:00:00 -0400'
image: /img/cds/blog-conducting-user-research-with-NRCAN.jpg
image-alt: Eman and Jennifer looking at the Value Proposition Canvas
translationKey: conducting-user-research-with-NRCan
thumb: /img/cds/thumbnails/blog-conducting-user-research-with-NRCAN.jpg
processed: 1550672961653
---

When Natural Resources Canada (NRCan) came to us with the idea of opening up access to [EnerGuide](https://www.nrcan.gc.ca/energy/efficiency/housing/home-improvements/5005) data, the solution seemed pretty obvious — build an ‘Application Programming Interface’ (API) that would allow users to query the EnerGuide data; but first, we had to validate whether this proposed solution was the way to go.  

## Defining users and their needs

To start, we met with NRCan to understand who their users were; federal, provincial, territorial and municipal employees managing residential programs and policy, academics, and researchers and homeowners.

With our user groups established, we then needed to understand their needs to validate our proposed API solution, what the API would need to do, and the type of data the API would need to retrieve. Regardless of who we’re working with, we need to be flexible on the approach we take with user research.

With this in mind, NRCan provided us with a list of representatives from all levels of government (federal, provincial, territorial and municipal) who use the data to develop and manage energy efficiency programs and policies. This list of government employees included those who had communicated to NRCan as having a keen interest in helping inform the digital solution CDS was going to build.

We conducted 30 minute one-on-one in-depth interviews (IDIs) with the most engaged users and an online discussion with the others. Both the IDIs and group discussions were facilitated via interactive online bulletin boards. The discussion flow and online board design were inspired by the Value Proposition Canvas.

## Redesigning tools to meet our research needs

The Value Proposition Canvas is an interactive visual tool, with clearly defined sections that enable researchers to interact with participants to easily conceptualize and share insights about what they prioritize the most. The original canvas zooms in on two blocks: value proposition and user segment, in order to describe them in more detail. Its use helps to project, test and build the service's value proposition for the core users in a more structured and reflective way to solve problems, difficulties and prioritize needs.

<a class="large-link" href="https://www.dropbox.com/sh/aaho502dkfc713i/AACUZzgHUlpp88kj25ABMH8Ca?dl=0">Downloadable and printable format available on Dropbox.</a>

<img alt="The Value Proposition Canvas was used during the interviews." src="/img/cds/blog-valprop.svg">

We redesigned the original tool to contain more sections allowing for detailed questions around users and their current/future EnerGuide data requirements. After each interview, and upon completion of the online bulletin board, we paused to reflect so that we could iterate on our approach accordingly. In an effort to engage more users, we kept our interactive bulletin boards open to participants for a week after their session had concluded so they could continue to share insights.

We also had our primary developer involved in the entire research process, including attending some of our interactive sessions to ensure we were on the right track, and that the information we were collecting continued to be relevant and helpful for the API build.

## What we learned

The user research revealed that users want to query the data by geographic region according to any or all of the elements of a dwelling as captured by [HOT2000](https://www.nrcan.gc.ca/energy/efficiency/housing/home-improvements/17725) (the program used to generate the EnerGuide rating and report).

Users want flexibility and control over the data to confirm/refute hypotheses, benchmark, track, and identify home energy efficiency trends over time. Having access to the full set of EnerGuide data combined with a flexible query service would meet this need. We had our answer: building an API to open up the EnerGuide data was the first step in the right direction.

## Building the API

The approach we are currently taking to building the API solution is more sophisticated than simply querying the EnerGuide database directly and communicating the results back to the API user. We want to ensure a more self-reliant API solution that would allow for flexibility in the event the EnerGuide database needed to be taken offline for maintenance, or for future migration to another database.

What we proposed was a secure cloud-based solution that would extract data from the EnerGuide database, transform the data into a format that worked for the API, and load that data into another database from which the API would pull.

Our development team is now hard at work building the proposed API solution. Part of this work meant co-locating with the NRCan team. Read [Part 2: Co-locating with NRCan for a week](/2018/02/15/b-colocating-with-nrcan/) to learn more about the co-location experience. Keep an eye out for Part 3 which will delve into the technical build.

