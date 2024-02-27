---
layout: post
title: Team Topologies by Matthew Skelton and Manual Pais
---

[Brian’s Notes](https://www.briansnotes.io/book/team-topologies/)

#### 3 organizational structures:
- Formal (org chart)
- Informal (influence between individuals)
- Value creation structure (how work gets done between teams)

#### Team Types
- Stream-Aligned Teams
- Complicated-Subsystem Teams
- Enabling Teams
  - Communities of Practice are NOT Enabling Teams
- Platform Teams

#### Team Interactions
- Collaboration: close work between 2 teams
  - Lowest Level: 2 teams keep their responsibility and expertise related to their original perimeter and they work together on a specific subset of tasks and deliverables
  - Highest level: 2 teams work as a pool on all tasks and deliverables. As a result, they share a common responsibility and expertise tends to converge.
- X-as-a-Service: service provided with minimal collaboration
  - Team provides a service to another team like an API or a platform to be used with minimal effort and knowledge. 
  - The service team needs to truly listen to the needs of the teams that consume its service.
  - Service team should master and enforce the principles of service-management when designing and building its software.

#### Conway’s Law
> Organizations which design systems . . . are constrained to produce designs which are copies of the communication structures of these organizations.

![Conway's Law](/assets/img/conways_law.png)

#### The Inverse Conway Monoeuvre
The concept of Conway’s Law can also be applied in a reverse manner. For example, having a target architecture in mind we can challenge and form the communication structures within the organization and by that achieve our planned design.

If an organization uses a service-based architecture, each component is developed and managed independently from each other. Individual teams will be responsible for an individual service, having complete and independent decision-making capabilities.

#### Dunbar’s Numbers
- 5 people: The average number of people a human can hold with close personal relationships and working memory (i.e. people we love)
- 15 people: The average number of people a human being can experience deep trust with (i.e. good friends)
- 50 people: The average number of people a human being can have mutual trust with (i.e. friends)
- 150: The average number of people a human being can have a real social relationship with (i.e. meaningful contacts)
- 500: acquaintances
- 1500: The number of people a human being can recognize
- Agile Teams (7 +/-2) and Tribes (~150) directly come from Dunbar’s works and other social studies

### Cognitive Load
Cognitive Load Theory is the total amount of mental effort being used in the working memory - John Sweller

#### 3 types of cognitive load
- Intrinsic Cognitive Load: related to the elements that are part of the DNA of the knowledge to be learned. Without them learning of the core concepts and skills cannot occur.
- Extraneous Cognitive Load: the way the information is presented to trainees. The total cognitive load is the sum of intrinsic and extraneous load; taken together these cannot exceed the trainee’s working memory capacity for learning to happen.
  - Restrict teams' responsibilities to core knowledge and simplify the need to understand and manage non-core knowledge. Simplify processes, automate everything with friendly Developer Experience and build as a service all supporting services like the software factory, the deployment or refresh of environments.
- Germane Cognitive Load: the work to store knowledge in the long term memory

#### 2 Kinds of Knowledge and Information:
- Those that are core to the topic (i.e. coding language and how to properly code)
- Those that are needed but non-core (i.e. how to compile the code or how to refresh a test environment)

You want to save the individuals' and teams' working memory for core elements(Intrinsic Cognitive Load) and to learn to problem solve (Germane Cognitive Load) and reduce everything that is not core (Extraneous Cognitive Load).

Identify context domains that the team has to deal with and categorize them by level of complexity
- Low: most of the work is straightforward
- Medium: The team has to analyze changes then iterate a few times
- High: The team needs a lot of experimentation and discovery

Guidelines
- An agile team can manage 2 to 3 low complexity domains
- A single team managing a complex domain should be dedicated to it.

#### Application
- Small teams
  - Small teams have small perimeters of responsibility, therefore, a lower cognitive load. The system is also impacted following the “inverse Conway maneuver”: the architecture of the system, the software are easier to understand.
- Independent Teams
  - Many-to-many communication will prevent modularity and create monolithic and highly couple systems.
  - Restrict unnecessary communication between teams. Define “team interfaces” to set expectations regarding communication and collaboration between teams and enforce them. If two teams need to communicate, but should not based on the software architecture design, there is a problem somewhere.
- Shared Tools
  - If you want teams to collaborate, then have them share the same instance of tools. To enforce a clear boundary between teams, have them use separate instances of tools.
- Skills for Organization Design
  - It is mandatory to have a technical expertise to properly design an organization
  - Team assignments are the first draft of the architecture