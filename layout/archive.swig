{% extends "_layout.swig" %}
{% import "_partial/archive.swig" as archivet %}

{% block title %}
  {% if page.archive %}
    {{ __('nav.archives') }} · {{ config.title }}
  {% elif page.tag %}
    {{ page.tag }} · {{ config.title }}
  {% endif %}
{% endblock %}

{% block main %}
<div class="main-inner" data-barba="container" data-barba-namespace="archive">
  {{ archivet.render() }}
</div>
{% endblock %}
