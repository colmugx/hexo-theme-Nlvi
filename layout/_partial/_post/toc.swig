{% if theme.toc %}
  <aside class="post-toc">
    <span class="title" id="toc-switch"><span>{{ __('page.index') }}</span></span>
    <div class="toc-inner syuanpi back-1" style="display:none;">
      <li class="title-link"><a href="javascript:;" class="toTop">{{page.title}}</a></li>
      {{ toc(page.content, {list_number: false}) }}
    </div>
  </aside>
{% endif %}
