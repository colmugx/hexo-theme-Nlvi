{% if not is_post() %}
    <nav class="pagination">
        {{ paginator({
            prev_text: __("page.prev"),
            next_text: __("page.next")
        }) }}
    </nav>
{% else %}
    <nav class="article-page">
        {% if page.prev.path %}
            <a href="{{ url_for(page.prev.path) }}" id="art-left" class="art-right">
                <span class="next-title">
                    {{page.prev.title}}<i class="iconfont icon-right"></i> 
                </span>
            </a>
        {% endif %}
        {% if page.next.path %}
            <a href="{{ url_for(page.next.path) }}" id="art-right" class="art-left">
                <span class="prev-title"> 
                    <i class="iconfont icon-left"></i>{{ page.next.title }}
                </span>
            </a>
        {% endif %}
    </nav>
{% endif %}