<div class="contact-icon">
    {% set github = 'https://github.com/' %}
    {% set weibo = 'https://weibo.com/' %}
    {% set twitter = 'https://twitter.com/' %}
    {% set zhihu = 'https://www.zhihu.com/people/' %}
    {% set facebook = 'https://www.facebook.com/' %}
    {% set linkedin = 'https://www.linkedin.com/in/' %}
    {% set instagram = 'https://www.instagram.com/' %}
    {% set douban = 'https://www.douban.com/people/' %}
    {% for name, path in theme.sub %}
        {% if name == 'github' %}
            <a href="{{ github + path }}" class="iconfont icon-social-{{ name }}" title="{{ name }}"></a>
        {% endif %}
        {% if name == 'weibo' %}
            <a href="{{ weibo + path }}" class="iconfont icon-social-{{ name }}" title="{{ name }}"></a>
        {% endif %}
        {% if name == 'twitter' %}
            <a href="{{ twitter + path }}" class="iconfont icon-social-{{ name }}" title="{{ name }}"></a>
        {% endif %}
        {% if name == 'zhihu' %}
            <a href="{{ zhihu + path }}" class="iconfont icon-{{ name }}" title="{{ name }}"></a>
        {% endif %}
        {% if name == 'facebook' %}
            <a href="{{ facebook + path }}" class="iconfont icon-social-{{ name }}" title="{{ name }}"></a>
        {% endif %}
        {% if name == 'linkedin' %}
            <a href="{{ linkedin + path }}" class="iconfont icon-social-{{ name }}" title="{{ name }}"></a>
        {% endif %}
        {% if name == 'instagram' %}
            <a href="{{ ins + path }}" class="iconfont icon-social-{{name}}" title="{{ name }}"></a>
        {% endif %}
        {% if name == 'douban' %}
            <a href="{{ douban + path }}" class="iconfont icon-social-{{name}}" title="{{ name }}"></a>
        {% endif %}
    {% endfor %}
</div>
