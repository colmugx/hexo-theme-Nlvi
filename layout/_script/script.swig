{{ js('https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js') }}

{% if theme.lightbox %}
  <script></script>
  <script src="{{ url_for('/') }}script/lib/lightbox/js/lightbox.min.js" async></script>
{% endif %}

{% if theme.mathjax %}
  <script src="https://cdn.jsdelivr.net/npm/mathjax@2.7.7/unpacked/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
  <script type="text/x-mathjax-config;executed=true">MathJax.Hub.Config({tex2jax: {inlineMath: [["$","$"], ["\\(","\\)"]]}});</script>
{% endif %}

{% if theme.mathjax3 %}
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script>
    MathJax = {
      tex: {
        tags: 'ams'
      }
    };
  </script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
{% endif %}

{% if theme.lazyload %}
  <script src="https://cdn.jsdelivr.net/npm/lazysizes@5.1.1/lazysizes.min.js" async></script>
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
