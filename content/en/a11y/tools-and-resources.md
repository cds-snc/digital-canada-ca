---
type: a11y
layout: default
title: Tools and resources
translationKey: tools-and-resources
---

At the Canadian Digital Service (CDS), we use a variety of testing tools, including:

- Research with people with disabilities
- Automated testing tools
- Adaptive technology
- Manual testing and
- Usability testing including people with disabilities.

## Automated testing

For automated testing, CDS uses a range of tools, including:

- [accessibilityinsights.io](https://accessibilityinsights.io/) - Open source browser extension from Microsoft.
- [Axe](https://www.deque.com/axe/) - Open source accessibility engine.
- [WAVE Toolbar](https://wave.webaim.org/) - Popular free browser extension by WebAim. 
- [Siteimprove](https://siteimprove.com/en-ca/core-platform/integrations/browser-extensions/) - Commercial tool with site-wide accessibility checking and browser extensions.
- [Google Chrome - Accessibility Developer Plugin](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en)

**Pa11y / Puppeteer** is a [NodeJS (JavaScript) Library](https://github.com/pa11y/pa11y) for automating Google&#39;s Chrome and Chromium Web Browser. The reason we choose this library over another tool such as Selenium was purely due to ease of use.

We found that Puppeteer was easier for our devs to use then other alternatives. This also allowed use to automate certain functionality that can be difficult to test for single page apps and dynamically generated content.

**aXe Core** is becoming the default accessibility engine because it supports WCAG 2.1 automated test scores, has a commitment to reducing false positives and because it is open source. Deque is in partnership with Microsoft which is contributing back to this open source project through the [Accessibility Insights](https://accessibilityinsights.io/) extension. Microsoft's accessibility extension allows more detailed walk throughs in the manual testing arena. Because it is open source, aXe has partners in government, industry and other through accessibility leaders keen on producing a robust automated accessibility engine. Google also leverages aXe in their Lighthouse tool which is available as a browser and command line tool (CLI) for automated reviews. aXe is also very easy to integrate with Puppeteer, Jira and Github.

## Manual testing

Use [the accessibility checklist created by](https://accessibility.18f.gov/checklist/)[18F](https://accessibility.18f.gov/checklist/) (the US government&#39;s digital agency) to help you test for common accessibility problems, including:

- lack of keyboard accessibility (important because people who use screen readers, voice recognition or have situational, temporary or permanent mobility related disabilities may rely on using a keyboard to navigate websites)
- ensure that the content is written in plain language
- link text that&#39;s not descriptive (for example, &#39;click here&#39; and &#39;read more&#39; links)
- lack of colour contrast for text and important graphics or lack of proper controls
- non decorative images not having meaningful alt text
- [Online forms](https://design-system.service.gov.uk/components/) not being marked up correctly, so the right control is associated with the right label

Some browsers have tools that make it easier to find accessibility problems in the Document Object Model (DOM). For example, [accessibility Inspector for Mozilla Firefox](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector) and the [accessibility features in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference). Also, you can check out the [Accessibility Object  Model](https://wicg.github.io/aom/).

## Cross-browser testing

For cross-browser testing, ensure your service works on the following browsers:

- [Chrome](https://www.google.com/chrome)
- [Firefox](https://www.mozilla.org/firefox/new/)
- Windows only: [Internet Explorer 11](https://www.microsoft.com/download/internet-explorer.aspx), [Microsoft Edge](https://www.microsoft.com/windows/microsoft-edge)
- Mac/iOS only: [Safari](https://www.apple.com/safari/)

## More resources

There&#39;s a lot of information out there on accessibility. You can start some simple tests with:

- [W3C Easy Checks](https://www.w3.org/WAI/test-evaluate/preliminary/) - a few quick things to help you start to assess how accessible a web page is
- [Basic screen reader commands for accessibility testing](https://developer.paciellogroup.com/blog/2015/01/basic-screen-reader-commands-for-accessibility-testing/), from the Paciello Group
- [WCAG report generator](https://www.w3.org/WAI/eval/report-tool/#/)

You can also read some blog posts on:

- [Dos and don&#39;ts on designing for accessibility](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/)
- [How the Government Digital Service did accessibility testing on GOV.UK](https://gds.blog.gov.uk/2012/01/20/user-testing-accessibility/)

You may also find these guides useful:

- [Making your service accessible: an introduction](https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction)
- [Using, adapting and creating patterns](https://www.gov.uk/service-manual/design/using-adapting-and-creating-patterns)
- [Using progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement)
