---
layout: blog
title: 'How we’re building GC Forms: Our 4 accessible approaches'
description: >-
  Interview with GC Forms on their 4 approaches for accessible product development: automated and manual tests, design research, and audits.
author: 'Interview with our GC Forms product team'
date: '2023-02-15T15:43:34'
image: https://articles.alpha.canada.ca/uploads/sites/25/2023/02/GC_Forms_BLOG-POST_E1_N.jpeg
image-alt: Public servants can use the GC Forms tool to build accessible online forms for Government of Canada services, no coding required.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2023/02/GC_Forms_BLOG-POST_E1_N.jpeg
translationKey: blog-gcforms-accessible-approaches
---

<p>When building products for government, accessibility isn’t just about compliance, it&#8217;s good strategy too. Making space for this work is crucial — it supports the government in delivering improved services and removes barriers to access them.</p>



<p>GC Forms is one of the <a href="https://digital.canada.ca/product-suite/">tools we offer federal public servants</a> to support their digital service delivery. It’s easy to use and helps quickly create and manage online forms that are secure, bilingual, accessible, and Government of Canada branded.</p>



<p>To share how the team prioritizes accessibility in every feature and phase of this growing product, we interviewed team members Bryan Robitaille (Principal Developer), Stevie-Ray Talbot (Senior Product Manager), and Sarah Hobson (Senior Policy Advisor).</p>



<p>They shared thoughts and tips on the team’s 4 approaches to building in accessibility from the start:</p>



<ol>
<li>Setting-up automated tests to catch the majority of issues;</li>



<li>Performing manual tests to catch issues missed in the automated tests;</li>



<li>Conducting design research to see if the automated and manual tests created accessible user experiences; and</li>



<li>Running audits to find ways to check work, improving the current product and its development processes.</li>
</ol>



<h2 id="h-q1-how-do-automated-accessibility-tests-help-with-development"><strong>Q1: How do automated accessibility tests help with development?</strong></h2>



<p>A: Bryan Robitaille (Principal Developer)</p>



<h3><strong>Automated testing isn’t perfect but it’s a start</strong></h3>



<p>Let&#8217;s be honest, automated accessibility tests aren’t perfect. They don’t catch poor design choices or all of the <a href="https://www.w3.org/WAI/standards-guidelines/">Web Content Accessibility Guidelines (WCAG)</a> use cases and success criteria. But they do offer a quick and simple way to catch <a href="https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues/">over 50% of accessibility issues</a> on web applications.</p>



<p>When you combine automated testing with other accessibility testing, it can reduce the team’s time spent on manual testing and fixes. This is very helpful for increasing our team’s capacity to improve and grow the product.</p>



<p><strong>Want to learn how our team sets up and runs automated accessibility testing on GC Forms? Check out the tech tips section below.</strong></p>



<details class="wp-block-cds-snc-accordion"><summary>Tech tips: How we setup our automated testing.</summary>
<p><strong>1. Set up automated tests to catch accessibility issues; it reduces manual work and increases the team’s capacity for professional and product growth.</strong></p>



<p>For our automated testing, we rely heavily on the open-source <a href="https://www.deque.com/axe/">Axe accessibility testing engine</a>. Axe integrates seamlessly with <a href="https://github.com/cds-snc/platform-forms-client/tree/develop/cypress">our Cypress testing suite</a>, allowing us to test web pages exactly as people would interact with them. If we didn’t have an automation set up to catch these issues, it would add a lot of manual work for our developers and reduce their capacity to grow the product.</p>



<p><strong>2. Use an accessibility linter to identify issues as you’re writing code (it’s like spell check). This saves time rewriting.</strong></p>



<p>We don’t solely rely on Axe’s engine for our automated testing. We also leverage tools that try to identify issues as we write our application code, saving us time rewriting after testing (because we caught the issues in advance).</p>



