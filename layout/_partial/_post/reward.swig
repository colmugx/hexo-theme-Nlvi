{% if theme.reward.enable %}
  <div class="post-reward">
    <span class="reward-btn" id="reward-btn">{{ theme.reward.message or __('page.reward') }}</span>
    <div class="reward-wrapper syuanpi" id="reward-wrapper" style="display:none;">
      {% for name, value in theme.reward.qrcode %}
      <div class="reward-item {{ 'reward-' + name }}">
        {% if theme.lightbox %}
          <a href="{{ url_for(value.url) }}" data-title="{{ value.message }}" data-lightbox="{{ name }}">
            <img src="{{ url_for(value.url) }}">
          </a>
        {% else %}
          <img src="{{ url_for(value.url) }}">
        {% endif %}
      </div>
      {% endfor %}
    </div>
  </div>
{% endif %}
