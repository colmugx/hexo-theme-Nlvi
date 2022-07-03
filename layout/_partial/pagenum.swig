{% if not is_post() %}
  <nav class="pagination">
      {{ paginator({
          prev_text: '<i class="ri-arrow-left-s-line"></i>' + __("page.prev"),
          next_text: __("page.next") + '<i class="ri-arrow-right-s-line"></i>',
          escape: false
      }) }}
  </nav>
{% else %}
  <nav class="article-page">
    {% if page.prev.path %}
      <a href="{{ url_for(page.prev.path) }}" id="art-left" class="art-left">
        <span class="next-title">
          <i class="ri-arrow-left-s-line"></i>{{page.prev.title}}
        </span>
      </a>
    {% endif %}
    {% if page.next.path %}
      <a href="{{ url_for(page.next.path) }}" id="art-right" class="art-right">
        <span class="prev-title">
          {{ page.next.title }}<i class="ri-arrow-right-s-line"></i>
        </span>
      </a>
    {% endif %}
  </nav>
{% endif %}
