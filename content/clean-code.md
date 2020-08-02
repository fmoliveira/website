---
title: Clean Code
date: 2020-08-02T05:50:27Z
type: garden
---

- Watch [Clean Code - Uncle Bob / Lesson 1](https://www.youtube.com/watch?v=7EmboKQH8lM)

## Motivations for clean code

- Ethics
- Security: physical and financial
- Responsibility to deliver software in time consistently

## Why are programmers so slow

- Start a new project without minding good practices, creates new features real fast to please managers, but code gets messier and messier to a point where it's unmaintainable and programmers are bottomed up to 1% of their original productivity
- Adding new people to a team slows down all the team
- Getting code to work is only half of the job, once it works you must clean up
- No one writes clean code first, it's just too hard to get get to work, so once it works, it'll be a mess
- We don't think on nice straight lines, we can't foresee the entire algorithm
- How much time do you invest in cleaning code? Almost the same you invested in writing it. The problem is that nobody wants to put that effort in because they think it's done when it works
- It's not done when it works, it's done when it's right
- The only way to go fast is to go well, to do a good job

## What is clean code

[![Code quality is measured in WTFs/minute](https://i2.wp.com/commadot.com/wp-content/uploads/2009/02/wtf.png?w=550&ssl=1)](https://commadot.com/wtf-per-minute/)

- Elegant and efficient, simple and direct
- Does one thing well
- What is one thing? How to measure it?
- Reads like well-written prose
- Clean code always looks like it was written by someone who cares (about everyone who is going to read it)
- The more important part of your job is that you must write code that other people can maintain
- Code that works perfectly but can't be understood will become useless as soon as the requirements changes
- Each routine you read turns out to be pretty much what you expected
- Clean code is 0 WTFs/minute, no surprises, no WTFs

## Good code

- Use explanatory variables, their only purpose is to explain what its content is
- Construct well-written prose from the names of variables and functions
- Smaller is better
- Functions should hardly ever be 20 lines long