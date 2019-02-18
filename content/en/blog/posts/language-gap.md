---
title: Bridging the (language) gap - Open source en français
description: >-
  Modern technologies are powerful, but the tech world is notoriously unilingual
  English. Many open source tools don’t provide the multilingual control we
  need, like the ability to swap to a version of the content in context. So how
  do we bridge this gap to deliver modern services to Canadians?
author: 'Eva Demers-Brett, Developer'
date: '2018-10-03 09:00:00 -0400'
image: /img/cds/blog/blog-language-gap.jpg
image-alt: A French Poodle and an English Bulldog sitting in front of laptops.
translationKey: language-gap
thumb: /img/cds/blog/thumb/blog-language-gap.jpg
processed: 1550507384345
---

When choosing open source tools, one of the biggest obstacles we run into is language, or rather, a lack of the French language. Adapting an application to the local language is known as internationalisation, or [i18n](https://en.wikipedia.org/wiki/Internationalization_and_localization) for short. In Canada, we have the unique challenge of providing a robust, accessible experience in French and English, our official languages. Modern technologies are powerful, but the tech world is notoriously unilingual English. Many open source tools don’t provide the multilingual control we need, like the ability to swap to a version of the content in context. So how do we bridge this gap to deliver modern services to Canadians?

## Sometimes it’s easy

One of our recent projects, [Track web security compliance](https://cds-snc.github.io/track-web-security-compliance/), started life as a fork of 18F’s fantastic [Pulse](https://pulse.cio.gov/) project. Starting with a pre-existing code base sped up the development process, but came with its own challenges. One of those challenges was building in French functionality.

Thankfully, this wasn’t too difficult. Web pages for *Track Web* are generated using [Jinja](http://jinja.pocoo.org/docs/2.10/), a templating language for Flask applications. To toggle seamlessly between languages, we assigned each page a unique identifier to link the English and French versions. Then we built a language toggle that when clicked, rendered the page in the selected language with the translated URL.

*Track Web* also makes use of a jQuery plugin called [DataTables](https://datatables.net/) to display dynamic compliance information. By default, DataTables displays all table controls in English. But they also provide an [i18n plugin](https://datatables.net/plug-ins/i18n/) and a [French translation for all their components](https://datatables.net/plug-ins/i18n/French). This makes it easy to spin up a French version of a DataTables table.

## Sometimes… not so much

Unfortunately, providing i18n support seems to be the exception and not the norm in the open source world. Recently we’ve been exploring how to improve our own user experience managing the [CDS website](https://digital.canada.ca/). Built with the templating language [Jekyll](https://jekyllrb.com/), we made sure it met all the standards for delivering content in both official languages.  But our workflow requires new content to be in two separate language files, each with an identifier that the creator must memorize. Plus, we can’t test the language switching until we publish the pages. It can get complicated!

We’ve been researching content management systems (CMS) that we can attach to our existing tech stack to simplify the publishing process. The i18n requirements we identified included the ability to toggle between English and French when editing, and the ability to publish content in both languages simultaneously. We were unable to find an out of the box solution to meet both those needs, let alone the rest of our list. Basic requirements for those of us in the Government of Canada web world seem to be an afterthought everywhere else.

## So what can we do?

One thing’s for sure - we have work to do in the open source space regarding i18n, especially as we modernize services for Canadians. In some cases, it’s all about finding the right tool. In others, we have an opportunity to build and contribute our own i18n tools.

Do you have similar struggles? Have you found any great open source i18n tools? [Please share them with us](#contact-us-links)!

Oh and, sorry to the developer who went through the process to publish this post. We promise we’re working on it.


