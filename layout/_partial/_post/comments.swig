{% if theme.comments.enable %}
    <i id="com-switch" class="iconfont icon-more syuanpi jumping-in long infinite" style="font-size:24px;display:block;text-align:center;"></i>
    <div class="post-comments" id="post-comments" style="display: none;margin: auto 16px;">
        {% include "../../_script/_comment/uyan.swig" %}
        {% include "../../_script/_comment/duoshuo.swig" %}
        {% include "../../_script/_comment/netease.swig" %}
        {% include "../../_script/_comment/disqus.swig" %}
    </div>
{% endif %}