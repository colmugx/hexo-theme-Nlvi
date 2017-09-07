{% if theme.comments.type %}
    <i id="com-switch" class="iconfont icon-more jumping-in long infinite"
       style="font-size:24px;display:block;text-align:center;transform:rotate(180deg);"></i>
    <div class="post-comments" id="post-comments" style="display: block;margin: auto 16px;">
        {% if theme.comments.type === 'uyan' %}
            {% include "../../_script/_comment/uyan.swig" %}
        {% elseif theme.comments.type === 'gitment' %}
            {% include "../../_script/_comment/gitment.swig" %}
        {% elseif theme.comments.type === 'changyan' %}
            {% include "../../_script/_comment/changyan.swig" %}
        {% elseif theme.comments.type === 'disqus' %}
            {% include "../../_script/_comment/disqus.swig" %}
        {% endif %}
    </div>
{% endif %}