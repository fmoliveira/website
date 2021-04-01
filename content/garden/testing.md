---
title: Testing
date: 2020-05-18T11:47:13Z
type: garden
---

- If all your testing process seems too hard you're probably doing it wrong. Good testing is mostly simple, with some hard parts.
- I'm a huge fan of Testing Library which advocates testing your app the same way a user would use it. In terms of API, it means to forget implementation details and access your UI by the text on screen and screenreader.
- Testing things by class names or ids is unacceptable in most cases. Testing styles mean messing with implementation details and you will have to rewrite tests very often. Tests should be crafted to last the most time possible. Prefer a Visual regression test tool to help you test styles, like ChromaticQA or Applitools Eyes.
- Your stack needs to have a balance of several times of tests:
  - **Jest** for **Unit tests**, for the smallest components, and always for functions involving any business logic
  - **React Testing Library** for **Integration tests**, avoid mocking at all costs because it increases the cost and decreases the value of integration tests, the broader the tests, the more likely you are to catch bugs
  - **Cypress** for **End to end tests**, they are great because they run in the same environment as a real user will do
  - **Chromatic** for **Visual regression tests**, this is the place where you should care for styles
