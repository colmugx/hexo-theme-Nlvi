<nav class="main-nav syuanpi tvIn">
  {% if theme.menu %}      
  <div class="main-nav-wrapper">
  {% for name, url in theme.menu %}
    {% set link = name == 'search' or name == 'tags' 
      ? 'javascript:;'
      : url %}
    <li class="menu-item">
      <a href="{{ link }}" id="{{ name }}">
        <span class="base-name">{{ __('nav.' + name) }}</span>
        {% if not config.language == '' or not config.language == 'en'  %}
          <span class="menu-item-label">{{ name }}</span>
        {% endif %}
      </a>
    </li>  
  {% endfor %}
  </div>
  {% endif %}
</nav>