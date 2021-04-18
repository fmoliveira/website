---
title: "I'm loving Eleventy!"
---

I've migrated my blog from Gatsby, and before that, I've used several other static site generators. I was looking for something simple to maintain as Jekyll, but without having to go through the dreaded task of installing Ruby and hunting precious gems. That must work wonders for people with at least a basic familiarity with Ruby's ecosystem, but it wasn't sustainable for me.

I didn't test-drive all the static site generators I'd like to, but Eleventy changed my perspective. Bootstrapping a new blog has always been boring. I was never satisfied with any of the alternatives I've tried, either because they were too limited or too flexible. So I kept tearing down old blogs and creating new ones. Learning new tools is generally fun until I had to learn countless new tools to try to set up that same thing.

Being limited means that you can't unleash your creativity on what you want to implement, so you need some flexibility. But when trying generators that were more flexible, I've discovered a level of flexibility that was very dangerous to my productivity and led to more and more procrastination. I was overworking on JSX and GraphQL queries to implement basic tooling on my blog and left the content to dust. I mean, I love GraphQL but I was spending way too much time to understand how my file system is mapped to a GraphQL query, just to render a handful of things. That was a dull waste of time for my use case.

> Too much flexibility kills productivity.

It's been quite some time that I've been reading all sorts of good things from people passionate with <a href="https://www.11ty.dev/" target="_blank" rel="noopener noreferrer">Eleventy</a>, and now that I've decided to try it out,
I think I've finally found a balance on it. And dang, I wonder why I didn't try it out earlier. Creating a blank canvas is simple and it compiles fast since it comes without the usual bloat.

The starting canvas isn't pretty, and I didn't like onboarding on the docs at first glance - but now I think that was just a prejudice from being spoiled with JSX. It's quick to get the hang of it. It's config-less to start, but I recommend changing the input directory from root to `src` to keep things more organised.

I can't deny that I miss JSX a lot. It really breaks my mind to do certain things without extracting reusable components, but instead, I'm just @applying common styles to my TailwindCSS main stylesheet and it's working out fine.

The best thing I'm loving about Eleventy is that you just have to know vanilla JavaScript to extend it to your likings. Want to filter some data? Create a filter function on the config file. Want to fetch data from the cloud? No messing around with plugins, just write a JS function to fetch it and you're done!

This is the quickest blog that I've set up from scratch to a point that I was happy enough to deploy, and that happened in just 3 evening sessions of a couple of hours coding. It's not yet super pretty, but it looks minimally good IMO, I can quickly write blogs, and it's a piece of cake to add dynamic data to it. That checks all the boxes I need for now.

This post was not sponsored if that's what you're thinking, but I couldn't help myself but share my newfound love for Eleventy. It strikes a really good balance between simplicity and flexibility, and I'm excited to continue working on this blog that I now call home.

> Eleventy strikes a really good balance between simplicity and flexibility.

Are you also interested in trying out Eleventy? I recommend starting with <a href="https://egghead.io/courses/build-an-eleventy-11ty-site-from-scratch-bfd3" target="_blank" rel="noopener noreferrer">Stephanie Eckles's course on egghead.io</a>, which is the same resource that I've used and made my introduction simple and exciting.

Bon voyage, and have lots of fun!
