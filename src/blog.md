---
title: "Blog"
layout: "base.njk"
templateEngineOverride: njk,md
---

# Blog

{% for post in collections.posts | sortByDate %}

  <div class="mb-8 -mx-3 p-3 rounded-md transition-colors duration-300 hover:bg-gray-700">
    <a href="{{ post.url }}" class="text-gray-300">
      <h2>{{ post.data.title }}</h2>
      <p>{{ post.data.excerpt }}</p>
    </a>
  </div>
{% endfor %}
