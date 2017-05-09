{% if theme.comments.duoshuo %}
<div class="ds-thread" data-thread-key="{{ page.path }}" data-title="{{ page.title }}" data-url="{{ page.permalink }}">
</div>
<script type="text/javascript">
  var duoshuoQuery = {
    short_name: "{{theme.comments.duoshuo}}"
  };
  (function () {
    var ds = document.createElement('script');
    ds.type = 'text/javascript';
    ds.async = true;
    ds.id = 'duoshuo-script';
    ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]).appendChild(ds);
  })();
</script>
{% endif %}