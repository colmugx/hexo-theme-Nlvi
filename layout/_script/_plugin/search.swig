{% if theme.search.enable %}
  <div class="search" id="search">
    <div class="mask" id="mask"></div>
    <div class="search-wrapper syuanpi">
      <h2 id="search-header" class="syuanpi">{{ theme.search.label }}</h2>
      <div class="input">
        <input type="text" id="local-search-input" results="0" name="">
      </div>
      <div id="local-search-result"></div>
    </div>
  </div>
{% endif %}
