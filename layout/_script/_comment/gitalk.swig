{% if theme.comments.gitalk %}
<!-- Gitalk Comments -->
<div id="gitalk-container"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1.5.0/dist/gitalk.css">
<script src="https://cdn.jsdelivr.net/npm/gitalk@1.5.0/dist/gitalk.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/blueimp-md5@2.12.0/js/md5.min.js"></script>
<script>
var gitalk = new Gitalk({
  clientID: '{{theme.comments.gitalk.client_id}}',
  clientSecret: '{{theme.comments.gitalk.client_secret}}',
  owner: "{{theme.comments.gitalk.owner}}",
  repo: '{{theme.comments.gitalk.repo}}',
  admin: ['{{theme.comments.gitalk.admin}}'],
  title: '{{ page.title }}',
  id: md5(location.pathname),
  distractionFreeMode: false
})
gitalk.render('gitalk-container')
</script>
{% endif %}
