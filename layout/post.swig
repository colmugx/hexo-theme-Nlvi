{% extends "_layout.swig" %}
{% import '_partial/post.swig' as postPage %}

{% block title %} {{ page.title }} · {{ config.title }} {% endblock %}

{% block main %}
<div class="main-inner" data-barba="container" data-barba-namespace="post">
  {{ postPage.render(page) }}
</div>
{% endblock %}
