{% include "_script/script.swig" %}

{% if is_post() %}
    {% include "_partial/_post/toc.swig" %}
{% endif %}

{% include "_script/backtop.swig" %}
{% include "_partial/_plugin/search.swig" %}