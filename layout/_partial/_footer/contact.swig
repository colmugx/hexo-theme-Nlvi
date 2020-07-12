<div class="contact-icon">
  {% set urls = {
    github: 'https://github.com/',
    weibo: 'https://weibo.com/',
    twitter: 'https://twitter.com/',
    zhihu: 'https://www.zhihu.com/people/',
    facebook: 'https://www.facebook.com/',
    linkedin: 'https://www.linkedin.com/in/',
    instagram: 'https://www.instagram.com/',
    douban: 'https://www.douban.com/people/',
    yuque: 'https://www.yuque.com/',
    medium: 'https://medium.com/',
    mail: 'mailto:'
  } %}
  {% for name, path in theme.sub %}
    <a href="{{ urls[name] + path }}" class="iconfont icon-{{ name }}" title="{{ name }}"></a>
  {% endfor %}
</div>
