{% if theme.friendLink %}
<div class="friend-links">
  {% for friend in theme.friendLink %}
  <div class="friend" title="{{ friend.intro }}"> <!-- 使用title属性来显示简介 -->
    <a href="{{ url_for(friend.link) }}" target="_blank" rel="noopener">
      <div class="friend-content">
        <img src="{{ url_for(friend.avatar) }}" alt="{{ friend.name }}" onerror="this.onerror=null; this.src='{{ url_for(theme.friendLink.onerror_avatar) }}'" />
        <div class="friend-info">
          <p class="link-title">{{ friend.name }}</p>
        </div>
      </div>
    </a>
  </div>
  {% endfor %}
</div>
{% endif %}
