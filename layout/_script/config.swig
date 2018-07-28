<script>
  var nlviconfig = {
    title: "{{ config.title }}",
    author: "{{ config.author }}",
    baseUrl: "{{ url_for('/') }}",
    theme: {
      scheme: "{{ theme.scheme }}",
      lightbox: {{ theme.lightbox }},
      animate: {{ theme.animate }},
      search: {{ theme.search.enable or false }},
      friends: {{ Boolean(theme.friendLink) }},
      reward: {{ theme.reward.enable or false }},
      lazy: {{ theme.lazyload }}
    }
  }
</script>
