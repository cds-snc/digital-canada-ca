---
title: "A service that works better for everybody: Supporting more users with gracefully degrading React"
description: "Using modern technologies can make development faster, but ultimately we need to deliver working solutions without sacrificing robustness or accessibility. We’ve built the “Reschedule a citizenship test” service in a way that pushes service delivery forward without leaving users behind."
author: Paul Craig, Developer
date: 2018-08-08 09:00:00 -0400
image: blog-noJS.jpg
image-alt: A person navigating through a range of devices, including a rotary dial phone, a flip phone, a laptop and a computer tower.
lang: en
layout: cds/post
trans_url: "/2018/08/08/supporter-utilisateurs-degradation-progressive-react"
---

Using modern technologies can make development faster, but ultimately we need to deliver working solutions without sacrificing robustness or accessibility. We’ve built the “[Reschedule a citizenship test](https://rescheduler-dev.cds-snc.ca/)” service in a way that pushes service delivery forward without leaving users behind.

## A robust service benefits all users

Given the abundance of internet-connected devices, it isn’t possible to predict the complete set of browsers that will end up viewing your website. In many cases, this leads to building interactions that work for some people but fail for others — not a good outcome for a government service.

Progressive enhancement and graceful degradation are approaches that can be used to build a service that prioritizes inclusiveness. These are different paths to the same destination: building extremely robust web services that succeed on the broadest possible range of devices. In both cases, the goal is a service everyone can use: more capable devices get an enhanced experience, less capable ones see a more basic interface.

**Progressive enhancement** calls for starting with a basic experience and improving it.

**Graceful degradation** means building the enhanced experience first and then backfilling behaviour where needed.

When designing government services, public servants have a responsibility to support those who need it most. This is why progressive enhancement is a principle commonly followed by government digital agencies in the [UK](https://www.gov.uk/service-manual/technology/using-progressive-enhancement) and [New Zealand](https://www.digital.govt.nz/standards-and-guidance/design-and-ux/browser-and-device-testing/), for example. As the brilliant Alice Bartlett said in her "Burn your select tags” conference talk: “we have to serve the needs of an entire country interacting online with its government”. She includes people who can only access the internet in a library, [low technical-confidence users](https://www.youtube.com/watch?v=CUkMCQR4TpY&feature=youtu.be&t=523), and people who rely on screen-readers and other assistive technology. [These are not edge cases:](https://twitter.com/kyliehavelock/status/1023932609561341952) our service needs to work for everybody, and this is why we have built a citizenship rescheduling service that gracefully degrades.

## The tradeoff of building sites using modern technology

While modern tools and newer syntax can greatly improve the experience for web developers, they often result in sites that are less robust for users, as they cannot reliably be used on older devices.

When starting development on our service, we decided to use [React](https://reactjs.org/): a modern Javascript library which is [extremely popular amongst web developers](https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-frameworks-libraries-and-tools).

React offers a number of advantages: it keeps related code together, it reduces the need to learn multiple languages, and it has a vibrant ecosystem of open-source libraries and tutorials. But, using React to build a service that would degrade gracefully was not a straightforward problem. Nevertheless, we were determined to serve the largest range of devices, which meant supporting users without JavaScript. 

## The benefits of a no-JavaScript user journey

Using JavaScript to build a service that also works without JavaScript was not the easiest problem to solve — so, initially, we didn’t.

Before we had any real users, we prioritized building out the service quickly, testing it, and iterating on it. In our early stages, with a fairly volatile codebase, it would have been too early to try to solve everything at once. As [Jason White, erstwhile Head of Data](https://github.com/cds-snc/digital-canada-ca/commit/cd835e4c730bf247a5a85b323c63b9d5defb378d#diff-cae0f3940920ef2bda0b377bf60f9650L20-L27), was fond of saying: “premature optimization is the root of all evil”.

We started building with a [React-based framework](https://github.com/jaredpalmer/after.js/blob/master/README.md) that sends HTML first and then runs JavaScript on the user’s device if possible. This is straightforward enhancement: users still get the content of the site even if the JavaScript doesn’t run.

Once we had a good understanding of what our service would look like, we prioritized backfilling it to support older clients, which also improved it for everyone else.

Graceful degradation means that our service works for devices that don’t run JavaScript, for devices on unreliable networks, and for older devices that aren’t able to understand newer JavaScript syntax. Users in this latter group (by far the largest) are able download our code but they aren’t able to run it — almost like trying to get a VHS player to play a DVD. Now, all of these users are able complete the service, likely without even realising there was a problem.

Thanks to graceful degradation:
* users can load the site in either official language
* users don’t lose saved information when they refresh the page
* users don’t lose their language preference if they close the site and return later
* users without JavaScript can still reschedule their appointments
* users whose devices can’t run our code can still reschedule their appointments
* the site loads faster for everyone

For the technically-minded, we’re writing a follow-up post about how it works, but the key point here is that **graceful degradation has made our service better**. It works for users with restrictive firewalls. It works for assistive technology that expects content when the page first loads. It even works on devices we’re not explicitly supporting — for instance, [I can reschedule a citizenship appointment on my Nintendo 3DS](https://twitter.com/HillaryLorimer/status/1019322192440451073).

## The best of both worlds

Many government service teams may feel like they have to make a choice between choosing a modern web stack and supporting older browsers. However, in many cases this is a false dichotomy. [We have chosen React and we support no-JavaScript users](https://twitter.com/CDS_GC/status/1022142454634438661). The majority of users get a polished experience, a minority still get a functional service. Rather than compromising, we get the benefits of both approaches.

Granted, our solution isn’t the panacea: not every product is this product. However, it is a statement of principle, and we are extremely proud of having [done the hard work to make it simple](https://www.gov.uk/guidance/government-design-principles#do-the-hard-work-to-make-it-simple). Our service solves an important problem for our users, it is simple to use, and it works on your Game Boy.
