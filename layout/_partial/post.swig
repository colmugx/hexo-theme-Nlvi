{% macro render(post) %}
  <article class="
  post
  {% if is_post() %} is_post {% endif %}
  ">
    <header class="post-header">
      <div class="post-time syuanpi riseIn-light back-1">
        <div class="post-time-wrapper">
          <span>{{ full_date(post.date, 'YYYY-MM-DD') }}</span>
          {% if post.categories and post.categories.length %}
            {% for category in post.categories %}
              <span class="post-category"><a href="{{ url_for(category.path) }}">{{ category.name }}</a></span>
            {% endfor %}
          {% endif %}
          {% if is_post() %}
            {% if post.tags and post.tags.length %}
              <div class="post-tags syuanpi riseIn-light back-3">
              {% for tag in post.tags %}
                <a href="{{ url_for(tag.path) }}">{{ tag.name }}</a>
              {% endfor %}
              </div>
            {% endif %}
          {% endif %}
        </div>
      </div>
      <h1 class="post-title syuanpi riseIn-light back-2">
        {% if is_post() %}
          {{ post.title }}
        {% else %}
          <a href="{{ url_for(post.path) }}">{{ post.title }}</a>
        {% endif %}
      </h1>
    </header>
    <div class="post-content syuanpi riseIn-light back-3">
      {% set pexc = post.excerpt ? post.excerpt : post.content %}
      {% if is_post() %}
        {{ post.content }}
      {% else %}
        {{ pexc }}
      {% endif %}
    {% if post.excerpt and is_home() %}
      <p class="content-link">
        <a href="{{ url_for(post.path) }}#more">
          <span>{{ __('page.readmore') }}</span>
        </a>
      </p>
    {% endif %}
    </div>
    {% if is_post() %}
      {% include "_post/reward.swig" %}
      {% include "_post/copyright.swig" %}
    {% endif %}
  </article>
  {% if is_post() %}
    {% include "pagenum.swig" %}
    {% include "_post/comments.swig" %}
    {% include "_post/toc.swig" %}
  {% endif %}
{% endmacro %}