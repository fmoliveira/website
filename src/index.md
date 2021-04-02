---
title: "Welcome!"
layout: "base.njk"
---

{% for post in collections.posts %}

  <div>
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <p>{{ post.data.excerpt }}</p>
  </div>
{% endfor %}
