<!DOCTYPE html>
<html lang="{{ config.language }}">
<head>
  {% include "_partial/head.swig" %}
  <title>{% block title %}{% endblock %}</title>
</head>
<body>
  {% include "_partial/progress.swig" %}
  
  {% if theme.scheme == 'banderole' %}
    {% include "_partial/tagcloud.swig" %}  
  {% endif %}

  <div class="container">

    {% include "_partial/header.swig" %}
    <div class="container-inner">
      <main class="main" id="main">
        <div class="main-wrapper">
          {% block main %} {% endblock %}
        </div>
      </main>

      {% include "./_partial/footer.swig" %}
    </div>
  </div>
  {% include "_partial/_feature/common.swig" %}
</body>
</html>
