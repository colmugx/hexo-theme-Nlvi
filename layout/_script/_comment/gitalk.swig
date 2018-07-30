{% if theme.comments.gitalk %}
<!-- Gitalk Comments -->
<div id="gitalk-container"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
  <script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/blueimp-md5@2.10.0/js/md5.min.js"></script>
<script>

var gitalk = new Gitalk({
  clientID: "{{theme.comments.gitalk.client_id}}",
  clientSecret: "{{theme.comments.gitalk.client_secret}}",
  repo: '{{theme.comments.gitalk.repo}}',
  owner: '{{theme.comments.gitalk.owner}}',
  admin: '{{theme.comments.gitalk.admin}}',
  id: md5(decodeURI(location.pathname)),
})
gitalk.render('gitalk-container')
</script>
{% endif %}
