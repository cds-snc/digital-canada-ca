---
layout: blog
title: 'Listening to Users: Improving the COVID-19 Benefits Finder Tool'
description: ' A blog post about building the feedback component on “Find Financial Help During COVID-19” tool using Canada.ca template. It speaks to the type of feedback we’ve been receiving, and how we''re handling private information that may come in.'
author: 'Adrianne Lee, Researcher'
date: 2020-07-06T20:31:25.403Z
image: https://de2an9clyit2x.cloudfront.net/adrianne_blog_en_8f917cc7df.jpg
image-alt: >-
  An illustration of an online service receiving written feedback on its
  usability from 8 different people.
translationKey: blog-ffhc19-feedback
thumb: https://de2an9clyit2x.cloudfront.net/small_adrianne_blog_en_8f917cc7df.jpg
---
On May 7th, we soft launched the *[Find financial help during COVID-19](http://canada.ca/coronavirus-benefits)* online tool in partnership with Service Canada. The purpose of this co-developed tool is to help reduce financial stress that people in Canada are experiencing during the pandemic. By having people answer a few simple questions anonymously, the tool provides them with a tailored list of benefits for their specific situation. We included a feedback text box, which has had a huge impact on our ability to improve the tool with the help of the people using it every day.

We conducted design research throughout the product build, facilitating multiple rounds of quick, moderated usability testing and a survey to make sure we were building the best thing for people, as quickly as possible. When we launched, we started collecting live data on the tool to make sure we could quickly address issues and ensure we were continuing to meet user needs.

## Feedback text box

One of the ways we collected live data was through a feedback form with a feedback text box. Canada.ca specifications require a ‘Report a problem or a mistake on this page’ form on every page. A feedback box feature is also available for web pages as part of the Canada.ca design system. We modified the options to more specifically fit our product’s content. We added a feedback text box because we decided as a team that we needed to understand when people report “confusing” or “incorrect information,” what people specifically found confusing or incorrect about the tool. The open text provided informative data for ways we could improve our tool.

![A screenshot of the feedback box in the Find financial help during COVID-19 tool.](https://de2an9clyit2x.cloudfront.net/adrianne_blog_screenshot_en_611b252695.jpg)

Although we didn't intend to, we learned a lot about how we can improve government services in general too.

The feedback we received was in real-time, and helped us identify areas where the tool wasn't meeting the needs of the people using it. It also helped inform the team on future research questions to address.

## Addressing concerns

We’ve encountered and addressed three main concerns with a feedback text box on a government website. The first concern was that users might submit personally identifiable information (PII) (e.g. name, SIN, address, place of work, etc.) into the feedback text box, which would then go into a system not designed to accommodate PII. This is a very valid concern about protecting people’s sensitive information from harm.

To protect people’s sensitive information, we tell people above the feedback text box, “Do not include your personal or financial details. We use this information to improve this service, but we do not reply.” Still, some people put PII in their feedback text box submission, so a feedback monitoring team keeps an hourly shift schedule to redact any PII from the submissions.  This way, if someone does leave their phone number in their feedback submission, that phone number is removed within the hour, or within the first business hour on the next business day, if the phone number was left on a weekend.

Within the first month, we received more than 1,400 feedback submissions and only 86 submissions had PII redacted.

The second concern to address when using a text box on any Government of Canada website is the risk that someone may submit harmful content – either as a threat to life, harassment, or content that is simply not safe – into the feedback text box.  This happens very rarely, and can happen in other forms, via abusive telephone calls, unsolicited GitHub issues, or emails, and is more prevalent when working in the open, as we do. Fortunately this happens very rarely, but product teams need to consider this possibility and have established protocols in place with their security leads/CSE/RCMP in case this happens. This security challenge also means that a member of the team must regularly monitor input for any threats.

The third concern the team encountered was that the workload in monitoring and processing feedback might be too high. There is definitely a lot of work that goes into monitoring and processing this feedback and, like any research activity, teams should consider the value that this research activity can provide for the product development.

For our team, we decided the value of the  insights we could capture from a feedback text box on our feedback form was worth the effort. Given the short timeline we had in conducting research leading up to the launch,  a feedback text box option could help surface the constantly changing user needs.

## Scoping feedback

For every piece of feedback, we first consider our product scope and see whether a piece of feedback is relevant to the scope.  In product development, a [layer cake is sometimes used to describe the Agile methodology](https://twitter.com/nkkl/status/1066571295784022016). Expanding on this analogy is helpful to explain how we consider a piece of feedback’s relevance.

![Helpful feedback (represented by a piece of strawberry cake and a strawberry) vs. not helpful feedback (represented by a fish soup and a fish)](https://de2an9clyit2x.cloudfront.net/adrianne_blog_infographic_en_187719f594.jpg)

If building the Find financial help tool is like baking a cake, the benefits/programs listed in the tool are kind of like the cake’s ingredients. They play a large part in how the cake tastes and feels, and ultimately whether it’s ‘useful’ or not to the person eating the cake.

Feedback about the cake or the cake ingredients is relevant to our product scope because they directly impact the problem we’re trying to solve: helping people in Canada find financial help and reduce financial stress caused by the pandemic. Feedback about other government tools, application processes, call centres, or the policies that do not have impact on benefits or programs related to relieving financial stress is less related to our product scope. In this analogy, these pieces of feedback are like a different food item all together (like a fish soup and fish soup ingredients, for example).

Here are a few examples of relevant feedback we saw and were able to address thanks to the feedback form with a text box:

* People on disability benefits were not able to select an answer on the first few questions on our tool. As an interim solution, we implemented a “None of the above” option for the questions to enable people to progress to the results page of the tool.
* Students were not able to select an answer on the first few questions of our tool. We implemented options to include student-related situations.
* We had people tell us they were confused on the first page due to the “Canadian stuck abroad?” text. We removed this text on the first page.
* We changed the content on the first page to set clearer expectations on what this tool is because we saw that many were leaving feedback on the first page. We saw in our web analytics that this change contributed to a 9% increase in people clicking the “Start Now” button on the first page.

Like any research method, there are limitations. Because this is a survey of sorts, we can’t ask follow-up questions to the people who experienced issues. There were some issues identified through the feedback submissions that prompt more research questions to explore.

* Are there other issues causing people to leave more feedback on the start page than other pages of the tool?
* If seniors are leaving more feedback on the first few pages of the tool, does that mean the tool is not as helpful for them?
* Since we received proportionally more feedback from French users relative to unique visitor numbers, could that mean the tool isn’t as helpful for French users as English users?

Service Canada took over the management of the tool, future research and iterations, at the end of June. During this initial launch and phase of the tool, we learned that we might not get all the answers to our research questions from the feedback text box on the *Find financial help during COVID-19 tool*, but that doesn’t mean it isn’t incredibly valuable. Even if the feedback we received makes us ask ourselves many more questions, it’s told us so much about who is using the tool, where they may be stumbling, and what changes we can make to create a better and more helpful experience.

Have you tried a feedback text box on your Government of Canada online tool or service? We’d love to hear about your findings. Get in touch with our [research community](mailto:rc-gc-dr@cds-snc.ca).
