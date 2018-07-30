{% extends "_layout.swig" %}
{% import '_partial/post.swig' as postPage %}
  {% block title %}
    {{config.title}}
    {% if config.subtitle %}
      | {{ config.subtitle }}
    {% endif %}
  {% endblock %}

  {% block main %}
    {{ postPage.render(page) }}
    {% if page.type === 'about' %}
      {% include "_partial/friendlink.swig" %}
    {% endif %}
    {% include "_partial/_post/comments.swig" %}
  {% endblock %}