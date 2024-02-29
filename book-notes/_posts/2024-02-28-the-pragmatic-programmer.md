---
layout: post
title: The Pragmatic Programmer by David Thomas and Andrew Hunt
---

### A Pragmatic Philosophy
- Tip 1: Care abour your craft
- Tip 2: Think! About your work
- Tip 3: You have agency
- Tip 4: Provide Options, Don't make lame excuses
- Tip 5: Don't live with Broken Windows
- Tip 6: Be a catalyst for change
- Tip 7: Remember the Big Picture
- Tip 8: Make quality a requirements issue
- Tip 9: Invest regularly in your knowledge portfolio
- Tip 10: Critically analyze what you read and hear
- Tip 11: English is just another programming language
- Tip 12: It's Both WHat you say and the way you say it
- Tip 13: Build documentation in, don't bolt it on

### A Pragmatic Approach
- Tip 14: Good design is easier to change than bad design
- Tip 15: DRY - Don't repeat yourself
- Tip 16: Make it easy to reuse
- Tip 17: Eliminate effects between unrelated things
- Tip 18: There are no final decisions
- Tip 19: Forgo following fads
- Tip 20: Use tracer bullets to find the target
- Tip 21: Prototype to learn
- Tip 22: Program close to the problem domain
- Tip 23: Estimate to avoid surprises
- Tip 24: Iterate the schedule with the code

### The Basic Tools
- Tip 25: Keep knowledge in plain text
- Tip 26: Use the power of command shells
- Tip 27: Achieve Editor Fluency
  - When editing text, move and make selections by character, word, line, and paragraph
  - When editing code, move by various syntactic units (matching delimiters, functions, modules, ...)
  - Reindent code following changes
  - Comment and uncomment blocks of code with a single command
  - Undo and redo changes
  - Split the editor window into multiple panels, and navigate between them
  - Navigate to a particular line number
  - Sort selected lines
  - Search for both strings and regular expressions, and repeat previous searches
  - Temporarily create multiple cursors based on a selection or on a pattern match, and edit the text at each in parallel
  - Display complication errors in the current project
  - Run the current project's tests
- Tip 28: Always use Version Control
- Tip 29: Fix the problem, not the blame
- Tip 30: Don't panic
- Tip 31: Failing test before fixing code
- Tip 32: Read the damn error message
- Tip 33: "select" isn't broken
- Tip 34: Don't assume it - Prove it
- Tip 35: Learn a text manipulation language
  - Ruby
  - Python

### Pragmatic Paranoia
- Tip 36: You can't write perfect software
- Tip 37: Design with contracts
- Tip 38: Crash early
- Tip 39: Use Assertions to Prevent the Impossible
- Tip 40: Finish What you start
- Tip 41: Act locally
- Tip 42: Take small steps - always
- Tip 43: Avoid fortune-telling

### Bend, or Break
- Tip 44: Decouple code is easier to change
- Tip 45: Tell, don't ask
- Tip 46: Don't chain method calls
- Tip 47: Avoid global data
- Tip 48: If it's important enough to be global, wrap it in an API
- Tip 49: Programming is about code, but programs are about data
- Tip 50: Don't hoard state; pass it around
- Tip 51: Don't pay inheritance tax
- Tip 52: Prefer interfaces to express polymorphism
- Tip 53: Delegate to services: has-a trumps is-a
- Tip 54: Use Mixins to share functionality
- Tip 55: Parameterize your app using external configuration

### Concurrency
- Tip 56: Analyze Workflow to improve concurrency
- Tip 57: Shared state is incorrect state
- Tip 58: Random failures are often concurrency issues
- Tip 59: Use actors for concurrency without shared state
- Tip 60: USe blackboards to coordinate workflow

