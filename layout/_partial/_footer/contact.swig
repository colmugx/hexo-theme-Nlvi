<div class="contact-icon">
    {% set github = 'https://github.com/' %}
    {% set weibo = 'https://weibo.com/' %}
    {% set twitter = 'https://twitter.com/' %}
    {% set zhihu = 'https://www.zhihu.com/people/' %}
    {% for name, path in theme.sub %}
        {% if name == 'github' %}
            <a href="{{github + path }}" class="iconfont icon-{{ name }}" title="{{ name }}"></a>
        {% endif %}
        {% if name == 'weibo' %}
            <a href="{{ weibo + path }}" class="iconfont icon-{{ name }}" title="{{ name }}"></a>
        {% endif %}
        {% if name == 'twitter' %}
            <a href="{{ twitter + path }}" class="iconfont icon-{{ name }}" title="{{ name }}"></a>
        {% endif %}
        {% if name == 'zhihu' %}
            <a href="{{ zhihu + path }}" class="iconfont icon-{{ name }}" title="{{ name }}"></a>
        {% endif %}
    {% endfor %}
</div>