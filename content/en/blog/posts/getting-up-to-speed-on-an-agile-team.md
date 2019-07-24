---
title: '0-100 kilometres per hour: getting up to speed on an agile team'
description: >-
  Coming into a new environment, given the right setup, can be a smooth ramp up
  and a quick transition into being productive without causing a lot of friction
  and slowdowns for the existing team.
author: 'Tim Arney, Developer'
date: '2018-10-16 09:00:00 -0400'
image: /img/cds/blog-up-to-speed.jpg
image-alt: Car dashboard showing speedometer.
translationKey: getting-up-to-speed
thumb: /img/cds/thumbnails/blog-up-to-speed.jpg
processed: 1550672961704
---

Driving someone else's vehicle can sometimes feel a little off. Mirrors need to be adjusted, seats repositioned, gauges moved to your comfort zone. It's not your car, but you still have a general sense of where things should be and roughly how they should work. Joining a new team should be the same. Walking in, you should be able to get a sense of how things work fairly quickly.  Joining a new team shouldn’t feel like getting into a helicopter with no training and being asked to fly it. 

Now, what if the car is already driving? This is kind of how it feels when onboarding into a product team mid-stream. As a new developer, you can’t really slow down the car, because new features are going to keep piling up behind you. Joining a team is hard, from not being familiar with people's roles to not having context around a product and the decisions that have been made to date. Couple that with needing to get up to speed in general: passwords, devices, meetings, paperwork and more paperwork. It can be quite overwhelming. 

I remember getting a tour of the office and trying to remember all the names. [The team page](/meet-the-team/) came in handy, as I could see who I’d be working with and put a face to the name. CDS is broken down into product delivery teams, fewer names to remember all at once, so that helped as well. Product teams sit together; designers, researchers, product managers and developers all collaborate in a shared space.

At CDS, we work in the open and with modern tooling, using tools like Trello and Slack to communicate. Finding out that the team was working in an agile fashion, and that all the source code for the project was on Github, was a bonus. I had already been working on and with open source code so the flow of committing code and merging pull requests was a natural fit. All in all, this way of working meant I could walk in the door and be able to contribute in a meaningful way. Using familiar tools, software, and hardware definitely made me feel more at home in a new environment. In turn, this cut the transition time from starting to committing code.

As a developer, there was also the need to get up to speed with the project’s code base.  I’ve worked with lots of custom code before, sometimes written by a developer who is no longer at a company. Inheriting code like that means it’s often a time-consuming process to figure out what’s going on. Here, the tech stack I was walking into was [Node.js](https://nodejs.org) and [Express](http://expressjs.com/) based. [React](https://reactjs.org) and [Razzle JS](https://github.com/jaredpalmer/razzle) had been chosen along with libraries such as [Final Form](https://github.com/final-form/react-final-form) and [React Day Picker](http://react-day-picker.js.org). These were all things I had either previously used or had heard of outside of CDS. Favouring open source libraries has many advantages. It’s generally portable and can be reused from project to project. Widely-used open source libraries are typically well-documented. This made it easier to get started.

I knew when I started that I wasn't going to understand all the inner workings of the project for a while, but I could at least hit the ground running. I wanted to get involved and pitch in as early as I could. Taking on tasks helps speed up the learning curve versus trying to learn everything all at once. For the most part, until you’re doing something meaningful with parts of a codebase, it’s hard to really understand how the entire codebase truly functions. React lends itself to this, building out apps using components, it’s kind of like putting lego blocks together. You can start coding on a small piece of the system without having to worry about the rest of the setup right away.

Teams at CDS work in an agile fashion and tasks are broken out into sprints. The project I was working on mapped tasks out to a Trello board. Being new, this was helpful as I could review the board and see what was being worked on and by whom. This was nice as I could get a rough idea of what needed to be done.

At this point, things fell into place rather quickly. The product I was working on was in Alpha at the time, but it was quickly being iterated on based on testing with users. Time to jump in. 

My first task would be to make the application’s confirmation email dynamic and fully functional. Working on this part of the code was nice as it had fairly isolated functionality. It was a structured task with a clear goal: receive the post data from the app, format the data into an email template, and send the data. Essentially, I got to work with all the data the app was producing without touching any of the existing app code outside of a single API endpoint. With a task in hand, a general idea of how things functioned, and a clear runway, I was able to make some solid progress fairly quickly and ended up with a [pull request](https://github.com/cds-snc/ircc-rescheduler/pull/171) merged within a couple of days of starting.

I think this says a lot about working in the open and agile processes. Coming into a new environment, given the right setup, can be a smooth ramp up and a quick transition into being productive without causing a lot of friction and slowdowns for the existing team.  

Jump on the on-ramp, get up to speed, and off you go. You can learn to fly the helicopter once you understand all the controls better.
