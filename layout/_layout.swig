<!DOCTYPE html>
<html lang="{{ config.language }}">
<head>
  {% include "_partial/head.swig" %}
  <title>{% block title %}{% endblock %}</title>
</head>
<body>
  {% include "_partial/progress.swig" %}
  {% include "_partial/tagcloud.swig" %}
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
  {% include "_partial/feature.swig" %}
</body>
</html>
