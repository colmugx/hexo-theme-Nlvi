{% if theme.comments.enable or page.comments %}
  <i id="com-switch" class="iconfont icon-down jumping-in long infinite" style="font-size:24px;display:block;text-align:center;transform:rotate(180deg);"></i>
  <div class="post-comments" id="post-comments" style="display: block;margin: auto 16px;">
    {% include "../../_script/_comment/gitalk.swig" %}
    {% include "../../_script/_comment/changyan.swig" %}
    {% include "../../_script/_comment/disqus.swig" %}
    {% include "../../_script/_comment/livere.swig" %}
    {% include "../../_script/_comment/waline.swig" %}
  </div>
{% endif %}
