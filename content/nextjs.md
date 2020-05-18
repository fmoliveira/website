---
title: Next.js
date: 2020-05-18T11:32:53Z
type: garden
---

## PostCSS

It supports PostCSS out of the box

- Install package `yarn add -D postcss-preset-env`
- Create a `postcss.config.js` file to get started

```
module.exports = { 'postcss-preset-env'] }
```

## TailwindCSS

- Install TailwindCSS `yarn add -D tailwindcss`
- Create configuration with `npx tailwind init`
- Add plugin `tailwindcss` to PostCSS configuration

## Global styles

Create a file `pages/_app.js` with this code:

```
import '../styles/index.css'`

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```
