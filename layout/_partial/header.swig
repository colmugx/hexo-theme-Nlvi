<header class="header" id="header">
  <div class="header-wrapper">
    {% include "_header/logo.swig" %}
    {% include "_header/nav.swig" %}
  </div>
</header>
{% include "_header/mobile.swig" %}
{% if theme.scheme == 'balance' %}
  {% include "./_feature/balance.swig" %}
{% endif %}
