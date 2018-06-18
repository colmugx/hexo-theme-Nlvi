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
    tool('opreateClass')('#toc-switch', 'not-toc');
    tool('opreateClass')('.toc-inner', 'back-1', 'remove');
    $('#toc-switch').on('click', function() {
      if (tool('existClass')(this, 'not-toc')) {
        tool('opreateClass')(this, 'not-toc', 'remove');
        tool('opreateClass')('.toc-inner', 'fadeOutRight', 'remove');
        tool('animationEnd')('.toc-inner', 'fadeInRight');
        $('.toc-inner').show();
        tool('opreateClass')('.container-inner', 'has_toc');
      } else {
        tool('animationEnd')('.toc-inner', 'fadeOutRight', function() {
          $('.toc-inner').hide();
        });
        tool('opreateClass')(this, 'not-toc');
        tool('opreateClass')('.container-inner', 'has_toc', 'remove');
      }
    });
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
