{% if theme.reward.enable %}
  <div class="post-reward">
    <span class="reward-btn" id="reward-btn">{{ theme.reward.message or __('page.reward') }}</span>
    <div class="reward-wrapper syuanpi" id="reward-wrapper" style="display:none;">
      {% for name, value in theme.reward.qrcode %}
      <div class="reward-item {{ 'reward-' + name }}">
        {% if theme.lightbox %}
          <a href="{{ url_for(value) }}" data-title="{{ name }} qrcode" data-lightbox="group">
            <img src="{{ url_for(value) }}">
          </a>
        {% else %}
          <img src="{{ url_for(value) }}">
        {% endif %}
      </div>
      {% endfor %}
    </div>
  </div>
{% endif %}
