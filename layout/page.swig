{% extends "_layout.swig" %}
  {% block title %}
    {{config.title}}
    {% if config.subtitle %}
      | {{ config.subtitle }}
    {% endif %}
  {% endblock %}

  {% block main %}
    {% if page.type === 'about' %}
      <div class="about syuanpi fadeInUp">
        <h2 class="title"> {{ __('nav.about') }} </h2>
        <div class="content">
          {% if theme.self %}
            {{ theme.self }}
          {% else %}
            {{ page.content }}
          {% endif %}
        </div>
      </div>
      {% include "_partial/friendlink.swig" %}
      {% include "_partial/_post/comments.swig" %}
    {% else %}
      {{ page.content }}
    {% endif %}
  {% endblock %}
