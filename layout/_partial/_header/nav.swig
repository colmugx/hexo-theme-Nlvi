<nav class="main-nav syuanpi tvIn">
<div class="table">
{% if theme.menu %}
    <ul class="menu">
        {% if theme.search %}
        <li class="menu-item">
            <a href="javascript:;" id="search">
                <span>{{ __('nav.' + 'search') }}</span>
                {% if config.language == '' || config.language == 'en' %}
                {% else %}
                    <span class="menu-item-label">{{ 'search' }}</span>
                {% endif %}
            </a>
        </li>
        {% endif %}
        {% for name,url in theme.menu %}
        {% if name == 'tags' %}
            <li class="menu-item">
                <a href="javascript:;" id="tags">
                    <span>{{ __('nav.' + name) }}</span>
                    {% if config.language == '' || config.language == 'en' %}
                    {% else %}
                        <span class="menu-item-label">{{ name }}</span>
                    {% endif %}
                </a>
            </li>
        {% else %}
            <li class="menu-item">
                <a href="{{ url_for(url) }}">
                    <span>{{ __('nav.' + name) }}</span>
                    {% if config.language == '' || config.language == 'en' %}
                    {% else %}
                        <span class="menu-item-label">{{ name }}</span>
                    {% endif %}
                </a>
            </li>
        {% endif %}
        {% endfor %}
    </ul>
{% endif %}
</div>
</nav>
<div class="mobile-nav"></div>