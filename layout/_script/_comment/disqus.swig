{% if theme.comments.disqus %}
<!-- Disqus Comments -->
<div id="disqus_thread">
    <noscript>Please enable JavaScript to view the <a href="//disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
</div>
<script type="text/javascript">
    var disqus_shortname = '{{theme.comments.disqus}}';

    (function(){
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    }());
</script>
{% endif %}
