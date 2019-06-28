---
layout: page
title: How to make it Accessible
lang: en
category: "homepage"
permalink: "/how-to-make-it-accessible/"
trans_url: "/comment-le-rendre-accessible/"
tags:
- principals
- accessibility
---

To ensure your service is accessible and inclusive, consider accessibility at every stage. That means including diverse users that include people with disabilities at all phases of your design and development cycle.

Plan to engage Accessibility Services throughout each phase. You can also ask for longer-term help with monitoring progress and creating a sustainable accessibility model.

Test your code regularly to uncover issues with development, design and content. At CDS we have built in automated testing as part of our continuous integration (CI)  process. You must conduct both automated and manual testing - you&#39;ll miss a lot of the issues if you only do automated testing. Currently, automated testing only covers 40% of the accessibility-related issues.

The following sections provide details to focus your accessibility work in each phase of development:

- Discovery
- Alpha
- Beta
- Live

## In Discovery

At the beginning of your project, ask yourself, &quot;How would this product work if I couldn&#39;t see it? What if I couldn&#39;t touch it, or move it? What if I couldn&#39;t hear it, taste it, smell it?&quot; This will help you think about people&#39;s pain points and different usage contexts, lending some guidance toward the design of your service.

Conversations with people with disabilities can spark unexpected feedback. Doing design research with people with disabilities helps define the problem space and informs your understanding of user needs. Talking to people with diverse needs improves the human experience of digital services.

Engage Accessibility Services in the discovery phase for help engaging people with diverse user needs. Include users with different abilities in user research. Consider potential visual, hearing, motor, and cognitive disabilities. Remember that including people disabilities also helps people who experience temporary or situational disabilities, like having an injured limb, being in public without earphones or holding a baby.

Incorporate accessibility considerations in your research artifacts (for example, personas or user stories).

1. Recognize bias
2. Do design research
3. Follow ethical practices
4. Actively listen
5. Test with people
6. Consider diverse needs
7. Build inclusive personas
8. Conduct cognitive tasks
9. Offer different ways to engage

## In Alpha

In Alpha, ensure your service meets the standards of our Priority Check 1 checklist.

### Priority Check 1 - Critical (WCAG 2.1 A, AA)

Check that your service includes all the following:

