<div class="logo">
  <div class="logo-inner syuanpi tvIn">
    <span><a href="{{ url_for('/') }}">{{config.title}}</a></span>
    {% if config.subtitle %}
      <span id="subtitle">{{config.subtitle}}</span>
    {% endif %}
  </div>
</div>