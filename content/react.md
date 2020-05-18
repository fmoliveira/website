---
title: React
date: 2020-05-18T02:26:35Z
updated: 2020-05-18T11:32:07Z
type: garden
---

- I enjoy working with React because:
  - JSX, because it's very beautiful to read with a good composition practice
  - Hooks, because the code becomes smaller to write and simpler to compose
  - Portals, because it saves you from dealing with z-index nightmares most of the time

Topics I want to study and/or practice more:

- Suspense
- State Management
  - react-query
  - recoil
  - xState
- Profiling
- Code Splitting

Some of the best practices that I follow:

- Components must do one thing and do one thing well, it's simpler to test and maintain small components, write unit tests for the smaller components
- Larger components are composed by smaller ones, write integration tests and do not test implementation details from composed components
- Pages or features are composed by several components of all sizes
- Store UI state locally first, and move to a Context if you need to share it
- Folder structure should be as flat as possible or it becomes a hornet's nest, and also it's easier to reason where to put something when the structure is flatter, and you get to move files across directories less often

Resources to incorporate:

- https://reacttraining.com/blog/javascript-the-react-parts/
- https://ryanlanciaux.com/blog/2020/02/14/better-testing-with-storybook/
