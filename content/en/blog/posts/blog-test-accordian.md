---
layout: blog
title: 'blog test accordian'
description: >-
  blog post incident
author: 'Vic '
date: '2023-02-08T13:54:43'
image: https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Screenshot-2023-02-08-at-1.54.23-PM.png
image-alt: 
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Screenshot-2023-02-08-at-1.54.23-PM.png
translationKey: blog-post-for-incident
---

<details class="wp-block-cds-snc-accordion"><summary>Tech tips: How we set-up our automated testing</summary>
<ol>
<li><strong>Set up automated tests to catch accessibility issues; it reduces manual work and increases the team’s capacity for professional and product growth.</strong></li>
</ol>



<p>For our automated testing, we rely heavily on the open-source <a href="https://www.deque.com/axe/">Axe accessibility testing engine</a>. Axe integrates seamlessly with <a href="https://github.com/cds-snc/platform-forms-client/tree/develop/cypress">our Cypress testing suite</a>, allowing us to test web pages exactly as people would interact with them. If we didn’t have an automation set up to catch these issues, it would add a lot of manual work for our developers and reduce their capacity to grow the product.</p>



<p>2. <strong>Use an accessibility linter to identify issues as you’re writing code (it’s like spell check). This saves time re-writing.</strong></p>



<p>We don’t solely rely on Axe’s engine for our automated testing. We also leverage tools that try to identify issues as we write our application code, saving us time re-writing after testing (because we caught the issues in advance).&nbsp;</p>



<p>For example, we use the <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y">jsx-a11y ESLint plugin</a> to help identify issues as we build our web application. Some of our developers also go a step further and use the <a href="https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter">Axe Accessibility Linter</a> (it’s like spell check but for accessibility issues) as an extension in VSCode, which can provide accessibility linting for HTML, Angular, React, Markdown, and Vue.</p>



<p>3. <strong>Set-up your accessibility test file and add a few lines of code (step-by-step instructions for both are below).</strong></p>



<p>To set-up the file used for running automated tests, you need to add software packages to your existing development dependencies (the other software packages used in development work, not just testing ones). Add them using a package manager – it keeps track of all the software on your computer, so you can use the new testing packages in your automation.</p>



<p>Here’s how (step-by-step):</p>



<ol>
<li>Using the yarn or npm package managers, search and add these software packages to your development dependencies: cypress, axe-core, and cypress-axe.</li>



<li>Add one simple configuration line in Cypress itself: import “cypress-axe”;<img decoding="async" loading="lazy" width="260" height="59" class="wp-image-828" style="width: 150px" src="https://articles.alpha.canada.ca/uploads/sites/25/2023/02/test-accordian-image.png" alt=""></li>



<li>Configure your Axe options in your test file (read <a href="https://www.deque.com/axe/core-documentation/api-documentation/#options-parameter">Axe’s API documentation</a> for guidance).</li>
</ol>
</details>

