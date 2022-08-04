---
layout: job-posting
type: section
title: 'Search Bar Blog'
description: >-
  <p>Test Description</p>

archived: false
translationKey: search-bar-blog
leverId: 
---


<p>You log on to a new website. You have specific information you need to find quickly. You look for the magnifying glass icon. Where is the&nbsp;<strong>search bar</strong>? It’s not there… What do you do?</p>



<p>A great website is easy to navigate, offers clear content, and lets you access the information you are looking for in a few clicks. But what are you supposed to do if you’re not able to find that content easily? We can’t just expect you to click on every page, link or button on a website to find what you are looking for — it’s contrary to one of our key values: accessibility.</p>



<p>When I joined the CDS web team as a developer, a common issue was the need to find specific content that was relevant to both the team and website users. Initially, the plan was just to have the search bar for our&nbsp;<a href="https://digital.canada.ca/blog/" target="_blank" rel="noreferrer noopener">Blog section</a>. Then, we realized that making it site wide would allow users to search everything from job postings to reports, using their preferred keywords.</p>



<p>So we began coding the first iteration of the CDS website search bar!</p>



<h2 id="searching-for-solutions"><strong>Searching for solutions</strong></h2>



<p>Since our website is built using a static site framework called&nbsp;<a href="https://gohugo.io/commands/hugo_server/" target="_blank" rel="noreferrer noopener">Hugo</a>, server-side solutions were not applicable (because the content lies within the website itself).</p>



<p>In addition, we also wanted to adopt a search library that’s light and easy to implement. After some research and discussions with other developers, the choices were between&nbsp;<a href="https://fusejs.io/" target="_blank" rel="noreferrer noopener">Fuse.js</a>&nbsp;and&nbsp;<a href="https://lunrjs.com/" target="_blank" rel="noreferrer noopener">Lunr.js</a>. We ultimately picked the latter because of a useful feature called “stemming”, which I will expand on later.</p>



<h2 id="how-we-implemented-our-search-function-and-how-you-can-too"><strong>How we implemented our search function and how you can, too</strong></h2>



<p>Here are the steps you can take to set up your search function:</p>

