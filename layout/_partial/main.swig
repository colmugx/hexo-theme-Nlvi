{% import "post.swig" as postPage %}

<section class="posts">
  {% for post in page.posts %}
    {{ postPage.render(post) }}
  {% endfor %}
</section>