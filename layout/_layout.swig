<!DOCTYPE html>
<html lang="{{ config.language }}">
<head>
  {% include "_partial/head.swig" %}
  <title>{% block title %}{% endblock %}</title>
</head>
<body>
  <div class="container" data-barba="wrapper">
    {% include "_partial/header.swig" %}
    <div class="container-inner">
      <main class="main">
        {% block main %} {% endblock %}
      </main>
      {% include "./_partial/footer.swig" %}
    </div>
    {% include "./_partial/tagcloud.swig" %}
  </div>
  {% include "_partial/_feature/common.swig" %}
</body>
</html>
