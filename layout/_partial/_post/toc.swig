{% if theme.toc %}
  <aside class="post-toc">
    <div class="toc-inner">
      {{ toc(page.content, {list_number: false}) }}
    </div>
  </aside>
{% endif %}
