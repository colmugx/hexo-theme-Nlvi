<nav class="main-nav">
  {% if theme.menu %}
  <ul class="main-nav-list syuanpi tvIn">
  {% if theme.search.enable %}
    <li class="menu-item">
      <a href="javascript:;" id="search">
        <span>{{ __('nav.' + 'search') }}</span>
        {% if not config.language or config.language !== 'en'  %}
          <span class="menu-item-label">{{ 'search' }}</span>
        {% endif %}
      </a>
    </li>
  {% endif %}
  {% for name, url in theme.menu %}
    <li class="menu-item">
      <a href="{{ url_for(url) }}" id="{{ name }}">
        <span class="base-name">{{ name | upper }}</span>
      </a>
    </li>
  {% endfor %}
  </ul>
  {% endif %}
</nav>
