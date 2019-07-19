<nav class="main-nav">
  {% if theme.menu %}
  <ul class="main-nav-list syuanpi tvIn">
  {% if theme.search.enable %}
    <li class="menu-item">
      <a href="javascript:;" id="search-btn" aria-label="Search">
        <i class="iconfont icon-search"></i>
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
        <span class="base-name">
          {% if theme['local-nav'] %}
            {{ __('nav.' + name) }}
          {% else %}
            {{ name | upper }}
          {% endif %}
        </span>
      </a>
    </li>
  {% endfor %}
  {% if theme.scheme == 'balance' %}
    {% if is_post() %}
      <li class="menu-item">
        <a href="javascript:;" id="switch-toc">{{ __('page.index') | upper }}</a>
      </li>
    {% endif %}
  {% endif %}
  </ul>
  {% endif %}
</nav>
