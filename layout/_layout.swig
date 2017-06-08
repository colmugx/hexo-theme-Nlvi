<!DOCTYPE html>
<html lang="{{ config.language }}">
<head>
    <title>{% block title %}{% endblock %}</title>
    {% include "_partial/head.swig" %}
</head>
<body>
    {% include "_partial/progress.swig" %}
    <div class="body">
    {% include "_partial/tagcloud.swig" %}
    {% include "_partial/header.swig" %}
    <div class="container">
        <main class="main" id="main">
            {% block main %} {% endblock %}
        </main>
        {% include "_partial/footer.swig" %}
    </div>
    {% include "_script/script.swig" %}
    </div>
    {% if is_post() %}
        {% include "_partial/_post/toc.swig" %}
    {% endif %}
    {% include "_script/backtop.swig" %}
    {% include "_partial/_plugin/search.swig" %}
</body>
</html>
