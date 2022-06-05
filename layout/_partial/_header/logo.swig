<div class="logo">
  <div class="logo-inner syuanpi tvIn">
    <h1><a href="{{ url_for('/') }}">{{config.title}}</a></h1>
    {% if config.subtitle %}
      <span id="subtitle">{{config.subtitle}}</span>
    {% endif %}
  </div>
</div>
