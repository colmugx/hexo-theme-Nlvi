nlvi.prototype.banderole = function() {
  var utils = this.universal();
  var tool = this.tools;
  utils.back2top = function() {
    var scrollTop = tool('scroll')(window);
    scrollTop(function(sct) {
      if (sct > 110) {
        tool('opreateClass')('#backtop', 'clarity', 'add');
        tool('opreateClass')('#backtop', 'melt', 'remove');
      } else {
        tool('opreateClass')('#backtop', 'melt', 'add');
        tool('opreateClass')('#backtop', 'clarity', 'remove');
      }
      var scrollPercentRounded = Math.floor(
        sct
        / ($(document).height() - $(this).height())
        * 100
      );
      $('#scrollpercent').html(scrollPercentRounded);
    });
    $('.toTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      });
    });
  }
  utils.switchToc = function() {
    function tocHide() {
      $('.toc-inner').addClass('fadeOutRight').one('webkitAnimationEnd AnimationEnd', function() {
        $(this).hide();
      });
    }
    $('.toc-inner').one('webkitAnimationEnd AnimationEnd', function() {
      tool('opreateClass')('.toc-inner', 'fadeInRight', 'remove');
      tool('opreateClass')('#toc-switch', 'not-toc');
    });
    tocHide();
    $('#toc-switch').on('click', function() {
      if (tool('existClass')(this, 'not-toc')) {
        tool('opreateClass')(this, 'not-toc', 'remove');
        tool('opreateClass')('.toc-inner', 'fadeOutRight', 'remove');
        tool('opreateClass')('.toc-inner', 'fadeInRight');
        $('.toc-inner').show();
        tool('opreateClass')('.container-inner', 'has_toc');
      } else {
        tocHide();
        tool('opreateClass')(this, 'not-toc');
        tool('opreateClass')('.container-inner', 'has_toc', 'remove');
      }
    })
  }
  utils.tagcloud = function() {
    $('#tags').on('click', function() {
      tool('opreateClass')('#tagcloud', 'show', 'add');
      tool('opreateClass')('.tagcloud-mask', 'show', 'add');
      tool('opreateClass')('.header', 'show', 'add');
    });
    $('.tagcloud-mask').on('click', function() {
      tool('opreateClass')('#tagcloud', 'show', 'remove');
      tool('opreateClass')('.tagcloud-mask', 'show', 'remove');
      tool('opreateClass')('.header', 'show', 'remove');
    });
    $('#mobile-tags').on('click', function () {
      $('.inner-cloud').css('transform', 'translateX(-96%)');
    });
  }
  return utils
}
