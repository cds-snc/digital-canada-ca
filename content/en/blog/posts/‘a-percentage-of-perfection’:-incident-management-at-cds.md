---
layout: blog
title: '‘A percentage of perfection’: Incident management at CDS'
description: >-
  Calvin Rodo, our Cloud and Site Reliability Engineering Team Lead, gives an overview of the incident management process at CDS, focusing on the lessons we learned.
author: 'Calvin Rodo, Cloud and Site Reliability Engineering (SRE) Team Lead'
date: '2022-10-13T08:34:36'
image: https://articles.alpha.canada.ca/uploads/sites/25/2022/10/banner-a-percentage-of-perfection-incident-management-at-cds.jpeg
image-alt: A laptop with an alarming red screen, surrounded by hazard signs, sand timer, settings icon, and life buoy.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2022/10/banner-a-percentage-of-perfection-incident-management-at-cds-1024x507.jpeg
translationKey: a-percentage-of-perfection-incident-management-at-cds
---

<blockquote class="wp-block-quote"><p><em><strong>&#8220;Accepting that imperfect things still work is fundamental to preventing failures from becoming catastrophes.’’</strong></em></p></blockquote>



<p>This quote from writer <a href="https://twitter.com/wiredferret">Heidi Waterhouse</a> is one of my favorite quotes. After spending over 15 years working as a software developer on various government services, I’ve come to realize, <a href="https://increment.com/reliability/failure-is-okay/">as Heidi Waterhouse states</a>, that everything is a little bit broken.</p>



<p>Building software is hard, running systems designed by others can be challenging, and on top of that: we all make mistakes. So it makes sense to get good at responding when things break, because they will.</p>



<p>In this blog, I’ll talk about a serious incident that mobilized our whole team, the innovative approach we took to address it (and make sure it doesn’t happen again), and &#8211;&nbsp; most importantly &#8211; what we learned.&nbsp;</p>



<h2 id="h-the-incident">The incident</h2>



<p>On March 29th, at around 10:00 a.m. EST, one of our Site Reliability Engineers (SREs) noticed a piece of software that we use to update one of <a href="https://notification.canada.ca/">GC Notify</a>’s servers was printing out sensitive information in its execution log.</p>



<p>The information leaked consisted of keys and authorization tokens. <strong>And, at this point, it is important to mention that no personal information was disclosed nor retained</strong>. Now, because GC Notify is open source and we work in the open, this was visible to everyone.</p>



<p>Luckily, this information did not fall into the wrong hands because we were able to correct the problem very quickly, within an hour at most.</p>



<p>Fortunately, we have a well-defined <a href="https://github.com/cds-snc/site-reliability-engineering-public/blob/main/docs/incident_management_process_at_cds.md">incident management process</a> for when things go wrong, and an easy way of kicking off that process.</p>



<p>My team at CDS created a Slack bot we call SRE-Bot that can be used to trigger an incident response and takes care of creating a chat room, a video chat, an Incident Report, and it also notifies folks that an incident is currently happening (a pretty cool thing!).</p>



<figure class="wp-block-image size-large is-resized"><img loading="lazy" src="https://articles.alpha.canada.ca/uploads/sites/25/2022/10/sre-start-incident-en-966x1024.jpeg" alt="Screenshot of CDS's Slack bot response for security incidents. It advises CDSers that the app will helpfully create a channel, incident report, and a Google Meet for the incident." class="wp-image-402" width="515" height="546" srcset="https://articles.alpha.canada.ca/uploads/sites/25/2022/10/sre-start-incident-en-966x1024.jpeg 966w, https://articles.alpha.canada.ca/uploads/sites/25/2022/10/sre-start-incident-en-283x300.jpeg 283w, https://articles.alpha.canada.ca/uploads/sites/25/2022/10/sre-start-incident-en-768x814.jpeg 768w, https://articles.alpha.canada.ca/uploads/sites/25/2022/10/sre-start-incident-en-1449x1536.jpeg 1449w, https://articles.alpha.canada.ca/uploads/sites/25/2022/10/sre-start-incident-en.jpeg 1509w" sizes="(max-width: 515px) 100vw, 515px" /></figure>



<p></p>



<h2>How we fixed it</h2>



<p>We are really dedicated to fixing these issues quickly because we know what could happen if we don&#8217;t. Part of our job is protecting sensitive information.</p>



<p>In this section, I’ll break down the different steps of our incident response process.</p>



<p><strong>1 &#8211; Gathering the right people to deal with the issue (our CDS task force)</strong></p>



<p>As soon as the incident was called, we put a call out to the GC Notify Product team, the Infrastructure, Security, and Technical Support team, and the Internal Site Reliability Engineering team. Initially, we didn’t reach out to the Comms team as there was no impact on external users of our system and no immediate need to brief anyone outside of CDS.</p>



<p>The SRE-Bot also instantly broadcasted in Slack that an incident had occurred and linked to our chat room so that anyone at CDS who was interested could join and follow along.</p>



