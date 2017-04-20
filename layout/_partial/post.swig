{% macro render(post) %}
    <article class="post">
        <header class="post-header">
            <div class="post-time syuanpi riseIn-light back-1">
                <span>{{ full_date(post.date, 'll') }}</span>
            </div>
            <h1 class="post-title syuanpi riseIn-light back-2">
            {% if is_post() %}
                {{ post.title }}
            {% else %}
                <a href="{{ url_for(post.path) }}">{{ post.title }}</a>
            {% endif %}
            </h1>
            {% if is_post() %}
                {% if post.tags and post.tags.length %}
                    <div class="post-tags syuanpi riseIn-light back-3">
                    {% for tag in post.tags %}
                        <a href="{{ url_for(tag.path) }}">{{ tag.name }}</a>
                    {% endfor %}
                    </div>
                {% endif %}
            {% endif %}
        </header>
        <div class="post-content syuanpi riseIn-light back-3">
            {% if is_post() %}
                {{ post.content }}
            {% else %}
                {% if post.excerpt %}
                    {{ post.excerpt }}
                    {% else %}
                    {{ post.content }}
                {% endif %}
            {% endif %}
        {% if post.excerpt and is_home() %}
            <p class="content-link">
                <a href="{{ url_for(post.path) }}#more">
                    <span class="iconfont icon-right">{{ __('page.readmore') }}</span>
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
    {% endif %}
{% endmacro %}