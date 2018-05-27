{% if theme.friendLink %}
  <div class="friends" id="friends">
    <h3 class="title">{{ __('friendlink') }}</h3>
    <div class="friends-inner">
      {% for name, url in theme.friendLink %}
      <div class="friend-item">
        <a href="{{ url_for(url) }}">
          {{ name }}
        </a>
      </div>
    {% endfor %}
    </div>
  </div>
{% endif %}