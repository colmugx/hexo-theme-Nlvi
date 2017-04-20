{% macro render() %}
    <div class="archive syuanpi riseIn-light" id="archive">
        {% if page.archive %}
            <h1 class="archive-title">Total</h1>
            <span class="archive-num">{{ __('page.para', site.posts.length) }}</span>
        {% elif page.tag %}
            <h2 class="archive-title"> {{ __('page.now') }} </h2>
            <span class="archive-name"> — {{ page.tag }}</span>
        {% endif %}
        <div class="archive-list">
            <ul>
        {% for post in page.posts %}
            {% if page.archive %}
                {% set year %}
                {% set post.year = date(post.date, 'YYYY') %}
                {% if post.year !== year %}
                    {% set year = post.year %}
                    {% if year %} 
                        <h2 class="archive-year"> {{ year }} </h2>
                    {% endif %}
                {% endif %}
            {% endif %}
            
            <li class="archive-post">
                <span class="archive-post-time">
                {% if page.archive %}
                    {{ date(post.date, 'MM-DD') }}
                {% else %}
                    {{ date(post.date, 'YYYY-MM-DD') }}
                {% endif %}
                </span>
                <span class="archive-post-link">
                    <a href="{{ url_for(post.path) }}">{{ post.title }}</a>
                </span>
            </li>

        {% endfor %}
            </ul>
        </div>
    </div>
    {% include "pagenum.swig" %}
{% endmacro %}