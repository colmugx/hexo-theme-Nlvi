{% extends "_layout.swig" %}
{% import '_partial/post.swig' as postt %}

{% block title %} {{ page.title }} · {{ config.title }} {% endblock %}

{% block main %}
    {{ postt.render(page) }}
{% endblock %}