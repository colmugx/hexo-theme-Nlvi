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
    <div class="container {%if is_post() %} ispost {%endif%} ">
        <main class="main" id="main">
            {% block main %} {% endblock %}
        </main>

        {% block footer %}{% endblock %}
    </div>
    {% include "_script/script.swig" %}
    </div>
    {% include "_partial/feature.swig" %}
</body>
</html>
