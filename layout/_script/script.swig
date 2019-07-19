{{ js('https://unpkg.com/jquery@3.4.1/dist/jquery.js') }}

{% if theme.lightbox %}
  <script></script>
  <script src="{{ url_for('/') }}script/lib/lightbox/js/lightbox.min.js" async></script>
{% endif %}

{% if theme.mathjax %}
  <script src="https://unpkg.com/mathjax@2.7.5/unpacked/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
  <script type="text/x-mathjax-config;executed=true">MathJax.Hub.Config({tex2jax: {inlineMath: [["$","$"], ["\\(","\\)"]]}});</script>
{% endif %}

{% if theme.lazyload %}
  <script src="{{ url_for('/') }}script/lib/layzr/layzr.js" async></script>
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
