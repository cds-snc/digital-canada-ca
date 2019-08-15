---
layout: blog
title: We take security seriously; why everyone at CDS has security keys
description: >-
  We purchased security keys that support the FIDO2 specifications. Effectively,
  this helped us eliminate the threat of account takeover from phishing and
  leaked credentials.
author: 'Damien Trudel, Security'
date: 2019-08-15T13:00:00.000Z
image: /img/cds/yubikey-3.jpg
image-alt: A hand pushing their yubikey.
translationKey: yubikey-post
thumb: ''
processed: ''
---
I have fears; big, big fears. Fears of waking up in the morning and seeing the Canadian Digital Service’s cloud assets vandalized or destroyed because some bad actor got a hold of someone's credentials and decided to muck around. Hey, this fear is real and even the most conscientious of us are vulnerable.

But how does someone lose control of their credentials? Well, maybe somebody got your credentials because they watched you type them in, or maybe you’re guilty of reusing the same password everywhere (looking at you!) and that password was exposed in a data breach, or perhaps you just got good old fashioned phished. Either way, it’s known to happen and when it does it will be a big-time suck on your productivity. When this happens it can lead to data loss, or intellectual property theft, or maybe someone just silently manipulates all your incoming and outgoing communications, without you noticing. Maybe; maybe; maybe.

![A man in a red shirt with a lanyard on. Hanging from the lanyard is his ID and a security key.](/img/cds/yubikey-1.jpg)

And according to the [2019 Verizon Data Breach Investigation Report](https://enterprise.verizon.com/resources/reports/2019-data-breach-investigations-report.pdf), 29 per cent of all reported security incidents involved the use of stolen credentials. _So the big question; can we eliminate this threat in a pragmatic way? Yes we can._

## What we did

This is where I come in. First, our team did some research and quickly realized the best and easiest option was to purchase hardware-based security keys, like the ones in the photo below. _These keys support all the [FIDO2 specifications](https://fidoalliance.org/fido2/)._ The authentication process with these keys is as simple as touching a gold button on the key when prompted. So, what does that mean? When you sign in to your email, for example, you type in your password and hit **sign in**. The process doesn’t end there; you need another authentication factor to prove you’re the right person signing into your account. That’s where the hardware security keys come in. You insert the key into your device and press the golden button. Only you have this key and only this key will sign you in.

So in more technical terms, when that gold button gets pressed, a challenge-response exercise is initiated using public-key cryptography between the security key and the service provider. Behind the scenes, this effectively eliminates the threat of account takeover from phishing and leaked credentials.

![Three four different security keys lined up, one of which is on a set of keys.](/img/cds/yubikey-2.jpg)

We then rolled out two security keys to every employee allowing everyone to pick two types of keys that worked best for them. We also took the time to guide everyone through the process of integrating the security keys into their work and personal life. This one-on-one time was also used to have serious conversations about[password safety](https://www.canada.ca/en/government/system/digital-government/password-guidance.html), [software updates](https://cyber.gc.ca/en/patch-os-and-applications), and other [cyber hygiene](https://www.getcybersafe.gc.ca/) topics.

I'm happy to report that we've had zero reported account takeovers at CDS and using security keys has helped keep it that way. Stay tuned as we figure out how else we can leverage our security keys to pragmatically eliminate certain types of threats.

## You can do this too

If you dread the thought of cleaning up after an account takeover incident, I recommend taking a deeper look into how hardware-based security keys that support the FIDO2 specifications can help you return to those pre-cloud sleeping patterns.

Though we use hardware-based security keys, it may not be the best option for you. Before making any decisions we recommend reviewing [Google's recent research](https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html) on the effectiveness of two-factor authentication options. This fascinating research states that all attempts to take over an individuals account failed, if that user was exclusively using hardware based security keys. It's a great read.
