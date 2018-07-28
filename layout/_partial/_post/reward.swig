{% if theme.reward.enable %}
  <div class="post-reward">
    <span class="reward-btn" id="reward-btn">{{ theme.reward.message or __('page.reward') }}</span>
    <div class="reward-wrapper syuanpi" id="reward-wrapper" style="display:none;">
      {% for name, value in theme.reward.qrcode %}
      <div class="reward-item {{ 'reward-' + name }}">
        <img src="{{ url_for(value) }}">
      </div>
      {% endfor %}
    </div>
  </div>
{% endif %}
