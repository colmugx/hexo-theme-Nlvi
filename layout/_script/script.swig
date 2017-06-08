{{ js('script/nlvi') }}
{{ js('script/search') }}
{% if theme.lightbox %}
    {{ js('lightbox/js/lightbox.min') }}
{% endif %}
<script>
$(document).ready(function(){
    document.body.addEventListener('touchstart', function () {});
    $('.progress').hide();
    $('.body').show();
    Nlvi.tagcloud();
    Nlvi.back2top();
    Nlvi.showToc();
    Nlvi.showComments();
    Nlvi.showReward();

    !CONFIG.animate && Nlvi.offAnimate();
    CONFIG.lightbox && Nlvi.onPicBox();
})
</script>