<p>For example, we use the <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y">jsx-a11y ESLint plugin</a> to help identify issues as we build our web application. Some of our developers also go a step further and use the <a href="https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter">Axe Accessibility Linter</a> (it’s like spell check but for accessibility issues) as an extension in VS Code, which can provide accessibility linting for HTML, Angular, React, Markdown, and Vue.</p>



<p><strong>3. Setup your accessibility test file and add a few lines of code (step-by-step instructions for both are below).</strong></p>



<p>To set up the file used for running automated tests, you need to add software packages to your existing development dependencies (the other software packages used in development work, not just testing ones). Add them using a package manager – it keeps track of all the software on your computer, so you can use the new testing packages in your automation.</p>



<p>Here’s how (step-by-step):</p>



<ol>
<li>Using the <a href="https://yarnpkg.com/">yarn</a> or <a href="https://www.npmjs.com/">npm</a> package managers, search and add these software packages to your development dependencies: cypress, axe-core, and cypress-axe.</li>
</ol>



<p>2. Add one simple configuration line in Cypress itself: import “cypress-axe”;</p>


<img decoding="async" loading="lazy" width="260" height="59" src="https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Tip-image-1.png" alt="" class="wp-image-859" style="max-width: 100%;height: auto;">


<p style="font-size:11px">Alt Text: Screenshot of the line configuration in Cypress. Add “import “cypress-axe”;” under “// Import Axe-Core library</p>



<p> 3. Configure your Axe options in your test file (read <a href="https://www.deque.com/axe/core-documentation/api-documentation/#options-parameter">Axe’s API documentation</a> for guidance).</p>


<img decoding="async" loading="lazy" width="512" height="120" src="https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Tip-image-2.png" alt="" class="wp-image-861" style="max-width: 100%;height: auto;" srcset="https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Tip-image-2.png 512w, https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Tip-image-2-300x70.png 300w" sizes="(max-width: 512px) 100vw, 512px" />


<p style="font-size:11px">Alt Text: Screenshot of how GC Forms configured their Axe options, testing for: “wcag21aa”, “wcag2aa”, “best-practice”, and “section508”</p>



<p>Also, as you can see in our <a href="https://github.com/cds-snc/platform-forms-client/blob/develop/cypress/e2e/accessibility.cy.js">Cypress testing file on GitHub</a>, setting up Axe with Cypress for automated accessibility testing is accomplished by adding as little as 3 lines of code:</p>



<ol>
<li>cy.visit(path);</li>



<li>cy.injectAxe();</li>



<li>cy.checkA11y(null, A11Y_OPTIONS);</li>
</ol>


<img decoding="async" loading="lazy" width="512" height="303" src="https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Tip-image-3.png" alt="" class="wp-image-863" style="max-width: 100%;height: auto;" srcset="https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Tip-image-3.png 512w, https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Tip-image-3-300x178.png 300w" sizes="(max-width: 512px) 100vw, 512px" />


<p style="font-size:11px">Alt Text: Screenshot of the 3 lines of code in GC Forms’ Cypress testing file: “cy.visit(path); cy.injectAxe(); cy.checkA11y(null, A11Y_OPTIONS);”.</p>
</details>



<h2><strong>Q2: The team also runs manual accessibility tests – why both?</strong></h2>



<p>A: Bryan Robitaille (Principal Developer)</p>



<h3><strong>Manual tests help catch issues missed by automations</strong></h3>



<p>We strongly believe that application development teams should integrate at least some form of manual accessibility testing into their development process. <strong>Relying on automatic testing alone won’t catch all accessibility issues.</strong></p>



<p>Along our journey, we’ve tried implementing many different manual testing processes. Some worked well, while others did not. Each team is different! However, after much trial and error, the right balance for our team is the “try it as you code it” approach, doing our best to test along the way.</p>



<p><strong>Want to learn how our team approaches manual accessibility testing on GC Forms? Check out the tech tips section below.</strong></p>