<p>Eventually, we brought in our communications team to notify users of some short downtime to our system.</p>



<p><strong>2 &#8211; Identifying the cause of this incident and its impact on users</strong></p>



<p>We realized pretty quickly that the incident was caused by a misconfiguration of a process that resulted in keys and authorization tokens being printed to that process&#8217;s logs. This leak was caught by a CDS employee who was reviewing them.</p>



<p>We determined the impact and size of the incident by reviewing current and historical logs to identify what exactly went wrong and how long it had been happening. </p>



<p>That’s when we noticed that the code we used to update our system had been copied several times throughout the organization, so we expanded our incident to include communications teams as well.</p>



<p><strong>3 &#8211; Communicating to all affected teams</strong></p>



<p>During an incident, everyone is responsible for communicating the work they are doing in the incident’s Slack channel (chat rooms).</p>



<p>This is useful for several reasons: it makes visible the work that’s being done, it makes it easier for the Incident Commander (IC) to coordinate the response, and it ensures fast and complete resolution.</p>



<p><strong>4 &#8211; Fixing the issue and making sure it doesn’t happen again</strong></p>



<p>We then started triaging the leaked information: we began rotating API keys that were leaked and removing any logs that had sensitive information in them. At this point, the immediate problem was resolved.</p>



<p>It took around an hour to fix it.</p>



<p>Unfortunately, in our haste, we accidentally changed the salt (<a href="https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#salting">random data added to a secret to make it longer and harder to decrypt</a>) we use to cryptographically hash our passwords, resulting in clients being locked out of their accounts for just over 30 minutes.</p>



<p><strong>5 &#8211; Documenting what happened</strong></p>



<p>Not only is documenting what happened crucial to communicating internally about the incident, it&#8217;s also important for learning from the incident.</p>



<p>We use an <a href="https://github.com/cds-snc/site-reliability-engineering-public/blob/main/docs/product_incident_report_template.md">Incident Report template</a>.</p>



<p>Our Incident Report is key to tracking what triggered the incident, discovering what went wrong and it’s pretty easy for the Incident Commander to copy and paste the Slack Channel chat in the report giving a pretty detailed timeline of how we responded.</p>



<p>It makes facilitation of blameless postmortems as easy as possible.</p>



<h2>Blameless postmortem</h2>



<p>After we dealt with our immediate fires, we scheduled a review of the incident in the form of a blameless postmortem.</p>



<p>We call it a ‘’blameless postmortem’’ as it’s important to us to acknowledge that when things go wrong, it’s a result of systemic or organizational issues, and not the result of an employee&#8217;s wrong-doing. When blame gets assigned to people, those people are less likely to speak up when things go wrong.</p>



<p>This is a chance for us to review what happened during an incident, ensure our incident report is completely filled out, and generate action items that we can use to make sure this problem is less likely to happen in the future.</p>



<p>For this specific incident, our action items included tasks such as rotating keys, deleting continuous integration logs after 48 hours, scanning execution logs for leaked secrets, and updating our incident management process.</p>



<h2>Main takeaways</h2>



<p>We always learn a lot from our incidents. A few weeks after this, we had a similar incident on a different team at CDS. Due to what we learned during this incident, we resolved it in a fraction of the time.</p>



<p>But if I had to document some key takeaways for folks reading this post, they would be:</p>



<p><strong>1. Build for recovery.</strong> Things will fail, so focus on being able to quickly and safely release changes to production.<br><strong>2. Have a well-defined incident management process.</strong> Having a plan in place before things go wrong helps to reduce stress when they eventually do.<br><strong>3. Incidents are not an employee&#8217;s fault, they are a fault of the organization.</strong> A culture of blamelessness helps to improve psychological safety.<br><strong>4. Every incident is a learning opportunity.</strong> Think of incidents as a feedback loop that can be used to improve systems and processes; including the incident management process itself.</p>



<h2>Conclusion</h2>



<p>While no one likes to be part of an incident, they will happen, and dealing with them is a part of running any service.</p>



<p>It is impossible to be perfect &#8211; but you can reach a certain level of perfection with the right response to incidents.</p>



<p>We build our services so that we can quickly and easily respond when things go wrong through things like automated testing of our software, using infrastructure as code to create repeatable environments, and automated deployments that allow us to quickly make changes to our systems.</p>



<p>We treat incidents as a key learning opportunity for improving the reliability of our services, and our incident management process is an important feedback loop that we can use to capture information about what went wrong, how we fixed it, and how to learn from it.</p>



<p>Creating a culture of blamelessness around incidents provides the psychological safety necessary for us to respond quickly and without fear when things go wrong.</p>



<p>If you are looking to improve how you respond to incidents when running your services, I recommend you <a href="https://digital.canada.ca/coaching-and-advice/">reach out to us</a>. The only thing I love more than our incident management process is talking about it!</p>

