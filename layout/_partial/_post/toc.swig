{% if theme.toc %}
    <div class="post-toc">
        <span class="title">文章目录</span>
        <li class="title-link"><a href="javascript:;" class="toTop">{{page.title}}</a></li>
        {{ toc(page.content, {list_number: false}) }}
    </div>
{% endif %}