<div class="mobile-header">
  <div class="mobile-header-body">
    <div class="mobile-header-list">
      {% for name,url in theme.menu %}
        {% if name == 'tags' %}
          <div class="mobile-nav-item inner-cloud">
            <div class="mobile-nav-tag">
              <a href="javascript:;" id="mobile-tags">
                <span>{{ __('nav.' + name) }}</span>
                {% if config.language == '' || config.language == 'en' %}
                {% else %}
                    <span class="menu-item-label">{{ name }}</span>
                {% endif %}
              </a>
            </div>
            <div class="mobile-nav-tagcloud">
              <div class="mobile-tagcloud-inner">
                {{ tagcloud(site.tags, {
                    min_font: 14,max_font: 14,amount: 40
                }) }}
              </div>
            </div>
          </div>
        {% else %}
            <div class="mobile-nav-item">
                <a href="{{ url_for(url) }}">
                    <span>{{ __('nav.' + name) }}</span>
                    {% if config.language == '' || config.language == 'en' %}
                    {% else %}
                        <span class="menu-item-label">{{ name }}</span>
                    {% endif %}
                </a>
            </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
  <div class="mobile-header-nav">
    <div class="mobile-header-item" id="mobile-left">
      <div class="header-menu-item">
        <span class="header-menu-line"></span>
      </div>
    </div>
    <h1 class="mobile-header-title">
      <a href="/">{{config.title}}</a>
    </h1>
    <div class="mobile-header-item"></div>
  </div>
</div>