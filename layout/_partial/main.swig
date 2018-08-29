{% import "post.swig" as postPage %}

<section class="posts">
  {% for post in page.posts %}
    {% if post.top %}
      {{ postPage.render(post) }}
    {% endif %}
  {% endfor %}
  {% for post in page.posts %}
    {% if not post.top %}
      {{ postPage.render(post) }}
    {% endif %}
  {% endfor %}
</section>