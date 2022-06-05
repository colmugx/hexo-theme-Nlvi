<link rel="dns-prefetch" href="//cdn.jsdelivr.net">

{% if theme.scheme == 'banderole' %}
  <link rel="preload" href="script/lib/nlvi/banderole.js" as="script">
{% else %}
  <link rel="preload" href="script/lib/nlvi/balance.js" as="script">
{% endif %}
