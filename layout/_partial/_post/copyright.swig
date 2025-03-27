{% if theme.copyright.enable %}
  <hr class="copy-line">
  <div class="post-copyright">
    <div class="copy-author">
      <span>{{ __('copyright.author') }} :</span>
      <span>{{ config.author }}</span>
    </div>
    <div class="copy-url">
      <span>{{ __('copyright.url') }} :</span>
      <a href="{{ page.permalink }}">{{ page.permalink }}</a>
    </div>
    <div class="copy-origin">
      <span>{{ __('copyright.origin') }} :</span>
      <a href="{{ config.url }}">{{ config.url }}</a>
    </div>
    <div class="copy-license">
      {% set license = page.license || theme.copyright.license || __('copyright.default') %}
      {{ license }}
    </div>
  </div>
{% endif %}