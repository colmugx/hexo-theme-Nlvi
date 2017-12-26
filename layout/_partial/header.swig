<header class="header" id="header">
  <div class="header-wrapper">
    {% include "_header/logo.swig" %}
    {% include "_header/nav.swig" %}
    
    {% if theme.scheme == 'balance' %}
      {% include "./_feature/balance.swig" %}  
    {% endif %}
  </div>
</header>
{% include "_header/mobile.swig" %}