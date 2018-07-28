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
    {% if name == 'search' or name == 'tags' %}
      {% set link = 'javascript:;' %}
    {% else %}
      {% set link = url_for(url) %}
    {% endif %}
    <li class="menu-item">
      <a href="{{ link }}" id="{{ name }}">
        <span class="base-name">{{ __('nav.' + name) }}</span>
        {% if not config.language or config.language !== 'en'  %}
          <span class="menu-item-label">{{ name }}</span>
        {% endif %}
      </a>
    </li>
  {% endfor %}
  </ul>
  {% endif %}
</nav>
