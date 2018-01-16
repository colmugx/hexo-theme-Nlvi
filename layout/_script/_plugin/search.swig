{% if theme.search %}
  <div class="search" id="search">
    <div class="mask" id="mask"></div>
    <div class="search-wrapper syuanpi">
      <h2 id="search-header" class="syuanpi">搜索一下？</h2>
      <div class="input">
        <input type="text" id="local-search-input" results="0" name="">
      </div>
      <div id="local-search-result"></div>
    </div>
  </div>
  <script>
  if (NlviConfig.theme === 'banderole') {
    var GREETING = {
      morning: "{{ theme.greetings.morning }}",
      noon: "{{ theme.greetings.noon }}",
      after: "{{ theme.greetings.after }}",
      night: "{{ theme.greetings.night }}",
      midnight: "{{ theme.greetings.midnight }}"
    }
  }
  </script>
{% endif %}