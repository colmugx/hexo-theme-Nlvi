{{ js('script/lib/jquery/jquery-3.2.1.min') }}

{% if theme.lightbox %}
  {{ js('script/lib/lightbox/js/lightbox.min') }}
{% endif %}

{% if theme.mathjax %}
  <script src="https://cdn.bootcss.com/mathjax/2.7.4/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
  <script type="text/x-mathjax-config;executed=true">MathJax.Hub.Config({tex2jax: {inlineMath: [["$","$"], ["\\(","\\)"]]}});</script>
{% endif %}

{% if theme.lazyload %}
  {{ js('script/lib/lazyload/lazyload.min') }}
{% endif %}

{% if theme.plugins %}
  {% for plugin in theme.plugins %}
    {{js(plugin)}}
  {% endfor %}
{% endif %}

{{ js('script/src/nlvi') }}
{% if theme.scheme == 'banderole' %}
  {{ js('script/scheme/banderole') }}
{% else %}
  {{ js('script/scheme/balance') }}
{% endif %}
{{ js('script/bootstarp') }}
