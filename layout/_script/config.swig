<script>
  var nCONFIG = {
    title: "{{ config.title }}",
    author: "{{ config.author }}",
    theme: "{{ theme.scheme }}",
    lightbox: {{ theme.lightbox }},
    animate: {{ theme.animate }},
    baseUrl: {{ url_for('/') }},
    search: {{ theme.search }}
  }
</script>