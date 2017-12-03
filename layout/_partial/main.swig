{% import "post.swig" as postPage %}

{% for post in page.posts %}
  <section class="posts">
    {{ postPage.render(post) }}
  </section>
{% endfor %}