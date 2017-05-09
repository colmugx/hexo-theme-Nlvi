{% if theme.comments.netease %}
    <div class="cloud-tie-wrapper" id="cloud-tie-wrapper"></div>
    <script>
      var cloudTieConfig = {
          url: document.location.href,
          sourceId: "",
          productKey: "{{ theme.comments.netease }}",
          target: "cloud-tie-wrapper"
      };
    </script>
    <script src="https://img1.cache.netease.com/f2e/tie/yun/sdk/loader.js"></script>
{% endif %}