---
layout: blog
title: Making information easy to see and hear
description: >-
  Considering how different people will use your service can help you make it
  better for everyone, which is pretty rad. On the COVID Alert Portal, we
  recently released ‘recovery codes’ for healthcare workers, and learned some
  interesting things about screen readers and accessibility along the way. Read
  on for a practical example of accessible design. 
author: 'Paul Craig, Development '
date: 2021-02-04T14:51:35.505Z
image: /img/cds/screenreader-blog-banner.jpg
image-alt: >-
  A person using a screen reader to hear important information from their
  computer.
translationKey: blog-screenreader-stuff
thumb: /img/cds/thumbnails/screenreader-blog-banner.jpg
processed: 1612450943845
---
## COVID Alert and backup codes

Working with Health Canada, our team at the Canadian Digital Service (CDS) builds and runs the COVID Alert service, which includes — yes, the app — but also the [COVID Alert portal](https://digital.canada.ca/2020/09/03/meeting-the-needs-of-healthcare-authorities-to-roll-out-covid-alert-across-canada/). 

Up until recently, to access the portal, healthcare workers needed their email address and password to login, but also a cell phone to receive a code for two-factor authentication (2FA). Once logged in, healthcare workers could give out one-time keys to people who tested positive for COVID-19. It’s by entering their key into the app, that users can alert others of potential exposures.

Exposure apps like COVID Alert are most effective the sooner the keys can be entered. So if a healthcare worker can’t receive a code via text message because they have a weak cell signal, or don’t have a cell phone at all, we may lose a chance to notify Canadians who have been exposed. 

To address this, we introduced backup codes as an alternative verification method to text message 2FA. Healthcare workers are now able to generate a series of single-use recovery codes (think ‘scratch cards’) to log in if other methods fail. 

## The importance of accessibility

At CDS, we [prioritize accessible development](https://digital.canada.ca/2020/10/02/building-an-effective-exposure-notification-service-like-covid-alert/) to make sure we build systems that are resilient, intuitive, and flexible enough to meet the needs of everyone who uses them. Part of this is accommodating for different preferences. 

Not everyone uses the internet in the same way: some people use laptops, others use their Apple Watch, still others use the inbuilt browser on their XBOX. Not everyone *looks* at the internet either: some people use Alexa, others use Edge speech-to-text or other screen readers. It’s no good building cool stuff that people can’t make use of, so we do our best to meet people where they are.

In the case of the recovery codes, it’s super important that they are understood the first time. If someone misunderstands or mistypes a code, it may lead to a missed opportunity to alert Canadians about COVID-19 exposures. Not only does it matter that people can read them, but also that screen readers can communicate them in a way that’s easy to understand. So, this raises an interesting question: **what does a recovery code sound like?**

## Steal like an artist (don’t reinvent the wheel)

To start off, I looked at recovery codes as offered by Google and GitHub. Both businesses are similar to government in important ways: they are large organizations, they have strict security requirements, they serve a lot of users, and they both start with “G”. Looking at their implementation would help me with my approach.

To get a little bit technical, most of what you see on the internet is text in a document, a bit like Microsoft Word. In Word, you typically see page titles in a large font size at the top of a page. In an HTML page, you “tag” content to indicate what it is. Page titles go in “h1” tags, paragraphs go in “p” tags, lists and tables are tagged, etc.. Screen readers use this information to make sense of content for someone who isn’t looking at the screen. So, for example, screen readers announce the “h1” as the title of the page. When items are in a list, they will announce how long the list is. If they find a button, they will say it’s a button. Formatting helps screen readers, and ultimately the people relying on them, make sense of the content. 

I was interested to see how both Google and Github’s recovery codes looked and how they sounded to a screen reader. 

### Visually

<table>
  <tbody>
      <tr>
          <td>
          <h4 class="bolded">Google</h4>
           </td>
          <td>
          <h4 class="bolded">Github</h4>
          </td>
      </tr>
      <tr>
          <td>
          <ul>
             <li>A list of checkboxes</li>
             <li>Characters are all numbers</li>
          </ul>
          <img src="/img/cds/screenreader-blog-google.jpg" alt="A list of Google’s recovery codes made up of 8 random numbers.">
           </td>
         <td>
          <ul>
             <li>A list of bullet points</li>
             <li>Characters are hexadecimal (mix of numbers and the first six letters of the alphabet a,b,c,d,e,f”)</li>
          </ul>
          <img src="/img/cds/screenreader-blog-github.jpg" alt="A list of Github’s recovery codes made up of 10 random letters and numbers.">
           </td>
      </tr>
  </tbody>
  </table>

Looking at both, there are strong similarities between them:

* They use structured layouts: tables and lists are announced by screen readers.
* They use restricted character sets: not all letters are allowed, no special characters. So, it means they won't have problems distinguishing "1" from "L", or "0" from "O", for example.
* Monospaced fonts: letterforms that are all the same width, so the codes all take up the same amount of space.

### Audibly

So while they looked pretty good, there were a few noticeable bugs when using VoiceOver on MacOS, which is the screen reader provided by Apple:

#### Unintended spoken codes

An issue that was unique to Google was VoiceOver reads the codes as two whole numbers. For example, for the code “1234 5678”, VoiceOver will read that as “one thousand, two hundred, thirty-four. Five thousand, six hundred, seventy-eight”. Not the biggest problem, but it does reduce the clarity. For example, when you tell someone your phone number, you don’t usually say “four billion, one hundred and thirty five million, etc.” it would be technically correct but hard for the other person to remember.

#### Codes vs words

Our recovery codes for the COVID Alert Portal are 8 random characters, including all numbers and letters. Listening to several randomly-generated codes, they mostly sounded fine, but eventually I noticed something odd: most codes were read out character by character (this is what we want), but not all of them were. Sometimes, VoiceOver would read a code as a word, rendering it all but indecipherable. 

After trying a few more examples, I learned something interesting about VoiceOver. Codes are read as words when they had both: 

* No numbers
* A vowel

If VoiceOver sees a string like “C4T5”, it will read the characters one at a time (eg, “C” “4” “T” “5”). If it sees a string like “CTTS”, it will do the same (eg, “C” “T” “T” “S”). 

However, if it sees a string “CATS”, it reads “cats”, like the animal. Except instead of an English (or French) word, it is usually reading nonsense words like “FETV”, “BAFR” or “YEGT”. 

## Read it right

Okay, so now that we know this, what do we do about it? Codes are randomly generated, so we can’t predict what’s going to show up. Essentially, we need to handle the same information in different ways: in a way that’s clear visually, and a different way when it’s being read aloud.

When looking at the codes, we want to group characters in small groups for easy scanning, whereas we always want screen readers to announce them one character at a time. To achieve this, we actually display the code two different ways: 

1. On the screen we show “FETV  BAFR”, but hide this from screen readers.
2. For screen readers, we show them “F E T V B A F R”, which is hidden visually.

That’s the simplified version. [Reach out](https://twitter.com/pcraig3) if you’re interested in more details.

## Hooray! We solved accessibility!

Haha, of course not. There’s a lot of variation in experience depending on the screen reader software, the browsers, and the operating systems that people are using. So using VoiceOver with Chrome on MacOS is a different experience than using it with Safari on your iPhone. And they both would be different than using Jaws with Internet Explorer on Windows. And the list goes on.

It isn’t possible to test with every single screen reader on every platform/browser combo that there is. However, testing as you go with the tools at your disposal is going to lead to better results than never testing at all. 

Considering accessibility as you build, rather than avoiding it for fear of making a mistake, will lead to better outcomes for everyone. There are always going to be edge cases, but the point is to consider accessibility and test as you go to see if your site reads as well as it looks. As we saw, not even Google or Github are perfect. 

Building services is great. But making sure that those services are accessible and available? That’s why we do this stuff.