<details class="wp-block-cds-snc-accordion"><summary>Tech tips: Our “try it as you code it” manual test approach</summary>
<p><strong> <strong>1. Train developers on at least one assistive technology to bridge knowledge gaps between a web application’s appearance and functionality.</strong> </strong></p>



<p>Developers often focus on the visual or sighted version of a web application. They may put more effort into the appearance of an HTML component and interaction, than into ensuring the component follows best practices in HTML layout and labelling.</p>



<p>We strongly encourage our developers to familiarize themselves with at least one assistive technology (NVDA, JAWS, VoiceOver, etc) – enough to be able to navigate and interact with a web application. When we asked our developers to use an assistive technology to navigate GC Forms, an interesting thing happened: they became frustrated. Re-framing their mindset from focusing on specific WCAG success criteria to focusing on user experiences showed improvements were needed, like providing more informational context.</p>



<p><strong>2. Update the team’s development processes to assign responsibilities around usability checks.</strong></p>



<p>In our development process, each developer is responsible for the usability of components they’re building or modifying. They need to ensure components are accessible both visually and with assistive technologies.</p>



<p>With this process update, we quickly saw a shift of focus away from ensuring a visually perfect box-shadow, to thinking of ways to improve the interactions of components they’re building. This greatly increased the usability of our complex web application interactions, like uploading a file in a web form and submitting a web form after a set period of time (spam prevention).</p>
</details>



<h2><strong>Q3: How does design research improve product accessibility?</strong></h2>



<p>A: Sarah Hobson (Senior Policy Advisor)</p>



<h3><strong>Design research tests our assumptions</strong></h3>



<p>Accessibility tests and audits run against set parameters, but human behaviours and experiences are diverse and evolving – people can’t be accurately captured in that way. So while the test parameters can help us catch common design issues, we can’t replace direct engagement with people who use assistive technologies to navigate the internet.</p>



<p>Design research enables us to test our assumptions and better understand the impact of previous design and development decisions on real people. This feedback increases our confidence that passing tests and audits actually reflects an accessible user experience.</p>



<p><strong>Are you a public servant interested in conducting design research on your product or service? Check out the research resources section below for guidance.</strong></p>



<details class="wp-block-cds-snc-accordion"><summary>Research resources: Design accessible product experiences</summary>
<h5><strong>Guidance to help with GC design research</strong></h5>



<p>We’ve created resources to help plan your <a href="https://digital.canada.ca/guides/guide-usability-testing/">testing methods</a> and run <a href="https://digital.canada.ca/guides/guide-interviewing/">research interviews</a>, and we also offer a service to help you <a href="https://privacy-statements.cds.alpha.canada.ca/en/">generate privacy and consent forms for research sessions</a>.</p>



<h5><strong>How design research improved experiences using GC Forms</strong></h5>



<p>When developing the forms product, we conducted design research to test our assumptions about accessibility. This included running two design research activities with 12 people who use assistive technologies to navigate government services. We had 10 users complete a mock form and provide written feedback about their experiences completing the tasks. We also had 2 users narrate their experiences as they navigated and completed the form, providing us more detailed information on their user journey.</p>



<p>Each research participant used their preferred assistive technology and browser:</p>



<ul>
<li>Dragon NaturallySpeaking with Chrome;</li>



<li>JAWS with Edge;</li>



<li>MAC built in screen reader with Safari;</li>



<li>NVDA with Chrome;</li>



<li>NVDA with Internet Explorer 11;</li>



<li>OS Magnification with Firefox;</li>



<li>On-screen keyboard with Chrome;</li>



<li>On-screen keyboard with Internet Explorer 11;</li>



<li>Voice Control with Firefox;</li>



<li>VoiceOver with Safari; and</li>



<li>ZoomText with Edge.</li>
</ul>



<p>One of the insights from these activities is that people don’t know what “Alpha” means, so it was confusing that the banner on our forms had “Alpha: This site will change as we test ideas.”</p>



