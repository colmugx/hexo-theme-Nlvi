{{ js('script/lib/jquery/jquery-3.2.1.min') }}


{% if theme.lightbox %}
    {{ js('script/lib/lightbox/js/lightbox.min') }}
{% endif %}

{% if theme.mathjax %}
    <script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax: {inlineMath: [["$","$"]]}});</script>
    <script src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
{% endif %}

{% if theme.plugins %}
    {% for plugin in theme.plugins %}
        {{js(plugin)}}
    {% endfor %}
{% endif %}

{{ js('script/src/nlvi') }}
{{ js('script/src/utils') }}
{{ js('script/src/plugins') }}
{{ js('script/bootstarp') }}
