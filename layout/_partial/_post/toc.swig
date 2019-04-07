{% if theme.toc %}
  <aside class="post-toc">
    <div class="title"><span>{{ __('page.index') }}</span></div>
    <div class="toc-inner">
      {{ toc(page.content, {list_number: false}) }}
    </div>
  </aside>
{% endif %}
