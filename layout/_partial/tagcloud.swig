<div class="tagcloud" id="tagcloud">
  <div class="tagcloud-taglist">
  {% for tag in site.tags %}
    <div class="tagcloud-tag">
      <button>{{ tag.name }}</button>
    </div>
  {% endfor %}
  </div>
  {% for tag in site.tags %}
    <div class="tagcloud-postlist {% if loop.first %}active{% endif %}">
      <h2>{{ tag.name }}</h2>
      {% for post in tag.posts %}
        <div class="tagcloud-post">
          <a href="{{ url_for('/') + post.path }}">
            <time class="tagcloud-posttime">{{ full_date(post.date, 'YYYY / MM / DD') }}</time>
            <span>{{ post.title }}</span>
          </a>
        </div>
      {% endfor %}
    </div>
  {% endfor %}
</div>
