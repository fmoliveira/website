---
title: "Welcome"
layout: "base.njk"
templateEngineOverride: njk,md
---

# Hello, I'm Filipe!

{% for post in collections.posts | sortByDate %}

  <div class="mb-8 -mx-2 p-2 rounded-md transition-colors duration-300 hover:bg-gray-700">
    <a href="{{ post.url }}">
      <h2>{{ post.data.title }}</h2>
      <p>{{ post.data.excerpt }}</p>
    </a>
  </div>
{% endfor %}
