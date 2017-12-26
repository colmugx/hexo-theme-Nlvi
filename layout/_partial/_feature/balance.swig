{% include "../tagcloud.swig" %}
{% if is_post() %}
  {% include "../_post/toc.swig" %}
{% endif %}