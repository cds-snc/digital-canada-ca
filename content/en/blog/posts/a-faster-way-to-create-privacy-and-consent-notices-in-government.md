---
layout: blog
title: 'A faster way to create privacy and consent notices in government'
description: >-
  To make better government services, we need to research with users a little and often. Which means we need to create a lot of privacy and consent notices. To help with that, we made a tool that generates quick and compliant notices for researchers in the Government of Canada.
author: 'Stevie-Ray Talbot, Product Management and Policy'
date: '2021-06-30T14:00:00.000Z'
image: https://de2an9clyit2x.cloudfront.net/en_banner_consent_generator_ecbab1db1c.jpeg
image-alt: A Government of Canada website called “Make a form for intercept recruitment and testing,” displayed on a laptop screen and mobile phone.
thumb: https://de2an9clyit2x.cloudfront.net/small_en_banner_consent_generator_ecbab1db1c.jpeg
translationKey: blog-consent-generator
---
Providing good services isn't just about technology. It's about meeting the raised expectations of a public that knows exactly where their rideshare is and pays for a coffee with a tap of their phone. It’s about understanding how people navigate the world. To do that, we have to research with people a little and often. 

When research with the public takes a long time, the fast feedback loop needed to build effective services slows down. Before we research with the public, we need their consent to talk with us. This requires a privacy and consent notice. But drafting these notices is often time-consuming and delays research. 

To help researchers in the Government of Canada get feedback from the public quicker, we made it easier to create privacy and consent notices. 

## Let’s talk privacy and consent notices
There’s a lot involved in putting together a notice, and it can take a few weeks to finalize. 

In government, privacy notices need to be: 

* In French and English
* In plain language 
* Specific to the location, context, and research activity
* Policy compliant 

To make sure all of those items are met, we work closely with the Treasury Board Secretariat’s (TBS) Access to Information and Privacy (ATIP) team. They help us make sure everything follows the rules about how we conduct research. But to conduct research “a little and often”, we did a lot of back and forth with ATIP. 

For example, when we worked with Veterans Affairs Canada (VAC) to [help Veterans find relevant benefits](https://benefits-avantages.veterans.gc.ca/?lng=en), our team tested nine product iterations:

* with 100+ participants
* in 10+ locations across Canada
* over nine months.

To do all that, we generated a lot of new notices in just a few days and sent each one to ATIP for guidance. There had to be a better way of creating a common understanding between the two teams. 

## Build understanding

To try to solve this early on, we embedded a policy analyst in our delivery teams. Since bureaucracy can be its own dialect, policy analysts helped researchers translate what they were trying to accomplish into a policy compliant privacy notice. Once the draft was approved by ATIP, it was ready to use.

Even still, there was a lot of back-and-forth between all three parties. So, we started wondering: *How might we make a template for a privacy notice to speed this up in the future?*

## Identify patterns, build a framework

As we drafted more notices, patterns around the types of new information needed to create them began to emerge. 

We used these patterns to create a framework and our first iteration of the “Generate Privacy and Consent Notices” tool. The tool asks standard questions to tease out information about the research activity, then creates a policy compliant privacy notice. 

These were the three categories of information each notice needed:

### 1. Consistent information
This is standard language in each notice that never changes. 

For example, our ATIP office’s contact information is consistent information since it’s always the same.

### 2. Open text
This is simple information that does change in each notice. 

For example, each researcher needs to provide contact information. This will change each time depending on who is conducting the research. 

### 3. Variables: “ifs” and “thens”
This text changes based on the conditions of the research. The researcher chooses from a list of preset options. Each option changes the text displayed in the section of the notice. 

For example, in the tool there’s a question that asks, “How are we collecting consent?” It has three variables to choose from: verbal, written, or taking an action. The tool creates “if/then” variants based on the response. So, if we’re collecting written consent, then a signature block is added at the end of the notice. 

## Spend more time doing research
So what do these patterns and the framework help us do? They create a shared understanding of the language required for each notice. This cuts out a lot of the back-and-forth for both little and big changes.   

We still need ATIP’s approval for our notices. But, we shortened the time to create the first draft of a notice from a few days to a few minutes. Some end-to-end reviews even dropped from a few weeks to a single afternoon. This meant we were spending less time navigating bureaucracy, and more time talking to the public to make government services better.

## Check out the “Generate Privacy and Consent Notices” tool
While the tool is currently limited to internal use, you can see how we **[Generate Privacy and Consent Notices](https://simplify-privacy-statements.alpha.canada.ca/en)** here.

If you’re a federal public servant in Canada, we’re working on adapting it for wider use. This includes changing the collection authority to make it less specific to CDS's needs. So stay tuned for updates or [reach out](mailto:CDS-SNC@tbs-sct.gc.ca) to learn more about adopting it in your department!  

If you’re from outside Canada, check out [our repository](https://github.com/cds-snc/simplify-privacy-statements-V2) and see if the code will work for you! There’s still some work to create the rules and information, but it might be the starting point you need. Like it was for the [global ResearchOps community](https://researchops.community/), who used our code to create a consent form builder for its 8,000 members.

Wherever you are, get out there and talk to your users, get informed consent, and make your products work for them. We hope this tool helps to bridge a conversation between researchers and privacy officers to make all of that faster for you! 

