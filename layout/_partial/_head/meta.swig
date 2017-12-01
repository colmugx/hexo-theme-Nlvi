<meta charset="UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<meta name="browsermode" content="application">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="{{config.title}}">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="msapplication-navbutton-color" content="#666666">
<meta name= "format-detection" content="telephone=no" />
<meta name="keywords" content="nlvi, Nlvi" />
{% if theme.favicon %}
  <link rel="apple-touch-icon"  sizes="72x72"  href="{{theme.favicon}}">
  <link rel="apple-touch-icon-precomposed"  sizes="72x72"  href="{{theme.favicon}}">
{% endif %}
{% if config.subtitle %}
  <meta name="subtitle" content="{{ config.subtitle }}">
{% endif %}
{% if config.description %}
  <meta name="description" content="{{ config.description }}">
{% endif %}
{% if config.keywords %}
  <meta name="keywords" content="{{ config.keywords }}" />
{% endif %}
{% if page.tags and page.tags.length %}
  <meta name="keywords" content="{% for tag in page.tags %}{{ tag.name }}, {% endfor %}Nlvi" />
{% endif %}