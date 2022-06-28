{% if theme.comments.enable or page.comments %}
  <i id="com-switch" class="iconfont icon-down jumping infinite" style="font-size:24px;display:block;text-align:center;transform:rotate(180deg);animation-duration:2s;"></i>
  <div class="post-comments" id="post-comments" style="display: block;margin: auto 16px;">
    {% include "../../_script/_comment/gitalk.swig" %}
    {% include "../../_script/_comment/changyan.swig" %}
    {% include "../../_script/_comment/disqus.swig" %}
    {% include "../../_script/_comment/livere.swig" %}
  </div>
{% endif %}
