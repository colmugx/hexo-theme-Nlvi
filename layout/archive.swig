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
    {{ archivet.render() }}
{% endblock %}