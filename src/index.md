---
title: "Welcome"
layout: "base.njk"
templateEngineOverride: njk,md
---

# Hello, I'm Filipe!

{% for post in collections.posts | sortByDate %}

  <div class="mb-8">
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <p>{{ post.data.excerpt }}</p>
  </div>
{% endfor %}
