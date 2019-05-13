---
type: roadmap
layout: default
url: /roadmap-2025/
title: "Delivering digital services by 2025"
description: "Canadians expect digital services that reflect the Internet era. Concrete, bold actions will help us meet those expectations. We look forward to developing this roadmap together with all of you."
dateUpdated: "2019-05-13"
dateUpdatedString: "May 13, 2019"
versionLabel: "v0.1"
aliases: [/feuille-de-route-2025/]
---

In September 2018, the Digital Industries Table — part of Canada’s Economic Strategy Tables and made up of a dozen Canadian business leaders — published a report titled *[The Innovation and Competitiveness Imperative: Seizing Opportunities for Growth](https://www.ic.gc.ca/eic/site/098.nsf/vwapj/ISEDC_Digital_Industries.pdf/$FILE/ISEDC_Digital_Industries.pdf)*. The report pointedly issued this challenge to the Government of Canada:

> **Digitize all public-facing government services so they are accessible by web and mobile phone and available behind a unified login system by 2025.**

The Table argued: “Every government service needs to be delivered online to eliminate the need for in-person visits to government offices and the printing, scanning, and mailing of government documents. The way our government is currently delivering services to Canadians is no longer appropriate for our times.”

This challenge called out to us. Launched in 2017, the mandate of the Canadian Digital Service (CDS) is to help government improve how it delivers services, using modern approaches and tools to reduce the risk of product failure, lower costs, ensure users’ privacy and system security, and, above all, improve people’s lives by putting their needs and concerns front and centre. We partner with departments across the federal government to [design and build public-facing services together](https://digital.canada.ca/products/), creating demonstrations of, and resources that help enable, [digital-first delivery in government](https://digital.canada.ca/blog/) to meet Canadians’ modern expectations that services be easy to use, fast, inclusive, reliable, safe, and transparent. Our team includes software developers, designers, researchers, product managers, and security and reliability engineers with skill sets that remain underrepresented in the federal government. [Several of us](https://digital.canada.ca/our-team/) have done this work before on digital service teams in the [United States](https://18f.gsa.gov/) and the [United Kingdom](https://www.gov.uk/government/organisations/government-digital-service/about).

The launch of CDS was an acknowledgement that [citizen expectations of government service delivery have changed](https://digital.canada.ca/beginning-the-conversation/full-report/). The Table specifically challenged government to deliver “end-to-end digital services.” Many government services are partially “online” — paper forms are available for download or have been converted to web forms — but very few are truly digital. Putting a service online is only part of making it digital, which means — to use [Tom Loosemore’s famous definition](https://definitionofdigital.com/) — “applying the culture, processes, business models and technologies of the Internet era to respond to people’s raised expectations.”

As the Digital Industries report highlights, many Government of Canada services still require paper documents or in-person visits to government offices; some are difficult or impossible to access on the mobile devices that are many Canadians’ primary or only form of Internet access; and behind the scenes, even online form submissions must, for some services, be printed out to be processed manually. Those and other outdated processes and systems drain limited IT resources into “keeping the lights on,” making it more difficult to incrementally improve service delivery or the underlying technology and practices that dictate their velocity. And partially but incompletely digitizing processes can frustrate users and create more rather than less burden on processing centres, call centres and other channels. Well-designed end-to-end digital services bring performance and reliability improvements, empower staff to spend less time on navigating process and more on serving the public, and provide the government experience people deserve and expect — whether they choose to interact with government online, by phone, or in person.

**In November 2018, [CDS accepted the Table’s challenge](https://twitter.com/kathleenmonk/status/1060576882528268288)** to consider: What would it take for the Government of Canada to deliver its public-facing services digitally by 2025?

CDS does not have the authority to decide on behalf of government to make this a priority. But part of CDS’s mandate is to provide advice to government about digital service delivery. In that spirit, we offer the beginning of a roadmap for how the Government of Canada could rise to the Table’s challenge. The steps below reflect how we think the government could start this year, based on our experiences here and internationally, and on hundreds of conversations at all levels of the Government of Canada.

Public servants across government are working to improve digital service delivery, but efforts to date have not been enough. We need to put the wind at their backs. Canadians expect digital services that reflect the Internet era. Concrete, bold actions will help us meet those expectations. We look forward to developing this roadmap together with all of you.

{{% roadmap/div class="no-page-break" %}}

## 1\. Prioritize, empower, and measure digital service development.

**First, choose which services to digitize end-to-end by 2025.** The Government of Canada delivers hundreds of services. We don’t believe all of them can, or even should, be fully digitized by 2025. Government should choose a meaningful set of target services.

{{% /roadmap/div %}}

Annual transaction volume is an imperfect but reasonable place to start, as a proxy for how many people rely on a service and the impact that service improvements might have. Of the services listed in the [Government of Canada Service Inventory](https://open.canada.ca/data/en/dataset/3ac0d080-6149-499a-8b06-7ce5f00ec56c), about 20 involve more than one million transactions per year, and fewer than 50 involve more than 100,000 transactions — far less than 1% of Canada’s population — per year. A few examples of services that affect hundreds of thousands or millions of people annually include filing a tax return, applying for a passport, being processed at a border, receiving Employment Insurance benefits, and receiving Old Age Security benefits. At the other end of the spectrum, the very lowest-volume services are less likely to be suitable for cost-effective digitization. (For example, according to the Service Inventory, only two applications for Duty Free Shop Licences were received in 2017-18.)

Together, the services involving hundreds of thousands or millions of transactions annually account for the vast majority of people’s interactions with the Government of Canada, and digitizing them is likely to yield the most value. There may be other services that should “jump the queue” for various reasons, for example, to make services to vulnerable populations more accessible, to enhance security, or to help Canadian businesses.

**Second, mandate blameless assessments using the [Government of Canada Digital Standards](https://www.canada.ca/en/government/publicservice/modernizing/government-canada-digital-standards.html), shared openly.** Without assessment, it’s impossible to measure progress against the objective and the growth of a delivery team, and teams miss important opportunities to hear independent feedback and course-correct. A culture of blameless, genuine review — not as box-checking, compliance, or [buzzword theatre](https://media.defense.gov/2018/Oct/09/2002049591/-1/-1/0/DIB_DETECTING_AGILE_BS_2018.10.05.PDF) exercises — allows people to give detailed, candid accounts [without fear of punishment or retribution](https://codeascraft.com/2012/05/22/blameless-postmortems/). Require independent assessments for each service to transition between delivery phases: from [discovery](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) to closed [alpha](https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works), from alpha to public [beta](https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works), and from beta to officially [live](https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works). Make the necessary resources available to delivery teams to obtain timely independent assessments. Assessments need not be burdensome; they typically take only a few hours of the team’s time.

**Then, for each target service:**

{{% roadmap/div class="clean-list" %}}

* **Assign a single responsible owner** whose responsibility is to digitize that service, end-to-end. Responsibility for service delivery in many departments today remains diffuse, with separate branches responsible for technology, operations, service, customer experience, and communications. Those silos often have their own, divergent priorities, responsibilities and pressures. Without an assigned owner, the work to coordinate across those silos and stay aligned and focused on the common goal is unlikely to succeed. For departments that have a Chief Digital Officer or Chief Services Officer — a model we strongly endorse — that office is likely to be the ideal place to situate these owners and their teams.

* **Empower the service owner.** The service owner doesn’t need to be a technology expert, but they need the resources, delegated authorities, and executive commitment necessary to deliver a digital service. This especially includes the ability to assemble a cross-functional team with skill sets in software development, design research, experience design, policy, program, and communications; a product manager that is empowered to own the vision for the service; and other specialized skills, including legal counsel and procurement, as required.

* **Empower the service delivery team.** The team needs the authority and autonomy to access necessary systems and data; to use appropriate design, development and communications tools; to set their own processes, protected from traditional internal and external gatekeeping; to practice continuous delivery, instead of releasing code on a predetermined schedule; and, per the Digital Standards, to [work in the open](https://gds.blog.gov.uk/2017/09/04/the-benefits-of-coding-in-the-open/) from Day 1. The team needs direct and unfettered access to users of their service, on an ongoing basis, and those users’ needs should [continuously drive service improvements](https://www.ontario.ca/document/start-users-deliver-together/sparking-new-vision). In our experience, it’s essential that the team have these authorities from the beginning, in writing, to ensure shared understanding and executive support to overcome the many frictions that can slow and stall progress later.

* **Set deadlines for the key indicators of early progress.** These include at minimum: designating a service owner, obtaining needed authorities, assembling the team, starting discovery, identifying outcome criteria, and collecting baseline metrics.

* **Identify outcome criteria and collect baseline metrics.** The Digital Standards are a useful set of criteria to assess a team’s adoption of modern service design and delivery practices. Evaluating the success of a digital service also requires complementary outcome criteria: are users experiencing an end-to-end service that is easy to use, fast, inclusive, reliable, safe, and transparent? It’s also important to assess whether the systems behind the service are built to be [flexible and interoperable by design](https://fcw.com/blogs/lectern/2017/05/no-more-systems-integrators.aspx). These outcome criteria should be based on design research and shared openly, throughout the design and delivery process. Baseline service metrics should be gathered at the outset to make it possible to measure the value and impact of digitizing the service. These metrics should include, by default, whether or not the service is digital from end-to-end, as well as service-specific data such as time to first contact or response, total time to final service delivery, user satisfaction, and cost to operate per transaction.

* **Publish progress against the challenge, openly and continuously.** Candid, accurate, and public progress reporting is important to establish shared understandings of what’s working and what’s not, and for ensuring that stalled teams get the help they need. A dashboard for observable progress could be as simple as a list of each target service and whether or not it has been determined by assessment to be digitized end-to-end yet.

{{% /roadmap/div %}}

{{% roadmap/div class="no-page-break" %}}

## 2\. Invest in developing common services and resources.

**To accelerate the service delivery teams’ progress, commit as a government to providing them with well-designed common services, components, and resources that meet their development needs.** As departments cultivate digital service teams, those teams need to focus their development efforts on the layers and components of their services most in need of customized solutions. Success criteria, assessment resources, and dashboards are not all that these teams need from the centre to succeed.

{{% /roadmap/div %}}

[Government as](https://public.digital/2018/09/25/making-government-as-a-platform-real/) [a platform](https://www.oreilly.com/library/view/open-government/9781449381936/ch02.html) is [working](https://www.gov.uk/service-toolkit#gov-uk-services) [elsewhere](https://18f.gsa.gov/2018/03/27/four-benefits-to-using-the-full-TTS-tech-stack/). Service delivery would be improved and accelerated by, for example, a flexible common design system; pre-assessed, quickly and easily utilizable hosting and deployment infrastructure and tools, including continuous monitoring and automated compliance verification tools; and perhaps most importantly, a common sign-in system and a digital identity regimen that enables users to choose not to maintain separate login credentials and verify their identity separately for every service.

**These should be delivered by dedicated product teams** with the same complement of design and development skills — and authorities and responsibilities — as the service delivery teams above. Direct them to be responsible to, and responsive to, the service delivery teams’ ongoing needs. (Some work in this vein is already part of CDS’s mandate.) Their products and services should be adopted by the departments’ service delivery teams not as a result of enforced purchase cost efficiency or conformity, but (only) if and when evidence demonstrates they will better meet users’ and service delivery teams’ needs than department-built or procured alternatives.

{{% roadmap/div class="no-page-break" %}}

## 3\. Remove obstacles to digital service delivery.

A well-intentioned but complex and expansive ecosystem of government policies, processes and habits hamper digital service delivery. The companies and organizations that are defining modern expectations for products and services are [relentlessly focused on their users](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs). A focus on user needs and an environment that allows for continuous improvement are two key pieces of a feedback loop that lets organizations build services that meet and exceed people’s expectations.

{{% /roadmap/div %}}

To meet the Table’s challenge, it will not be sufficient to “tweak the settings” of government. In this document we’ve attempted to start with how to deliver results and then contemplate institutional constraints, rather than vice versa. Our friends in the [United Kingdom](https://mikebracken.com/blog/the-strategy-is-delivery-again/) and the [United States](https://www.codeforamerica.org/deliverydriven) have written at length about the necessity and impact of this inversion, and it is a primary inspiration for the existence of CDS.

People across the federal government have been working to address these obstacles, but more progress would be needed to achieve the Table’s goal:

{{% roadmap/div class="clean-list" %}}

* **Make cloud services easier to obtain and use.** While other governments have made significant strides toward moving their applications and development to cloud-based infrastructure and platforms, cloud adoption and migration have been slower for much of the Government of Canada. Continuing to use government’s own data centres remains the easiest or only choice for many teams due to financial incentives, procurement uncertainty, and other factors. (For example, data centre services are generally provided to departments without additional costs, but cloud services must be paid for from departmental budgets.) A variety of infrastructure and platform offerings from cloud providers are better, less expensive, more secure, and improving at a pace government cannot match. Departments should be allowed and supported to purchase and use them.

* **Better align HR policy to digital service delivery.** Current job classifications don’t yet include important skills like design research, service design, and product management. The existing framework also doesn’t fully recognize the fluidity with which many move between these descriptions (nor the high value teams place on such staff), and often only allows promotion into upper salary bands for people who become managers. This sometimes squeezes out invaluable, high-performing practitioners, and their accumulated institutional knowledge. Finally, current policies and practices that cluster employees organizationally by classification (e.g., developers only work in the IT group, a policy person can only manage other policy people) may need to be revisited to enable the formation of multidisciplinary teams that are the essential unit of digital delivery.

* **Ensure access to appropriate tools and resources for staff.** A core tenet of [continuous improvement](https://en.wikipedia.org/wiki/Kaizen) is empowering everyone on the team. That empowerment is also an important signal for public service recruitment and retention. Digital service delivery teams — all public servants, really — need access to the software, online tools, and [modern hardware](https://digital.canada.ca/2018/06/27/tools-to-do-good-work/) that enable them to do their best work and create the most value for our taxpayer dollars. This includes Internet service that is reliable and [doesn’t unduly restrict access to those tools](https://open.canada.ca/en/blog/enabling-gcdigital-pragmatic-security).

* **Adopt and enable continuous delivery practices.** Practicing [DevOps](https://aws.amazon.com/devops/what-is-devops/) and [continuous delivery](https://continuousdelivery.com/) is foundational to modern service delivery. Many government systems only make non-emergency updates two or four times per year. The most popular online services you use every day make hundreds of changes every day. Service delivery teams in government need to be able to do the same. This requires significant practice and institutional changes, including: removing silos between application development and infrastructure teams, adopting automated testing and continuous integration tools, and ensuring departmental teams have full access to their own production infrastructure.

* **Remove waterfall project gating requirements** that impose significant overhead costs and undermine agile approaches in favor of the assessment model described above. The processes governing the funding and approval of IT projects have not been sufficiently adapted to how agile product teams operate and succeed.

* **Develop alternative means to fund agile development of services.** Rather than funding and approving entire projects before iterative delivery (and learning) begins, create lightweight, rolling means to fund projects incrementally as service delivery teams research, design, build, and continuously improve their products.

{{% /roadmap/div %}}

To enable digital service delivery, we must also:

* **Push harder to overcome ongoing reluctance and resistance to using and publishing open source software code**, despite favourable federal policy.
    
* **Streamline slow, manual privacy and security assessment processes** in favour of continuous monitoring and automated compliance checking where practicable.
    
* **Invest in developing under-represented technical skill sets** that reflect modern approaches to software development and building for an API-driven Internet.
    
* **Lift restrictions on fast, simple purchasing** (e.g., via acquisition card) for low-dollar software-as-a-service tools.


Without addressing these roadblocks, efforts to bring digital ways of working into government will remain significantly hampered. Better public-facing digital services can only be achieved by integrating digital methods into the everyday work of public servants.

{{% roadmap/div class="no-page-break" %}}

## 4\. Measure what’s working before planning what’s next.

We don’t know yet what the second year should look like. The Table’s challenge requires different ways of working than government is accustomed to. To set overly specific multi-year milestones now would not only be an exercise in guesswork; it would likely lock us into bad paths, wasting money and time. Learning and adapting quickly are essential to service development. We don’t know enough yet about the opportunities and obstacles in front of us. We won’t know until we begin. [This isn’t chess; it’s gardening](https://www.forbes.com/sites/chunkamui/2016/07/14/to-nurture-innovation-lead-like-a-gardener-not-napoleon-or-kasparov/#3c9ff0503d83). Successful initiatives have sometimes been the result of a [fragile combination](https://ppforum.ca/publications/governance-in-the-digital-age/) of leaders’ support, one-off circumstances, and individual efforts, but we know this: we can empower teams across the public service to succeed at scale, if we let ourselves.

{{% /roadmap/div %}}

At CDS, we’re grateful to partner with fellow public servants who are passionate about delivering human-centred services. Helping these teams deliver — and helping departments create more teams empowered to design, build and deliver services — is rewarding and inspiring. We know this isn’t a problem to be solved by a single organization or department; it’s a problem for all of us to tackle together. We look forward to a great conversation on how to empower public servants to deliver an end-to-end digital government worthy of the Canada it serves.

{{% roadmap/div class="roadmap-footer" %}}

**Share your thoughts!** This document is a jumping-off point, not a landing. We’d love your feedback via <a href="mailto:cds-snc@tbs-sct.gc.ca" onclick="ga('send', 'event', 'roadmap-en', 'outbound', 'email');">email</a>, <a href="https://www.linkedin.com/company/cds-snc" onclick="ga('send', 'event', 'roadmap-en', 'outbound', 'linkedin');">LinkedIn</a>, or <a href="https://twitter.com/cds_gc" onclick="ga('send', 'event', 'roadmap-en', 'outbound', 'twitter');">Twitter</a>.

{{% /roadmap/div %}}
