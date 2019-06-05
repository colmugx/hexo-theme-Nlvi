{% if theme.search.enable %}
  <div class="search" id="search">
    <div class="input">
      <input type="text" id="search-input" placeholder="{{ theme.search.label or '搜索' }}" autofocus>
    </div>
    <div id="search-result"></div>
  </div>
{% endif %}
