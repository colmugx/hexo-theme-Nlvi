<nav class="main-nav">
  {% if theme.menu %}      
  <ul class="main-nav-list syuanpi tvIn">
  {% for name, url in theme.menu %}
    {% if name == 'search' or name == 'tags' %}
      {% set link = 'javascript:;' %}
    {% else %}
      {% set link = url_for(url) %}
    {% endif %}
    <li class="menu-item">
      <a href="{{ link }}" id="{{ name }}">
        <span class="base-name">{{ __('nav.' + name) }}</span>
        {% if not config.language == '' or not config.language == 'en'  %}
          <span class="menu-item-label">{{ name }}</span>
        {% endif %}
      </a>
    </li>  
  {% endfor %}
  </ul>
  {% endif %}
</nav>