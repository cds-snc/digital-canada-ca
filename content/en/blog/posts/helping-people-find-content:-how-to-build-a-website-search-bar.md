---
layout: blog
title: 'Helping people find content: How to build a website search bar'
description: >-
  Web Devs: Learn how to implement a site-wide web search function using Lunr’s “stemming” feature. It makes website content easier to find / more accessible! 
author: 'Omar Tehsin, Development'
date: '2022-07-12T16:00:00.000Z'
image: https://de2an9clyit2x.cloudfront.net/blog_website_searchbar_0992ac5244.jpg
image-alt: Website search bar icon with text ‘Enter your search’.
thumb: https://de2an9clyit2x.cloudfront.net/small_blog_website_searchbar_0992ac5244.jpg
translationKey: blog-website-searchbar
---
*Here's a friendly heads-up to our readers - this is NOT our usual type of post. We've got a technical look at how search functionality can be added to a website. Web Devs, this one's for you!*

---

You log on to a new website. You have specific information you need to find quickly. You look for the magnifying glass icon. Where is the **search bar**? It's not there... What do you do? 

A great website is easy to navigate, offers clear content, and lets you access the information you are looking for in a few clicks. But what are you supposed to do if you’re not able to find that content easily? We can’t just expect you to click on every page, link or button on a website to find what you are looking for  — it’s contrary to one of our key values: accessibility.

When I joined the CDS web team as developer, a common issue was the need to find specific content that was relevant to both the team and website users. Initially, the plan was just to have the search bar for our [Blog section](https://digital.canada.ca/blog/). Then, we realized that making it site wide would allow users to search everything from job postings to reports, using their preferred keywords.

So we began coding the first iteration of the CDS website search bar!

## **Searching for solutions**

Since our website is built using a static site framework called [Hugo](https://gohugo.io/commands/hugo_server/), server-side solutions were not applicable (because the content lies within the website itself). 

In addition, we also wanted to adopt a search library that’s light and easy to implement. After some research and discussions with other developers, the choices were between [Fuse.js](https://fusejs.io/) and [Lunr.js](https://lunrjs.com/). We ultimately picked the latter because of a useful feature called “stemming”, which I will expand on later.

## **How we implemented our search function and how you can, too**

Here are the steps you can take to set up your search function: 

1. The first thing to do is update your configuration file (in this case, the “config.toml” or “config.yaml” file) in the root of your directory and add JSON as one of its output formats.

![Screenshot of configuration file in the root of CDS’s directory. JSON is added as an output format.](https://de2an9clyit2x.cloudfront.net/img1_blog_website_searchbar_5850c10f92.jpg) 

2. The next step is to create an index.json file in the root of your layouts folder, which will generate the [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) page data file. If we want to make our entire website searchable, we’re going to need to make everything in our content folder searchable.

![Screenshot of code for the index.json file.](https://de2an9clyit2x.cloudfront.net/img2_blog_website_searchbar_d303e02f95.jpg)

3.  Now, for the the main step, which is to create the Lunr search index — the fields included in the [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) are the ones we want to be searchable and that we’ll use to build an index. The variable “pagesIndex” will contain the JSON page data from index.json, and the variable “searchIndex” will contain the Lunr search index.

![Lines of code containing the Lunr search index variable.](https://de2an9clyit2x.cloudfront.net/img3_blog_website_searchbar_574e13f106.jpg)

The [Lunr convenience method](https://lunrjs.com/docs/lunr.html) configures and constructs a new lunar index. 

Some things to note:

* The index is “immutable”, meaning all documents that need to be searched need to be provided at this point. It is not possible to add or remove documents once the search index has been created.

* Within the index, all fields that need to be searchable are defined, meaning fields like “title”, “description”, and “content” are searchable in the search bar. These fields are also the JSON objects that are stored in our “pagesIndex.field”. Any content in “this.field” is searchable. So if, for example, we have two separate documents, one containing the word “policy” in its title and the other containing the same word in its description, both of these documents will be displayed in the search result when a user searches for the word “policy”.  

* Another thing to keep in mind is that the “this.ref” field is used as the identifier, or in other words, the URL for each of the pages, which can then be used to retrieve the content to construct the search result and render the HTML.

* Finally, each of the page objects is added to the Lunr search index.

## **Bringing our search bar to life**

After implementing the critical foundations of a search function, it’s important to determine how it’s displayed on a website, and how a user can interact with it. In our case, I created a modal window to display search results, which is triggered when a user clicks on the magnifying glass icon on the website’s main menu. 

The modal contains a text field that displays live search results as a user is typing. Our goal here was to help guide users as they enter and edit their keywords, while saving them time in searching for the results they want (rather than having the page reload with new search results). 

![A screenshot of the CDS website search bar, featuring “All Results” from available filters like Report, Blog, Accessibility and Other.](https://de2an9clyit2x.cloudfront.net/img4_blog_website_searchbar_734cac2360.jpg)

An important factor we can consider is how Lunr generates the “score” (or relevance) for each document. The score of a document is done using the [BM25](https://en.wikipedia.org/wiki/Okapi_BM25) algorithm, using factors such as boost, which is configurable. 

Basically, the more a search query occurs in a document, the higher its score, and the more it appears in the overall collection of documents, the lower its score. A document is also scored based on the significance of a query. For example, the keyword “Canada” may appear frequently in our collection so it is not as significant. However, if the keyword “data” does not appear as frequently, a document with multiple references to this query will be given a higher score.

One of Lunr’s advantages is the ability to reduce a word to its “stem” or root. For example, the word “research” would be a stemmed word, while variants such as “researching”, “researched”, and “researcher” all share the same stem. The benefit to this process is limiting the number of tokens in the search index and significantly reducing its size. This improves performance and allows for faster recall when performing a search.

Lunr also supports “wildcards” using an asterix (*) in the query, which is an [advanced search technique](https://apus.libanswers.com/faq/2235#:~:text=The%20wildcard%20is%20an%20advanced,specify%20any%20number%20of%20characters) that can be used to maximize search results in library databases.. For example, when typing “polic”, Lunr will automatically add a wildcard at the end of the search query and can return words such as “policy,” “police,” and “policies”. 

Similarly, I’ve also added the use of “fuzzy matching” to our search function, which allows it to identify non-exact matches of a user’s keywords. This is helpful if the spelling of a search term is unclear, or if we want to increase the number of search results that are returned. For example, a fuzzy match of the word “sun” can also return words such as “run”, “fun”, and “bun”. In this case, I set the editDistance variable to 1, which allows words to match if either adding, removing, changing or transposing a character in the word would lead to a match

## **Get in touch** 

I hope this blog post is helpful to anyone looking to implement a search function on their website!

Lunr can be a great fit when using a static website framework, such as Hugo or Gatsby, or if a website has a limited number of documents. The benefit of this client-side search tool is that it doesn’t require serverless functions such as AWS Lambda or Azure Functions, but rather, all the work takes place on the client’s browser.

If you’re interested in integrating similar search functionality frameworks into your website, we encourage you to check out [our code and documentation on Github](https://github.com/cds-snc/digital-canada-ca). And if you have any questions, thoughts or feedback, [I’d love to hear from you](mailto:omar.tehsin@tbs-sct.gc.ca).



