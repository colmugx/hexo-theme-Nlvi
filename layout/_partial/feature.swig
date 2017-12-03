{% include "../_script/script.swig" %}

{% if is_post() %}
    {% include "_post/toc.swig" %}
{% endif %}

{% include "../_script/backtop.swig" %}
{% include "../_script/_plugin/search.swig" %}