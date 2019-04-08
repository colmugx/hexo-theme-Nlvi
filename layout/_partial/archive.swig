{% macro render() %}
  <div class="archive syuanpi fadeInRightShort" id="archive">
    {% if page.archive %}
      <aside class="archive-title">Total</aside>
      <span class="archive-num">{{ __('page.para', site.posts.length) }}</span>
    {% elif page.category %}
      <span class="archive-title"> {{ __('page.now') }} </span>
      <span class="archive-name"> — {{ page.category }}</span>
    {% endif %}
      {% set year %}
      {% for post in page.posts %}
        {% if page.archive %}
          {% set post.year = date(post.date, 'YYYY') %}
          {% if post.year !== year %}
            {% if year !== null %}
              </div></section>
            {% endif %}
            {% set year = post.year %}
            <div class="archive-group">
            <time class="archive-year"> {{ year }} </time>
            <div class="archive-list">
          {% endif %}
          {% else %}
          </section>
        {% endif %}
        <div class="archive-post">
          <div class="archive-post-content">
            {% if post.excerpt %}
              {{ post.excerpt }}
            {% else %}
              {{ post.content }}
            {% endif %}
          </div>
          <div class="archive-post-info">
            <time class="archive-post-time">
              {{ date(post.date, 'YYYY-MM-DD') }}
            </time>
            <a  class="archive-post-link" href="{{ url_for(post.path) }}">
              {{ post.title }}
            </a>
          </div>
        </div>
      {% endfor %}
      {% if page.posts.length %}
        </section></section>
      {% endif %}
  </div>
  {% include "pagenum.swig" %}
{% endmacro %}
