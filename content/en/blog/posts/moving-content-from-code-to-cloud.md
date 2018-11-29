---
layout: blog
title: Moving content from code to cloud
description: >-
  Why we chose to move our content from code to cloud, and how that made it
  easier for everyone to make simple changes without a developer.
author: 'Steve Astels and Stephen McMurtry, Developers'
date: 2018-12-05T02:30:00.000Z
image: /img/cds/magnificent-cloud.jpg
image-alt: A magnificent cloud rises above the trees.
translationKey: from-code-to-cloud
---
At CDS, we’re currently working on a [web app](https://github.com/cds-snc/vac-benefits-directory) with Veterans Affairs Canada (VAC). The app will help Veterans and their families find benefits and programs that are relevant to them. That means it needs to keep track of a lot of content: the user interface (UI) text, titles and one-line descriptions of the benefits, multiple choice questions, tags associated with the benefits, VAC office addresses, and more, none of which was personal data or information. And, of course, all this text is in English and French.

Initially, we stored this text right in our source code, which meant that any change in content required a developer to talk to design, make the change, and create a pull request (PR). As we ran more user tests, the content changes kept coming. We found ourselves spending more and more time just changing words in the app, rather than doing the fun work of building new features. We had to do something.

## To the Cloud!
We decided to move all of this content to a database in the cloud. This would mean that when content owners were adding new benefits or tweaking the language they could do so without needing to do a PR. We chose [Airtable](https://airtable.com/) for this purpose.

Airtable is similar to Google Sheets but with an easier to use [API](https://en.wikipedia.org/wiki/Application_programming_interface) and really awesome documentation and examples. Our app already contained a [server](https://github.com/cds-snc/vac-benefits-directory/blob/master/server.js), so we added code to it to fetch the data from Airtable every hour, cache it, and make it available for everyone to see.

This worked really well. Our designers were refining the content on their own schedule, as quickly as they could compose it, without developers having to lift a finger.

We still had a problem though. Static app content (like our headers and buttons) still lived in the source code. User testing was starting to focus more on refining this content to improve the user experience. We were doing content PRs again.

So, we moved the rest of this app content to the cloud! We added a general “translations” sheet to our Airtable base. Each row contains a key that gets referenced in our source code, as well as the English and French display text. And we added a hidden “refresh cache” button that allows content editors to see changes instantly in the app.

Not only are the developers happy, but designers and content owners, at both CDS and VAC, are now able to change content as needed, quickly and easily.
