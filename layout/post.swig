{% extends "_layout.swig" %}
{% import '_partial/post.swig' as postPage %}

{% block title %} {{ page.title }} · {{ config.title }} {% endblock %}

{% block main %}
<div class="main-inner" data-barba="container" data-barba-namespace="post">
  {{ postPage.render(page) }}
  {% if theme.prism %}
    <script src="{{ url_for('/') }}script/lib/prism/prism.js" async></script>
  {% endif %}
</div>
{% endblock %}
