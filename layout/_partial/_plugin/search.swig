{% if theme.search %}
    <div class="search" id="search">
        <div class="mask" id="mask"></div>
        <div class="search-wrapper syuanpi">
            <h1 id="search-header" class="syuanpi">搜索一下？</h1>
            <div class="input">
                <input type="text" id="local-search-input" results="0" name="">
            </div>
            <div id="local-search-result"></div>
        </div>
    </div>
    <script>
    var GREETING = {
        morning: "{{ theme.greetings.morning }}",
        noon: "{{ theme.greetings.noon }}",
        after: "{{ theme.greetings.after }}",
        night: "{{ theme.greetings.night }}",
        midnight: "{{ theme.greetings.midnight }}"
    }
    $(document).ready(function(){
        Nlvi.search();
    });
    </script>
{% endif %}