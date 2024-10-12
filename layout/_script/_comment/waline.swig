{% if theme.comments.waline %}
<link rel="stylesheet" href="https://unpkg.com/@waline/client@v3/dist/waline.css" />
<div id="waline">
  <noscript>WalineJavaScript</noscript>
</div>
<script type="module">
  import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';

  init({
    el: '#waline',
    serverURL: '{{theme.comments.waline.serverURL}}',
    path: '{{theme.comments.waline.path}}',
    meta: {{theme.comments.waline.meta | json }},
    lang: '{{theme.comments.waline.lang}}',
    requiredMeta: {{theme.comments.waline.requiredMeta | json }},
    emoji: '{{theme.comments.waline.emoji}}',
    dark: '{{theme.comments.waline.dark}}',
    wordLimit: '{{theme.comments.waline.wordLimit}}',
    pageSize: '{{theme.comments.waline.pageSize}}',
  });
  </script>
{% endif %}
