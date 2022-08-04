---
layout: blog
title: 'Search Bar Blog'
description: >-
  Search bar blog description
author: 'Omar Tehsin'
date: '2022-08-04T11:03:04'
image: https://articles.alpha.canada.ca/uploads/sites/25/2022/08/Canadian_Flag-1.png
image-alt: Flag of Canada
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2022/08/Canadian_Flag-1-150x150.png
translationKey: search-bar-blog
---
You log on to a new website. You have specific information you need to find quickly. You look for the magnifying glass icon. Where is the **search bar**? It’s not there… What do you do?

A great website is easy to navigate, offers clear content, and lets you access the information you are looking for in a few clicks. But what are you supposed to do if you’re not able to find that content easily? We can’t just expect you to click on every page, link or button on a website to find what you are looking for — it’s contrary to one of our key values: accessibility.

When I joined the CDS web team as a developer, a common issue was the need to find specific content that was relevant to both the team and website users. Initially, the plan was just to have the search bar for our [Blog section](https://digital.canada.ca/blog/). Then, we realized that making it site wide would allow users to search everything from job postings to reports, using their preferred keywords.

So we began coding the first iteration of the CDS website search bar!

## **Searching for solutions**

Since our website is built using a static site framework called [Hugo](https://gohugo.io/commands/hugo_server/), server-side solutions were not applicable (because the content lies within the website itself).

In addition, we also wanted to adopt a search library that’s light and easy to implement. After some research and discussions with other developers, the choices were between [Fuse.js](https://fusejs.io/) and [Lunr.js](https://lunrjs.com/). We ultimately picked the latter because of a useful feature called “stemming”, which I will expand on later.

## **How we implemented our search function and how you can, too**

Here are the steps you can take to set up your search function:
