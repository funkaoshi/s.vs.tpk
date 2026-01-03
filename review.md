---
layout: static
title: Reviews
permalink: /review/
---

{% assign posts = site.categories.review %}
{% assign posts_by_year = posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in posts_by_year %}
<h2>{{ year.name }} <small>{{ year.items | size }} posts</small></h2>
<ul>
  {% for post in year.items %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small>{{ post.date | date: "%Y-%m-%d" }}</small>
    </li>
  {% endfor %}
</ul>
{% endfor %}
