{% extends "_layout.swig" %}

{% block title %}
  {{config.title}}
  {% if config.subtitle %}
    | {{ config.subtitle }}
  {% endif %}
{% endblock %}


{% block main %}
<div class="main-inner" data-barba="container" data-barba-namespace="home">
  {% include "_partial/main.swig" %}
  {% include "_partial/pagenum.swig" %}
</div>
{% endblock %}

