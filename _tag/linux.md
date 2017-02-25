---
layout: page
title: Тег linux
permalink: /tag/linux/
---

<div class="tags-expo">
  <div class="tags-expo-section">
    {% for tag in site.tags %}
    <div id="{{ tag[0] | slugify }}">{{ tag[0] }}</div>
    <ul class="tags-expo-posts">
      {% for post in tag[1] %}
        <a href="{{ site.baseurl }}{{ post.url }}">
      <li>
        {{ post.title }}
      <small class="post-date">{% include date.html date=post.date %}</small>
      </li>
      </a>
      {% endfor %}
    </ul>
    {% endfor %}
  </div>
</div>