### While You Are Coding
- Tip 61: Listen to your inner lizard
- Tip 62: DOn't program by coincidence
    - Always be aware of what you are doing
    - Can you explain the code, in detail, to a more junior programmer? If not, perhaps you are relying on coincidences
    - Don't code in the dark. Build an application you don't fully graph, or use a technology you don't understand, and you'll likely be bitton by coincidences. If you're not sure why it work, you won't know why it fails
    - Proceed from a plan, whether that plan is in your head, on the back of a cocktail napkin, or on a whiteboard
    - Rely only on reliable things. Don't depend on assumptions. If you can't tell if something is reliable, assume the worst
    - Document your assumptions
    - Don't just test your code, but test your assumptions as well. Don't guess; actually try it. Write an assertion to test your assumptions. If your assumption is right, you have improved the documentation in your code. If you discover your assumption is wrong, then count yourself lucky.
    - Priorize your effort. Spend time on the important aspects; more than likely, these are the hard parts. If you don't have fundamentals or infrastructure correct, brilliant bells and whistles will be irrelevant.
    - Don't be a slave to history. Don't let existing code dictate future code. All code can be replaced if it is no longer appropriate. Even within one program, don't let what you've already done constrain what you do next - be ready to refactor. This decision may impact the project schedule. The assumption is that the impact will be less than the cost of not making the change.
- Tip 63: Estimate the order of your algorithms
- Tip 64: Test your estimates
- Tip 65: Refactor Early, Refactor Often
- Tip 66: Testing is not about finding bugs
  - Tests drive coding
- Tip 67: A Test is the first user of your code
- Tip 68: Build End-to-end, Not Top-Down or Bottom-Up
- Tip 69: Design to Test
- Tip 70: Test Your software, or your uses will
- Tip 71: Use property-based tests to validate your assumptions
- Tip 72: Keep it simple and minimize attack surfaces
  - Code complexity leads to attack vectors
  - Input data is an attack vector
  - Unauthenticated services are an attack vector
  - Authenticated services are an attack vector
  - Output data is an attack vector
  - Debugging info as is attack vector
  - Principle of Least Privilege
  - Secure Defaults
  - Encrypt Sensitive Data
  - Maintain Security Updates
- Tip 73: Apply security patches quickly
- Tip 74: Name Well; Rename When Needed

#### When Should you refactor
- **Duplication**: You've discovered a violation of the DRY principle
- **Nonorthogonal design**: You've discovered something that could be made more orthogonal
- **Outdated knowledge**: Things change, requirements drift, and your knowledge of the problem increases. Code needs to keep up
- **Usage**: As the system gets used by real people under real circumstances, you realize some features are now more important than previously though, and "must have" features perhabs weren't
- **Performance**: You need to move functionality from one area of the system to another to improve performance
- **The Tests Pass**: Yes. Seriously. We did say that refactoring should be a small scale activity, backed up by good tests. So when you've added a small amount of code, and that one extra test passes, you now have a great opportunity to dive in and tidy up what you just wrote.

### Before the Project
- Tip 75: No one knows exactly what they want
- Tip 76: Programmers help people understand what they want
- Tip 77: Requirements are learned in a feedback loop
- Tip 78: Work with a User to think like a User
- Tip 79: Policy is Metadata
- Tip 80: Use a Project Glossary
- Tip 81: Don't think outside the box - Find the bix
- Tip 82: Don't go into the code alone
- Tip 83: Agile is not a noun; Agile is how you do things

### Pragmatic Projects
- Tip 84: Maintain small, stable teams
- Tip 85: Schedule it to make it happen
- Tip 86: Organize fully functional teams
- Tip 87: Do what works, not what's fashionable
- Tip 88: Deliver when users need it
- Tip 89: Use version control to drive builds, tests, and releases
- Tip 90: Test early, Test often, Test automatically
- Tip 91: Coding ain't done 'til all the tests run
- Tip 92: USe saboteurs to test your testing
- Tip 93: Test state coverage, not code coverage
- Tip 94: Find bugs once
- Tip 95: Don't use manual procedures
- Tip 96: Delight users, don't just deliver code
- Tip 97: Sign your work

### Postface
- Tip 98: First, do no harm
- Tip 99: Don't enable scumbags
- Tip 100: It's your life. Share it. Celebrate it. Build it. AND HAVE FUN!

