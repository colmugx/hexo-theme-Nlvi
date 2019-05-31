<div class="mobile-header" id="mobile-header">
  <div class="mobile-header-nav">
    <div class="mobile-header-item" id="mobile-left">
      <div class="header-menu-item">
        <div class="header-menu-line"></div>
      </div>
    </div>
    <h1 class="mobile-header-title">
      <a href="/">{{config.title}}</a>
    </h1>
    <div class="mobile-header-item"></div>
  </div>
  <div class="mobile-header-body">
    <ul class="mobile-header-list">
      {% for name,url in theme.menu %}
        <li class="mobile-nav-item syuanpi fadeInRightShort back-{{ loop.index0 }}">
          <a href="{% if name == 'tags' %}javascript:;{% else %}{{ url_for(url) }}{% endif %}" {%if name == 'tags' %}id="mobile-tags"{% endif %}>
            {% if theme['local-nav'] %}
              {{ __('nav.' + name) }}
            {% else %}
              {{ name | upper }}
            {% endif %}
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>
