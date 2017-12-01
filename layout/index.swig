{% extends "_layout.swig" %}

{% block title %}
  {{config.title}}
  {% if config.subtitle %}
    | {{ config.subtitle }}
  {% endif %}
{% endblock %}


{% block main %}
  {% include "_partial/main.swig" %}
  {% include "_partial/pagenum.swig" %}
{% endblock %}

