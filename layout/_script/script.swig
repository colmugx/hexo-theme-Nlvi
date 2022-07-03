<script src="//cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js" async></script>

{% if theme.lightbox %}
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script src="//cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js" defer></script>
{% endif %}

{% if theme.mathjax %}
  <script src="//cdn.jsdelivr.net/npm/mathjax@2.7.7/unpacked/MathJax.js?config=TeX-AMS-MML_HTMLorMML" defer></script>
  <script type="text/x-mathjax-config;executed=true">MathJax.Hub.Config({tex2jax: {inlineMath: [["$","$"], ["\\(","\\)"]]}});</script>
{% endif %}

{% if theme.mathjax3 %}
  <script src="//polyfill.io/v3/polyfill.min.js?features=es6" defer></script>
  <script>
    MathJax = {
      tex: {
        tags: 'ams'
      }
    };
  </script>
  <script id="MathJax-script" async src="//cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" defer></script>
{% endif %}

{% if theme.scheme == 'banderole' %}
  <script src="{{ url_for('/') }}script/lib/nlvi/banderole.js" defer></script>
{% else %}
  <script src="{{ url_for('/') }}script/lib/nlvi/balance.js" defer></script>
{% endif %}

<script src="{{ url_for('/') }}script/bootstrap.js" defer></script>

{% if theme.lazyload %}
  <script src="//cdn.jsdelivr.net/npm/lazysizes@5.1.1/lazysizes.min.js" async></script>
{% endif %}

{% if is_post() %}
<script>
if (nlviconfig.theme.toc) {
  setTimeout(function() {
    if (nlviconfig.theme.scheme === 'balance') {
      document.getElementById('header') && document.getElementById('header').classList.add('show_toc')
    } else if (nlviconfig.theme.scheme === 'banderole') {
      document.getElementById('container-inner') && document.getElementById('container-inner').classList.add('has_toc')
      document.querySelector('.post-toc .title') && document.querySelector('.post-toc .title').classList.add('show')
      document.querySelector('.toc-inner') && document.querySelector('.toc-inner').classList.add('show')
    }
  }, 1000);
}
</script>
{% endif %}
