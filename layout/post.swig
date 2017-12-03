{% extends "_layout.swig" %}
{% import '_partial/post.swig' as postPage %}

{% block title %} {{ page.title }} · {{ config.title }} {% endblock %}

{% block main %}
    {{ postPage.render(page) }}
{% endblock %}