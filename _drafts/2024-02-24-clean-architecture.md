---
layout: post
title: Clean Architecture by Robert C. Martin
---

## Inntroduction

### What is Design and Architecture

#### The Goal?
> The goal of software architecture is to minimize the human resources required to build and maintain the required system.

In every case, the best option is for the development organization to recognize and avoid its own overconfidence and to start taking the quality of its software architecture seriously.

To take software architecture seriously, you need to know what good software architecture is. To build a system with a design and an architecture that minimize effort and maximize productivity, you need to know which attributes of system architecture lead to that end.

### A Tale of Two Values

The first value of software --behavior-- is urgent but not always particularly important.

The second value of software --architecture-- is important but never particularly urgent.

## Starting with the Bricks: Programming Paradigms
### Paradigm Overview

Structured Programming: imposes discipline on direct transfer of control
Object-Oriented Programming: imposes discipline on indirect transfer of control
Functional Programming: imposes discipline upon assignment

### Structured Programming

> Testing shows the presence, not the absence, of bugs. ~ Dijkstra

The implications of this fact are stunning. Software development is not a mathematical endeavor, even though it seems to manipulate mathematical constructs. Rather, software is like a science. We show correctness by failing to prove incorrectness, despite our best efforts.

It is this ability to create falsifiable units of programming that makes structured programming valuable today. THis is the reason that modern languages do not typically support unstrainted goto statements. Moreover, at the architectural level, this is why we still consider functional decomposition to be one of our best practices.

At every level, from the smallest function to the largest component, software is like a science and, therefore, is driven by falsifiability. Software architects strive to define modules, components, and services that are easily falsifiable (testable). To do so, they employ restrictive disciplines similar to structured programming, albeit at a much higher level.

### Object-Oriented Programming

What is OO? There are many opinions and many answers to this question. To the software architect, however, the answer is clear. OO is the ability, through the use of polymorphism, to gain absolute control over every source code dependency in the system. It allows the architect to create a plugin architecture, in which modules that contain high-level policies are independent of modules that contain low-level details. The low-level details are relegated to plugin modules that can be deployed and developed independently from the modules that contain high-level policies.

### Functional Programming

All race conditions, deadlock conditions, and concurrent update problems are due to mutable variables. You cannot have a race condition or a concurrent update problem if no variable is ever updated. You cannot have deadlocks without mutable locks.

In other words, all the problems that we face in concurrent applications - all the problems we face in applications that require multiple threads, and multiple processors - cannot happen if there are no mutable variables.

As an architect, you should be very interested in issues of concurrency. You want to make sure that the systems you design will be robust in the presence of multiple threads and processors. The question you must be asking yourself, then, is whether immutability is practicable.

The answer to that question is affirmative, if you have infinite storage and infinite processor speed. Lacking those infinite resources, the answer is a bit more nuanced. Yes, immutability can be practicable, if certain compromises are made.

## Design Principles

### SRP: The Single Responsibility Principle

> A module should be responsible to one, and only one, actor.

actor: one or more people who require a change

The Single Responsility Principle is about functions and classes - but it reappears in a different form at two more levels. At the level of components, it becomes the Common Closure Principle. At the architectural level, it becomes the Axis of Change responsible for the creation of Architectural Boundaries.

### OCP: The Open-Closed Principle

> A software artifact should be open for extension but closed for modification.

The behavior of a software artifact ought to be extendible, without having to modify that artifact.

The OCP is one of the driving forces behind the architecture of systems. The goal is to make the system easy to extend without incurring a high impact of change. This gial is accomplished by partitioning the system into components, and arranging those components into a dependency hierarchy that protects higher-level components from changes in lower-level components.

### LSP: The Liskov Substitution Principle

>What is wanted here is something like the following substitution property: If for each object o1 of type S there is an object o2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when o1 is substituted for o2 then S is a subtype of T.

The LSP can, and should, be extended to the level of architecture. A simple violation of substitutability, can cause a system's architecture to be polluted with a significant amount of extra mechanisms.

### ISP: The Interface Segregation Principle

The lesson here is the depending on somthing that carries baggage that you don't need can cause you troubles that you didn't expect.

### DIP: The Dependency Inversion Principle

The most flexible systems are those in which source code dependencies refer only to abstractions, not to concretions.

- Don't refer to volatile concrete classes
  - Refer to abstract interfaces instead. This rule applies in all languages, whether statically or dynamically typed. It also puts severe constraints on the creation of objects and generally enforces the use of Abstract Factories.
- Don't derive from volatile concrete classes
  - This is a corollary to the previous ruke, but it bears special mention. In statically typed languages, inheritance is the trongest, and most rigid, of all the source code relationships; consequently, it should be used with great case. IN dynamically typed languages, inheritance is less of a problem, but it is still a dependency - and caution is always the wisest choice.
- Don't override concrete functions
  - Concreete functions often require source code dependencies. When you override those functions, you do not eliminate those dependencies - indeed, you inherit them. To manage those dependencies, you should make the function abstract and create multiple implementations.
- Never mention the name of anything concrete and volatile
  - This is really just a restatement of the principle itself.

This will be the most visible organizarion principle in our architecture diagrams. 

## Component Principles

### Components

### Component Cohesion

#### The Reuse/Release Equivalence Principle

#### The Common Closure Principle

#### The Common Reuse Principle

#### The Tension Diagram for Component Cohesion

#### Conclusion

### Component Coupling

#### The Acyclic Dependencies Principle

#### Top-Down Design

#### The Stable Dependencies Principle

#### The Stable Abstractons Principle

#### Conclusion

## Architecture

### What is Architecture?

### Independence

### Boundaries: Drawing Lines

### Boundary Anatomy

### Policy and Level

### Business Rules

### Screaming Architecture

### The Clean Architecture

### Presenters and Humble Objects

### Partial Boundaries

### Layers and Boundaries

### The Main Component

### Services: Great and Small

### The Test Boundary

### Clean Embedded Architecture

## Details

### The Database Is a Detail

### The Web Is a Detail

### Frameworks Are Details

### Case Study: Video Sales

### The Missing Chapter