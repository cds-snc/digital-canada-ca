---
layout: blog
title: 'Building trust and understanding: Privacy notices and usability testing '
description: >-
  Clear and concise privacy notices can help build trust and improve public services. Learn more about a tool to help teams write clear, easy to understand privacy notices for usability testing.
author: ' Kaira Bakkestad-Legare (Policy Advisor), Cheyenne Arrowsmith (SRE Lead), Omar Tehsin (Software Developer) '
date: '2023-10-03T10:53:35'
image: https://articles.alpha.canada.ca/uploads/sites/25/2023/07/PrivacyPolicyGeneratorTool_-BlogEN.png
image-alt: An image of several people making use of the Privacy Generator tool in varying instances.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2023/07/PrivacyPolicyGeneratorTool_-BlogEN.png
translationKey: blog-new-privacy-policy
---

<p>Improving government services in the digital age means providing public services that are simple to use and trustworthy. The <a href="https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html" target="_blank" rel="noreferrer noopener">Government of Canada Digital Standards</a> highlight that services should be built to address the needs of users, not the internal constraints or complexities of government. Designing and developing with user feedback results in services that are more accessible, secure, and easy to use.&nbsp;</p>



<p>Usability testing is critical to better digital services, but sometimes it’s tricky to figure out where to start.</p>



<p><strong>Start with trust: Creating privacy and consent notices for usability testing&nbsp;</strong></p>



<p>An important part of any plan to conduct research with the people who will be using your service is a privacy and consent notice. Easy to read privacy notices help people understand how their information is used, what their legal rights are, and who to contact with concerns.</p>



<p>Building trust with research participants builds public trust in the services you’re working on. Our colleagues, Hillary Lorimer and Janice LaGiorgia, wrote about the importance of privacy notices in usability testing, noting: </p>



<blockquote class="wp-block-quote">
<p>“As government employees, we need to take extra care to empower participants by providing them with information about who we are, why we’re doing research, how their data will be used, and their right to withdraw at any time during the process. This is one way we manage real and perceived power imbalances between ourselves as public servants and participants, so that their decision to take part in usability testing is not unduly influenced.”</p>
</blockquote>



<p>While working with Veterans Affairs Canada (VAC) on the <a href="https://benefits-avantages.veterans.gc.ca/?lng=en" target="_blank" rel="noreferrer noopener">Find benefits and services tool</a>, the team tested 9 product iterations with more than 100 participants across several locations in just 9 months. The team wrote a lot of new privacy notices in a short time. This process, and all the back and forth with our Access to Information and Privacy (ATIP) colleagues, clearly demonstrated the need for a simpler way to create these notices. An early solution to this problem was to include a policy analyst with every product team, to help with drafting privacy notices and ensuring compliance. Even with the <a href="https://digital.canada.ca/2020/10/22/multiplayer-mode-unlocked-better-team-collaboration-for-designers-developers-and-researchers/" target="_blank" rel="noreferrer noopener">power of multidisciplinary teams</a>, there was still a lot of back and forth with ATIP, and repetitive approvals on very similar notices.&nbsp;</p>



<p>After working with the Treasury Board of Canada Secretariat (TBS)’s ATIP team, our policy analysts identified some basic patterns and components for privacy and consent notices. In 2021, we used these patterns to build and launch an <a href="https://digital.canada.ca/2021/06/30/a-faster-way-to-create-privacy-and-consent-notices-in-government/" target="_blank" rel="noreferrer noopener">internal tool to help create templates for notices for usability testing</a>. This tool could be used to quickly generate notices that were consistent, met privacy standards, and needed fewer exchanges before being approved.</p>



<p><strong>A solution for teams across government </strong></p>



<p>Two years after launching the tool,<a href="https://simplify-privacy-statements.alpha.canada.ca/" target="_blank" rel="noreferrer noopener"> we’ve made some updates</a> to make it easier for teams across government to use, and to improve security and functionality. Previously, the language in the form was focused on teams at TBS. The updated tool has been expanded, in collaboration with policy advisors and content designers, to be more helpful for other federal departments and agencies. The tool can help teams get started on creating privacy and consent notices for usability testing. <strong>As always, all privacy notices need to be reviewed by your department’s ATIP team prior to use.</strong><br><br>We’ve written before about how <a href="https://digital.canada.ca/2023/01/26/writing-privacy-notices-that-are-easy-to-read-and-understand/" target="_blank" rel="noreferrer noopener">reducing the length and complexity of privacy notices can increase trust in a service</a>, and we applied these same principles in our review of this tool. We made the language easier to read and understand, helping both the teams creating notices, <strong>and</strong> importantly the people who will read and respond to them.</p>



<p>Some ways we made the content easier to read and understand:</p>



<ol>
<li><strong>Removing passive voice and simplifying sentence structure</strong><br><strong>Before</strong>: “If a correction has been made to your personal information, we will ensure that any institution we’ve shared it with corrects their records as well.”<br><br><strong>After</strong>: “If you make corrections, then we’ll correct this information in the research records for X and Y.”<br><br></li>



<li> <strong>Making the content flow more intuitive for readers</strong><br>In previous versions of the template, everything a participant was consenting to was included in different sections throughout the notice. We made a change to summarize everything at the end of the notice, to improve clarity and ensure participants understood exactly what they are signing.&nbsp;<br><strong>Eg:&nbsp;</strong> <br><strong>By signing, you confirm that:</strong></li>
</ol>



<ul>
<li>You’ve read and understood this page and agree to participate.</li>



<li>You’re not a former federal public servant who received a pension or lump sum payment from the Government of Canada.</li>



<li>You’re not a federal public servant participating during working hours.</li>
</ul>



<p><strong>Increasing security and reliability&nbsp;</strong></p>



<p>The online tool was originally created to answer a need identified by CDS product teams, but it was launched quickly without a lot of forward planning for maintenance and ownership. The tool, initially hosted on the Heroku cloud platform, was moved to Amazon Web Services (AWS). This move ensures greater reliability and consistency with other CDS products. From a maintenance perspective, this makes it easier for our teams to monitor and mitigate any issues as they arise, rather than having to conduct checks across multiple platforms. The tool was built in small components, which made this ‘lift and shift’ exercise much faster and simpler.&nbsp;</p>



<p>These updates by our Site Reliability and Engineering (SRE) team, have made the tool more secure and easier to maintain. Site reliability engineering, an approach to tackling operations and infrastructure problems using software engineering methodology, allows the team to iterate and improve frequently. The SRE team continues to monitor the tools’ use and reliability, and will make adjustments and updates when needed.</p>



<p><strong>Working together to deliver better services</strong></p>



<p>Now that the <a href="https://simplify-privacy-statements.alpha.canada.ca/" target="_blank" rel="noreferrer noopener">privacy notice generator</a> has been updated, we encourage teams across the GC to try it out! If your team has used it to help prepare for usability testing, <a href="mailto:CDS-SNC@tbs-sct.gc.ca">reach out and share your story and any feedback on the tool</a>. Together, we can improve how we design and deliver services across government.</p>

