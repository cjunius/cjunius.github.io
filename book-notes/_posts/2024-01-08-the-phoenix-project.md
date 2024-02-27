---
layout: post
title: The Phoenix Project by Gene Kim
---

[Brian’s Notes](https://www.briansnotes.io/book/the-phoenix-project/)

### Quotes:

> “you can’t achieve the strategic until you’ve mastered the tactical”

> “improving daily work is even more important than doing daily work”

> “In any system of work, the theoretical ideal is single-piece flow, which maximizes throughput and minimizes variance. You get there by continually reducing batch sizes”

A critical part of the Second Way is making wait times visible, so you know when your work spends days sitting in someone’s queue - or worse has to go backward, because it doesn’t have all the parts or requires rework

The wait time for a given resource is the percentage that resource is busy, divided by the percentage that resource is idle. 
- If a resource is first percent utilized, the wait time is 50/50 or 1 unit
- If a resource is ninety percent utilized, the wait time is 90/10 or 9 units
- If a resource is ninety-nine percent utilized, the wait time is 99/1 or 99 units, meaning we have to wait 99 times as long as if a resource is only 50 percent utilized

### 3 management movements
- The Theory of Constraints - Dr. Eliyahu M. Goldratt novel The Goal
  - any improvements made anywhere besides the bottleneck are an illusion.
    - Any improvement made after the bottleneck is useless, because it will always remain starved
    - Any improvement made before the bottleneck merely results in more inventory piling up at the bottleneck
  - Step 1: Identify the constraint/bottleneck
  - Step 2: Exploit the constraint
    - Make sure that the constraint is not allowed to waste any time
  - Step 3: Subordinate everything else to the constraint
    - Drum-Buffer-Rope - https://www.velocityschedulingsystem.com/wp-content/uploads/2019/12/Drum-Buffer-Rope-DBR.pdf
  - Step 4: Elevate the constraint
    -Find ways to improve the productivity of the constraint
  - Step 5: Avoid inertia and repeat the process

David J. Anderson developed techniques to using a kanban board to release work and control WIP for Development and IT Operations.

[Understanding the Theory of Constraints | Wrike](https://www.wrike.com/blog/understanding-theory-of-constraints/)

Lean production or the Toyota Production System - [Toyota Production System](https://en.wikipedia.org/wiki/Toyota_Production_System)
- Kanban
- Total Quality Management

_All agree on 1 thing: Work in Progress is the silent killer_

### The Three Ways
- Flow: The First Way is about the left-to-right flow of work from Development to IT Operations to the customer. In order to maximize flow, we need small batch sizes and intervals of work, never passing defects to downstream work centers, and to constantly optimize for the global goals…
  - https://itrevolution.com/articles/elements-of-the-first-way-and-the-devops-implications/
  - The following measures to create the fast flow:
    - Building systems and organizations that are safe to change
    - Limiting work in process
    - Continuous integration and deployment
    - Creating environments on demand
- Feedback: The Second Way is about the constant flow of fast feedback from right-to-left at all stages of the value stream, amplifying it to ensure that we can prevent problems from happening again or enable faster detection and recovery. By doing this, we create quality at the source, creating or embedding knowledge where we need it.
  - The practices necessary to apply the Second Way are:
    - Stopping “the production line” when builds and tests fail in the deployment pipeline;
    - Constantly improve daily work
    - Create a better cooperation between Development and IT Operations – “shared goals and shared pain”;
    - Create production telemetry to make sure code and environments work properly and that customers requirements are satisfied.
- Continual Experimentation and Learning: The Third Way is about creating a culture that fosters two things: continual experimentation, which requires taking risks and learning from success and failure, and understanding that repetition and practice is the prerequisite to mastery. Activities that can help here are: creating a culture of innovation, building trust, allocating at least 20% of Dev and Ops time to non-functional requirements etc.
  - If you are not improving, entropy guarantees that you are actually getting worse, which ensures that there is no path to zero errors, zero work-related accidents, and zero loss
  - Improvement Kata: repetition creates habits, and habits are what enable mastery.
  - The practices necessary to create such a culture are as follows:
    - Be open to innovation and risk taking instead of blindly taking orders
    - High trust
    - Allocating at least 20 percent of Development and IT operations cycles toward non-functional requirements
    - Encouraging and celebrating improvements.

### The Four Types of Work
- Business Projects – Business initiatives, most of the development work.
- Internal IT projects – Infrastructure and IT Operations. Creating new environments, automating things etc. Often not tracked properly. These create problems when Operations are already under stress.
- Updates and Changes – Often generated from the two previous types of work. Updating and changing different systems.
- Unplanned work or recovery work – Incidents and problems generated by other work. These make it harder to do the planned work.

When you spend all your time firefighting, there’s little time or energy left for planning. When all you do is react, there’s not enough time to do the hard mental work of figuring out whether you can accept new work. So, more projects are crammed onto the plate, with fewer cycles available to each one, which means more bad multitasking, more escalations from poor code, which means more shortcuts… around and around we go.. It’s the IT capacity death spiral