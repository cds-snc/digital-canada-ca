---
title: Setting up users for success with content design
author: 'Zak Kain, Content designer'
date: '2018-06-12 09:00:00 -0400'
image: /img/cds/blog-setting-up-users-for-success.jpg
image-alt: >-
  Paper prototypes of an early version of the IRCC Reschedule a Citizenship Test
  service. Four pages are laid out on a table. They  include a web form, a
  calendar, a confirmation and checkboxes with appointment times.
description: >-
  As you might have already read, CDS is working with Immigration, Refugees and
  Citizenship Canada (IRCC) to make the process of rescheduling a citizenship
  appointment as convenient and stress-free as possible for applicants, while
  empowering office staff.
translationKey: setting-users-up-for-success-with-content-design
thumb: /img/cds/thumbnails/blog-setting-up-users-for-success.jpg
processed: 1550672961760
---


As you might have already read, CDS is [working with Immigration, Refugees and Citizenship Canada (IRCC)](https://digital.canada.ca/2017/10/24/framing-a-design-problem/) to make the process of [rescheduling a citizenship appointment](https://digital.canada.ca/2018/04/13/reschedule-a-citizenship-appointment/) as convenient and stress-free as possible for applicants, while empowering office staff.

Here are two insights from our research and usability testing that can be used to improve all kinds of digital services using content design principles.

## What’s content design?

At CDS, content designers share responsibility for UX decisions with designers and researchers. While visual designers are working on layout and other details of an interface, content designers are working on the information architecture, messaging, and microcopy in that interface. For more about content design, check out this [short interview with Sarah Richards](https://gds.blog.gov.uk/2014/03/14/what-we-mean-when-we-talk-about-content-design/).

## 1. Provide the right information at the right time

A common design pattern in digital products is “just-in-time” information or instructions. To guide users through a certain process (say, a cart checkout or signup flow), the interface gives them the information they need to succeed right when they need it.

When designing an IRCC tool to facilitate rescheduling a test appointment, we tried a similar approach:

<img width="50%" style="float:left;" alt="Screenshot of a calendar interface, showing the month of May, with text instructions above the date picker that say “If your request is approved, we’ll send you a new appointment. Use the calendar to select all the days you’ll be AVAILABLE between April and July 2018, so we can schedule your new appointment. There is a reminder below the calendar that says “Remember: make sure you stay available on all the days you selected.”" src="/img/cds/ircc-calendar.png">

<p class="translation-caption"><strong>Version 5 of the Alpha “Calendar” page wireframes</strong></p>

<p class="translation-caption">In this design, there are clear instructions provided at the top of the page. Under the calendar, there is an important reminder about availability. Both elements are critical for citizenship applicants to successfully reschedule an appointment.</p>

When we tested this page with applicants, we noticed that while the content on the page was clear, it wasn’t being understood—or even fully read. Information at the bottom of the page was being skipped by users who had prior experience and familiarity with online calendars—they wanted to go right to the next step.

> **Insight: critical information should be delivered when users aren’t focused on another task.**

> Even if important information is delivered “just in time,” users may not digest that information if they are focusing on something more relevant to their goals.

To address the issue with “just-in-time” instructions, we reduced how much text needed to be read. We also moved that critical text to an earlier step in the user flow, where it can be the primary focus of the page so it isn’t forgotten while users interact with the calendar itself.

We added an introductory page to the service, that prepares users for what they should expect:

<img width="50%" style="float:left;" alt="Screenshot of text explaining the service: “After verifying your personal information, you will select three (3) alternative days when you are able to take the Citizenship test”. A warning box below reminds the user of critical information: “By sending this request to reschedule, you will be cancelling your current test. After you complete this process it could take up to 6 weeks for IRCC to contact you with a new test date.There is also a button below the warning box that says “Start now”." src="/img/cds/ircc-rescheduler-start.png" />

<p style="clear: both;"> We also revised the calendar page:</p>

<img width="50%" alt="Screenshot of an updated calendar interface, showing the month of June. There is less text above the date picker. The instructions read: “Citizenship tests are scheduled on Tuesdays and Fridays. Select three (3) days you are available in June and/or July.” The date picker now has areas highlighting which dates have been picked, in this case dates selected are Tuesday June 1, 2018, Friday June 11, 2018 and Tuesday July 5, 2018." src="/img/cds/ircc-chosen-days-calendar.png">

### Takeaways:
* Reduce the amount of descriptive copy on pages where there is an important task for users to complete.
* Separate critical information from elements that demand more attention from the user.
* “Just-in-time” delivery of important information isn’t always the best way to design a service—even if it’s more “efficient”.

## 2. Use “spoilers”
Similar to the notion of “just-in-time” information is the concept of “affordances.” Design affordances are interaction clues that are baked into an interface—like a knob on a stereo that you intuitively know should be turned to raise or lower the volume. In digital interfaces, design elements like form fields, buttons, and links serve the same purpose as that volume knob.

For the IRCC “Reschedule a citizenship test” service, we designed a page that asked applicants for their identification details and the reason they need to reschedule their test. In effect, this page is asking them “why are you using this service?” An early version that went through usability testing looked like this:

<img width="50%" alt="Screenshot of a page titled “Request a new Canadian Citizenship test date” with four form fields. The first is “Full name” and indicates “This is the full name you used on your Citizenship application”.The second asks for a “UCI number for example A123456 -- this number is at the top of the email we sent you”. The third field invites the user to “Select a reason” in a dropdown menu for “Reasons for rescheduling”. The last form field includes a large text area for further explanation. The text above the open text field reads “Tell us why you can’t attend your test. If you’re not sure if you can reschedule, read the guidelines for rescheduling.”" src="/img/cds/ircc-rescheduler-form.png">

We knew from discovery research that applicants experience a lot of anxiety when waiting to hear back about their new appointment. After testing two versions of an early prototype, it was clear that applicants wanted to provide dates of availability. Doing so made them feel more in control, both in terms of the process and their own schedules.

Through more testing we found that people didn’t know the calendar page was coming after the first page where they are asked to explain why they can’t attend their appointment. They used the open text field to include availability information, not knowing that they would be asked to do so on the next page. This made the output of that field less usable for office staff, who need to filter through that information.

> **Insight: When users aren’t made aware of all the affordances in a process, they will use what they have immediately available to achieve their goals.**

> When users don’t know what comes next in a multi-step process, they may assume the step they’re currently on is their last opportunity to provide input. This leads to users “mis-using” – through no fault of their own – input fields for purposes the service isn’t intended to accommodate.


To fix this issue, we added a big “spoiler” for users: an introductory page that explains the entire process before it begins. We also refined the copy on the form labels and descriptions, so that it was clearer to users what information they should input into the form.

Revised introductory page:

<img width="50%" alt="Screenshot of a page titled “Request a new Canadian Citizenship appointment” with introductory text that says “Use this service to notify Immigration Refugees and Citizenship Canada that you cannot attend your Citizenship test, and for a new appointment.” A  bulleted list of requirements users must provide to successfully use the service follows: “You will need: Your paper file number (this is found at the top of your test notice email). You will need: Your full name (as it appears on your application). You will need: To describe your reason for rescheduling (for more information on rescheduling, read the guidelines).” Below the list it says: “After verifying your personal information, you will select three (3) alternative days when you are able to take the Citizenship test”." src="/img/cds/ircc-rescheduler-instructions.png">

Revised form page:

<img width="50%" alt="Screenshot of part of the form page, with a radio button picker replacing the earlier dropdown picker. Above the radio buttons, it says “Reason for rescheduling, if you’re not sure if you can reschedule, read the guidelines for rescheduling.” The radio buttons available for selection include: “Travel, Medical, Work or School, Family, Other”.  There is now different text above the large text area that reads “Describe why you cannot attend your test. Provide enough detail so that staff can understand your situation.”" src="/img/cds/ircc-rescheduler-reason.png">

This addressed user anxieties around scheduling, and helped them complete the form in a way that was more usable for office staff. Sometimes, spoilers are a good thing!

### Takeaways:
* Set expectations for user tasks before they start the process.
* Provide clear messaging around what input is required, and why.

### What’s next?
When a service is designed iteratively and with a “research-first” approach, designers gain insight into the mental model of the people they’re designing for, and how they think about the problems they encounter in a service.

Being mindful of high-level content design principles like “set expectations up front” and “allowing critical information room to breathe” is helping the CDS design team build more accessible and effective services and products.

