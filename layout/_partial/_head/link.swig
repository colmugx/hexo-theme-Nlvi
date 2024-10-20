<link rel="apple-touch-startup-image" media="(device-width: 375px)" href="assets/apple-launch-1125x2436.png">
<link rel="apple-touch-startup-image" media="(orientation: landscape)" href="assets/apple-touch-startup-image-2048x1496.png">
{{ css('style/style') }}
{{ css('script/css/friends') }}
{% include "../../_script/config.swig" %}

{# lightbox #}
{% if theme.lightbox %}
    {{ css('script/lib/lightbox/css/lightbox.min') }}
{% endif %}

{# animation #}
{% if theme.animate %}
    {{ css('syuanpi/syuanpi.min') }}
{% endif %}

{# favicon #}
{% if theme.favicon %}
    <link rel="icon" href="{{ theme.favicon }}">
{% endif %}

{# rss #}
{% if theme.menu.rss %}
    <link rel="alternate" type="application/rss+xml" href="{{ url_for(theme.menu.rss) }}" />
{% endif %}

{# any analytics #}
{% include "../../_script/_analytics/google.swig" %}
{% include "../../_script/_analytics/baidu.swig" %}
{% include "../../_script/_analytics/busuanzi.swig" %}
