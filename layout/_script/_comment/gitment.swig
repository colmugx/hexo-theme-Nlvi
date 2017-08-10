{% if theme.comments.gitment %}
<!-- Gitment Comments -->
<div id="gitment"></div>
<link rel="stylesheet" href="https://imsun.github.io/gitment/style/default.css">
<script src="https://imsun.github.io/gitment/dist/gitment.browser.js"></script>
<script>
var gitment = new Gitment({
  owner: "{{theme.comments.gitment.owner}}",
  repo: '{{theme.comments.gitment.repo}}',
  oauth: {
    client_id: '{{theme.comments.gitment.client_id}}',
    client_secret: '{{theme.comments.gitment.client_secret}}',
  },
})
gitment.render('gitment')
</script>
{% endif %}