- [Site is keyboard accessible](https://accessibility.18f.gov/keyboard/): All interactions can be accessed with a keyboard
- [Site is free of keyboard traps](https://accessibility.18f.gov/keyboard/#keyboard-trap): The keyboard focus is never trapped in a loop
- [All form inputs have explicit labels](https://accessibility.18f.gov/forms/)
- [All relevant images use an img tag](https://accessibility.18f.gov/images/)
- [All images have alt attributes](https://accessibility.18f.gov/images/)
- [Multimedia is tagged](https://accessibility.18f.gov/multimedia/): All multimedia has appropriate captioning and audio description
- [Text has sufficient color contrast](https://accessibility.18f.gov/color/): All text has a contrast ratio of 4.5:1 with the background
- [Site](https://accessibility.18f.gov/keyboard/)[never loses focus](https://accessibility.18f.gov/keyboard/): Focus is always visible when moving through the page with the keyboard
- [Tab order is logical](https://accessibility.18f.gov/keyboard/)
- [Form instructions are associated with inputs](https://accessibility.18f.gov/forms/)
- [Site doesn&#39;t timeout unexpectedly](https://accessibility.18f.gov/timeouts/): Identify elements that may &quot;timeout&quot; and verify that the user can request more time
- [Tables are coded properly](https://accessibility.18f.gov/tables/): Tables have proper headers and column attributes
- [Headings are nested properly](https://accessibility.18f.gov/headings/): Heading elements are nested in a logical way
- [Language is set](https://accessibility.18f.gov/language/) for the page. For sections on the page that differ from the site, language is set.
- Audio and video have appropriate captions, transcriptions and described video where necessary
- Identifying content only by its shape or location, or using graphical symbol alone to convey information
- Use of colour: No colour is used alone to convey meaningful information
- Skip links: Are available to bypass blocks of content that are repeated on multiple [Web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s)

### Enabling adaptive technology

In Alpha, you will also need to ensure your service works with the most common adaptive technologies:

- test with adaptive technology yourself (you can ask the accessibility community of practice lead or contact the Accessibility, Accommodation and Adaptive Computer Technology (AAACT) program at Shared Services Canada (SSC) to learn about adaptive technology)
- reach out to the design research community lead to help find user research participants who use adaptive technology
- ask for adaptive technology testing to be included in your accessibility audit.

Examples of tools you can use include:

- Voice Over
- NVDA
- Zoom Text
- High Contrast (OS and dark modes)

## In Beta

You must get an accessibility audit - and fix any issues - before your service moves into public beta.

As well, ensure your Beta service meets the standards of our Priority Check 2 list.

### Priority Check 2 - Less critical, but essential (WCAG 2.1, A, AA)

- [Frames are named](https://accessibility.18f.gov/iframes/) and have a name element
- [Flashing elements are compliant](https://accessibility.18f.gov/flashing/): any elements that flash on screen do so at a rate of less than 3 Hz
- [CSS is not required to use the page](https://accessibility.18f.gov/css/): The page makes sense with or without CSS
- [Links are unique and contextual](https://accessibility.18f.gov/links/): All links can be understood taken alone
- [Page titles are descriptive](https://accessibility.18f.gov/page-titles/)
- [Required plugins are linked on the page](https://accessibility.18f.gov/plugins/)
- [Orientation of web content is not restricted or locked](https://www.w3.org/TR/WCAG21/#orientation)
  - Use CSS to set the orientation to allow both landscape and portrait.
  - Use show/hide controls to allow access to content in different orientations.
- [The input field serves a purpose that identifies the expected meaning for form input data](https://www.w3.org/TR/WCAG21/#identify-input-purpose)
- [Content can be presented without loss of information or functionality, and without requiring scrolling](https://www.w3.org/TR/WCAG21/#reflow)
  - Vertical scrolling content at a width equivalent to 320 [CSS pixels](https://www.w3.org/TR/WCAG21/#dfn-css-pixels);
  - Horizontal scrolling content at a height equivalent to 256 [CSS](https://www.w3.org/TR/WCAG21/#dfn-css-pixels)[pixels](https://www.w3.org/TR/WCAG21/#dfn-css-pixels).
- Active user interface components (i.e., controls) and meaningful graphics are distinguishable by people with moderately low vision using [n](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)[on text contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
  - [Here are some ways that you can test non text contrast](https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Testing_Non-Text_Contrast)
- Ensure people can override text spacing to improve their reading experience using [t](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)[ext spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)
  - [Additional details on testing for text spacing](https://knowbility.org/blog/2018/WCAG21-1412TextSpacing/)
- [Hover and focus events](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)should not obscure content and should be dismissible
  - [Additional details on hover and focus events](https://www.boia.org/wcag2/cp/1.4.13)
- If a keyboard shortcut is implemented in content using only letters, refer to [character key shortcuts](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#intent)
  - Additional details on [character key shortcuts](https://knowbility.org/blog/2018/WCAG21-214CharacterKeyShortcuts/)
- Content can be operated using simple inputs on a wide range of pointing devices using [p](https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html)[inter gesture techniques](https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html)
  - Additional details on [pointer gesture](https://knowbility.org/blog/2018/WCAG21-251PointerGestures/)
- Functions that emulate a keyboard or numeric keypad key press are considered essential using [pointer cancellation techniques](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)
  - Additional details on [pointer cancellation](https://knowbility.org/blog/2018/WCAG21-252PointerCancellation/)
- Words which visually label a component are also the words associated with the component programmatically using [label in name techniques](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
  - Additional details on [label in name](https://knowbility.org/blog/2018/WCAG21-253LabelInName/)
- Functions that are triggered by moving a device, or by gesturing towards the device can also be operated by more conventional user interface components, unless the motion is essential for the function or not using motions or gestures would invalidate the activity using [motion actuation techniques](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html)
  - Additional details on [motion actuation](https://knowbility.org/blog/2018/WCAG21-254MotionActuation/)
- Make users aware of important changes in content that are not given focus, and do so in a way that doesn&#39;t unnecessarily interrupt their work using [status messages techniques](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html)
  - Additional details on [status messages](https://knowbility.org/blog/2018/WCAG21-413StatusMessages/)

## Live - keeping your work accessible

As you prepare to make your service live, and after launch, strive to ensure your service meets the standards of our Priority Check 3 list.

### Priority Check 3 - Ideal (WCAG 2.1 AAA)

- [In content implemented using markup languages, the purpose of UI, icons and regions can be programmatically determined.](https://www.w3.org/TR/WCAG21/#identify-purpose)
- Timeouts
- Animations from interactions
- Concurrent input modalities
- Sign Language