{{ js('script/lib/jquery/jquery-3.2.1.min') }}

{% if theme.lightbox %}
  {{ js('script/lib/lightbox/js/lightbox.min') }}
{% endif %}

{% if theme.mathjax %}
  <script src="https://cdn.bootcss.com/mathjax/2.7.4/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
  <script type="text/x-mathjax-config;executed=true">MathJax.Hub.Config({tex2jax: {inlineMath: [["$","$"], ["\\(","\\)"]]}});</script>
{% endif %}

{% if theme.lazyload %}
  {{ js('script/lib/layzr/layzr') }}
{% endif %}

{% if theme.pjax %}
  {{ js('script/lib/pjax/pjax') }}
{% endif %}

{% if theme.scheme == 'banderole' %}
  {{ js('script/scheme/banderole') }}
{% else %}
  {{ js('script/scheme/balance') }}
{% endif %}

{{ js('script/bootstarp') }}

{% if is_post() %}
<script>
if (nlviconfig.theme.toc) {
  setTimeout(function() {
    if (nlviconfig.theme.scheme === 'balance') {
      $("#header").addClass("show_toc");
    } else if (nlviconfig.theme.scheme === 'banderole') {
      $(".container-inner").addClass("has_toc");
      $(".post-toc .title").addClass("show");
      $(".toc-inner").addClass("show");
    }
  }, 1000);
}
</script>
{% endif %}
