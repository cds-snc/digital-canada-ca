---
layout: blog
title: 'Growing a service without compromising security: GC Notify'
description: >-
  Did you know that that GC Notify, our longest running platform product, is now being used by over 350 government services? Yael Berger (Product Manager) shares more on the growth of the product.
author: 'Yael Berger'
date: '2023-06-08T09:53:36'
image: https://articles.alpha.canada.ca/uploads/sites/25/2023/06/InterviewYael_1200X628_FIP_Blog_Post_EN.png
image-alt: A portrait image of Yael Berger, GC Notify product manager
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2023/06/InterviewYael_1200X628_FIP_Blog_Post_EN.png
translationKey: blog-growing-service
---

<p><em>This article was previously published on <a href="https://www.linkedin.com/company/cds-snc/">CDS&#8217;s LinkedIn</a> page in May 2023. Check out the <a href="https://www.linkedin.com/pulse/growing-service-without-compromising-security-gc-notify-cds-snc%3FtrackingId=kpzRR5%252FF8vczsUsctiiRgQ%253D%253D/?trackingId=kpzRR5%2FF8vczsUsctiiRgQ%3D%3D">original post.</a></em></p>



<p>At CDS, we work with teams across government to improve services for people in Canada. One way we’re doing that is through&nbsp;<a href="https://digital.canada.ca/product-suite/">platform tools</a>– small interconnected services that teams can plug into their current systems to improve processing times, cut down on procurement costs, and deliver great user experiences.<strong>&nbsp;</strong></p>



<p><a href="https://notification.canada.ca/?utm_source=EN_May2023_NotifyLinkedIn&amp;utm_medium=LinkedIn+&amp;utm_campaign=EN_May2023_NotifyLinkedIn&amp;utm_id=CDS_Interviews">GC Notify</a>&nbsp;<strong>is our longest running platform product</strong>. It’s a free-to-use, cloud-based government tool that provides a simple and efficient way for departments to integrate email and text notifications into their services. Since&nbsp;<a href="https://digital.canada.ca/2019/11/26/introducing-notify/">launching in 2019</a>&nbsp;with a handful of government services, GC Notify has seen immense growth. Fast forward 4 years, and the tool is now used by 351 government services with over&nbsp;<a href="https://notification.canada.ca/activity">87 million messages sent</a>&nbsp;and the GC Notify team isn’t slowing down anytime soon!</p>



<p>To learn more about how GC Notify has grown as a service without sacrificing accessibility, security, and ease of use, we sat down with&nbsp;<a href="https://www.linkedin.com/in/yael-berger-5791a455?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAuYpC0B7UuaLNuQ_wDIgFLmzcpvwsJokwk">Yael Berger</a>, Product Manager, to talk about the work her team does.&nbsp;</p>



<hr class="wp-block-separator has-alpha-channel-opacity" />



<p><strong>Q&amp;A:</strong></p>



<p><strong>1. Can you tell us a bit about your role as a Product Manager on GC Notify? What does a typical day look like for you?</strong></p>



<p>Yael: &#8220;Every day as the product manager for GC Notify looks a bit different, but that’s what’s so interesting about this job. My main role is to provide focus and prioritization for the multi-disciplinary team of designers, developers, researcher, and policy advisor I work with. I do that by helping guide what the team should be building, and when we should be building it, to bring as much value to our clients as quickly as possible.<strong>&nbsp;I think good product managers act as funnels and filters to help the team understand what the biggest problems and opportunities are for our clients, and organize our work around how to solve them.</strong>&nbsp;</p>



<p>So a typical day may include reviewing the previous day’s data and metrics, a support call with a client of GC Notify who has a unique use case, facilitating a review meeting to share our work in progress with stakeholders, writing user stories for future features we want to build, and organizing the product team’s backlog of work so that we know the status of what we’re working on and what to tackle next to reach our objectives.&#8221;&nbsp;</p>



<p><strong>2. GC Notify has grown a lot in the past 3 and half years, both in the number of services supported and the volume of notifications sent out on a monthly basis. How has your team balanced growing the service to support more people in Canada, without compromising security, reliability, and accessibility?</strong></p>



<p>Yael: &#8220;In many cases, GC Notify has seen 100% growth year over year, so growing and maturing GC Notify while maintaining a very high standard of service has been the team’s main focus for the past 18 months.&nbsp;</p>



<p><strong>We put a lot of focus on product reliability and scaling up our front-door API&nbsp;</strong>by switching to Amazon Web Services Lambda for example, which matches the bursts of throughput demand we receive on a daily basis. As a result of this work, we’ve been able to share&nbsp;<a href="https://notification.canada.ca/service-level-objectives">Service Level Objectives</a>&nbsp;publicly to set expectations with our clients for the speed and reliability they can expect from GC Notify.&nbsp;</p>



<p>On the security front, we went through the full Authority to Operate (ATO) process and a thorough security assessment to achieve a Protected B Medium Integrity, Medium Availability level for our GC Notify system, even though we only allow up to Protected A data. We further secured our product by introducing rate limiting, file scanning and firewall rules that we rolled out and tested extensively to ensure they would only block malicious activity, and not any legitimate traffic. We also partnered with the Canadian Centre for Cyber Security to audit our logs.&nbsp;<strong>We practice continuous security with every feature and change we make to the product.</strong>&nbsp;</p>



<p><strong>Similarly, we bring accessibility into our work on a daily basis.</strong>&nbsp;We did a full external accessibility audit of GC Notify in 2022, and have been resolving issues towards achieving the WCAG 2.1 AA standard. We also test new features and changes to the user interface with automated accessibility tests and manual tests, and we run usability tests with people who use assistive devices to ensure that we’re not introducing any barriers that could make it harder for someone to use GC Notify. All of the designers working on GC Notify have gone through accessibility training to acquire new skills to better serve our clients.&#8221; &nbsp;</p>



<p><strong>3. What are your hopes for the future of the service?</strong></p>



<p>Yael: &#8220;I hope GC Notify can continue to grow and scale to meet the needs of public servants who are looking to provide timely and trustworthy updates to the public they serve. I think we’ll continue to hear stories of how we’ve been able to help enable teams across the Government of Canada to send notifications in a simple and easy way.&nbsp;</p>



<p>We have some more capacity to tackle new features and more scaling now that we’ve set some really great foundations.&nbsp;<strong>We plan to continue to improve and enhance the self-serve nature of GC Notify, so we can be ready and available for high impact use cases, and grow our client base in a sustainable way.</strong>&nbsp;I’m excited about what’s to come as the team continues to prioritize listening to our clients’ needs and adding value to what’s already a great product.&#8221;</p>



<p><strong>4. When you’re not managing GC Notify, what do you do for fun?</strong></p>



<p>Yael: &#8220;I recently started playing Dungeons and Dragons on the weekends (thank you Stranger Things!) even though I never played it growing up. It’s never too late to foster your imagination and get creative.&#8221;&nbsp;</p>



<hr class="wp-block-separator has-alpha-channel-opacity" />



<p><strong>Thanks so much Yael! If you&#8217;re a federal public servant interested in using GC Notify,</strong>&nbsp;<a href="https://notification.canada.ca/?utm_source=EN_May2023_NotifyLinkedIn&amp;utm_medium=LinkedIn+&amp;utm_campaign=EN_May2023_NotifyLinkedIn&amp;utm_id=CDS_Interviews">give it a try today!</a></p>

