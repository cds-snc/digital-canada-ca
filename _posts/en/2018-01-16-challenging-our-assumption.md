---
title: "Accessibility at CDS - Challenging our assumptions about ambient imagery"
description: "We recently received some feedback through our Github repository regarding the accessibility of the hero images we use on some pages of our website, including the blog posts."
author: Dave Samojlenko, Developer
date: 2018-01-16 09:00:00 -0400
image: blog-accessibility-2018.jpg
image-alt: "Keyboard with keys representing accessibility features"
lang: en
layout: cds/post
trans_url: "/2018/01/16/remettre-en-question"
---

We recently received some feedback through our [Github repository](https://github.com/cds-snc/digital-canada-ca) regarding the accessibility of the "hero" images we use on some pages of our website, including the blog posts.

When we originally designed the site, we considered these images as "decorative" or "ambient" in nature, and decided they were not intended to convey meaning. As a result, we thought they did not need to be described to visually impaired users through the use of alternative text.

After this issue was raised, we had some internal discussions, and we realized we needed to revisit our earlier thinking. In the case of blog posts, the images can at times contribute context to the story. For example, the post [Designing for Canada](/2017/09/21/designing-for-canada/), includes a picture of the author, which is arguably contextual information.

Another example of an image adding some context is the post [We're all in this together](/2017/11/20/in-this-together/) by guest blogger, Hillary Hartley, Chief Digital Officer of the Government of Ontario. In this case, the accompanying image is of the Ontario Digital Service team.

Some more challenging cases were presented in posts like [Picking our projects](/2017/08/24/picking-our-projects/). The accompanying photo in this case is of an assortment of posters we have around the office. In this case, the image contains text, but is it just an "ambient" image? Does it convey additional information, or contribute to the message?

There is debate about the need for alternative text in a few of these situations. Some would make the case that providing alternative text for all images, even ambient or decorative ones, creates noise and clutter for screen readers. [Others might respond](https://tink.uk/text-descriptions-emotion-rich-images/) that what one considers "eye candy" may be another's emotional link to a website.

[Some informal user testing](http://www.davidmacd.com/blog/what-is-pure-decoration-alt-text-in-wcag.html) has found that users have shown a preference for a brief alternative text for ambient and decorative images, unless that image is purely decorative, like a gradient or spacer. In the end, we have decided to add alternative text for these images. Even though there seems to be a bit of a grey area in regards to ambient or decorative images, we feel that in this case, we're on the side of having them.

Frequently the decisions we make in supporting accessibility can be open to interpretation. Where exactly is the line between decorative, ambient, and informative images? No automated testing process or tool will be able to make that distinction for you. You have to be deliberative and open to challenging your assumptions, and willing to change your mind.

While we'd like to get it right the first time, at CDS we believe that **accessibility is a continuous process of listening, evaluating, iterating, and learning.** The whole team needs to participate, broaden our knowledge and skills over time, and share and learn from our mistakes.

There are so many great resources on the web for learning about accessibility. This issue we've been discussing may seem minor to some, but we learned a lot from others in researching the best solution, and we feel there is value in having this discussion, even if the solution should have been obvious. Some great resources we've found along our way include:

* [18F Accessiblity Guide](https://accessibility.18f.gov/)
* [24 Accessibility](https://www.24a11y.com/)
* [Bien utiliser le texte alternatif – Tout est dans le contexte](http://www.pompage.net/traduction/Bien-utiliser-le-texte-alternatif#contexte) (in French)
* [CanAdapt ](http://www.davidmacd.com/index.html#blog) blog posts by WCAG team member David MacDonald, in particular [Alternate text for CSS background images](http://www.davidmacd.com/blog/alternate-text-for-css-background-images.html) and [When can a web author use null alt text](http://www.davidmacd.com/blog/what-is-pure-decoration-alt-text-in-wcag.html)
* [Des images accessibles](https://openweb.eu.org/articles/accessibilite_images) (in French)
* [GDS Accessibility Blog](https://accessibility.blog.gov.uk/)

We will continue to blog about accessibility and would love to [hear from you](mailto:cds-snc@tbs-sct.gc.ca) if you have comments, topic suggestions, or ways to improve the accessibility of any of our projects.