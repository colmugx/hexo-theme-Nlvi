{% if theme.reward.enable %}
    <div class="post-reward">
        <span class="reward-btn" id="reward-btn">{{ __('page.reward') }}</span>
        <div class="reward-wrapper" id="reward-wrapper" style="display:none;">
            {% for name, value in theme.reward %}
                {% if name === 'enable' %}
                {% else %}
                <div class="reward-item {{ 'reward-' + name }}">
                    <img src="{{ url_for(value) }}">
                </div>
                {% endif %}
            {% endfor %}
        </div>
    </div>
{% endif %}