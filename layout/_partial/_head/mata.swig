<meta charset="UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="#999999">
<meta name="msapplication-navbutton-color" content="#666666">
<meta name="keywords" content="nlvi, Nlvi" />
<meta name="viewport" content="user-scalable=no">
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