<blockquote class="wp-block-quote">
<p>“I find that the word alpha is a little bit out of context because I can&#8217;t think of what it would be related to and where in the form it would be relevant” – design research participant</p>
</blockquote>



<p>It was clear that while “Discovery, Alpha, Beta, and Live” mean something to us (they’re <a href="https://resources.alpha.canada.ca/resource/delivery-phases/">agile development stages for product releases</a>), it doesn’t necessarily mean the same to people completing GC Forms. So we removed it, avoiding the unnecessary distraction and reducing confusion for users.</p>
</details>



<h2><strong>Q4: How do accessibility audits improve product experiences?</strong></h2>



<p>A: Stevie-Ray Talbot (Senior Product Manager)</p>



<h3><strong>Auditing for accessibility gaps</strong></h3>



<p>Call it cliché, but as the Product Manager, I like checklists. And that’s what the <a href="https://www.w3.org/WAI/standards-guidelines/">Web Content Accessibility Guidelines (WCAG)</a> are – one giant checklist: check that it works for people using screen readers, people who get distracted or need more guidance, people with colour blindness, and the list of varying user experiences goes on. There are lots of things to check to make sure the product is accessible.</p>



<p>Doing automatic and manual testing reduces the amount of accessibility issues found in a product, but there will still be gaps. It’s not realistic to test with every assistive technology, every feature, every sprint (two weeks). That’s where we rely on some help from third parties. Audits help us build our confidence, show us where gaps are, reveal opportunities for training and learning, and make us think about how to improve our processes.</p>



<p><strong>Want to learn more about making WCAG an integral part of your product processes? Check out the tech tip section below.</strong></p>



<details class="wp-block-cds-snc-accordion"><summary>Tech tip: Integrating WCAG into development and testing processes</summary>
<p><strong>Tip from our experience:</strong> the WCAG checklist is too big for any one person to keep in mind all the time – try breaking down the requirements into smaller bits of work and integrating them into different parts of your product processes.</p>



<p>To help prompt thoughts around accessible experiences, we have <a href="https://github.com/cds-snc/platform-forms-client/pull/433/files">placeholders in every user story</a>, unique to the work.</p>



<p>For example, when we’re developing a new component (such as a button to upload files), we make sure it’s keyboard navigable and that a screen reader provides the information needed to upload a document. We implemented the navigation check as part of the “definition of done” and “acceptance criteria”.</p>
</details>



<h2><strong>Share your experiences with us!</strong></h2>



<p>We hope that sharing the GC Forms team’s 4 accessible approaches to product development (automated and manual testing, design research, and audits) will inspire others to start small and experiment. As Bryan said: each team is different, so find out what works best in your context.</p>



<p>We’d also like to recognize the people that helped make all of this possible. They helped us through the procurement process, audit, design research, and training. Thanks to Mario Garneau (Head of Design System and Platform Delivery), Adrianne Lee (Design Researcher, GC Notify), and Jesse Burcsik (Team Wellness and Development Lead, Platform) for all your support.</p>



<p>Setting up automations and updating processes helps us build accessibility in from the start. We’re taking this approach on our new self-serve tool that helps public servants <a href="https://articles.alpha.canada.ca/forms-formulaires/?utm_source=EN_blog-gcforms-accessible-approaches&amp;utm_medium=Blog+Post&amp;utm_campaign=EN_blog-gcforms-accessible-approaches&amp;utm_id=Forms_soft_launch">quickly and easily build forms</a>. It’s a simple and accessible way to collect feedback, request information, register for an event, and more (data collection: up to Protected A).</p>



<p>As we continue to improve the forms tool, we’d love your input. Hearing about others&#8217; experiences with accessible approaches and their feedback on the product helps us make it more useful. <br><br><a href="https://forms-formulaires.alpha.canada.ca/id/cle4hg480270358ayedaqq1ish">Contact us</a> so we can learn from you too (FYI: this feedback form was made using GC Forms)!</p>

