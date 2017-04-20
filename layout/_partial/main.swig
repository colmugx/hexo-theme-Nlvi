{% import "post.swig" as postt %}

<section class="posts">
    {% for post in page.posts %}
        {{ postt.render(post) }}
    {% endfor %}
</section>