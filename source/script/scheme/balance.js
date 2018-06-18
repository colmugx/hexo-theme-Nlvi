nlvi.prototype.balance = function() {
  var utils = this.universal();
  var tool = this.tools;
  utils.back2top = function() {
    tool('opreateClass')('#backtop', 'melt', 'remove');
    var scrollTop = tool('scroll')(window);
    scrollTop(function(sct) {
      var scrollPercentRounded = Math.floor(
        sct
        / ($(document).height() - $(this).height())
        * 100
      );
      $('#scrollpercent').html(scrollPercentRounded);
    })
    $('.toTop').on('click', function() {
      $('html, body').animate({
        scrollTop: 0
      });
    });
  }
  utils.switchToc = function() {
    tool('opreateClass')('#toc-switch', 'not-toc');
    function opMenu(opt) {
      tool('opreateClass')('.menu-item', 'has_toc', opt);
      tool('opreateClass')('.main-nav', 'has_toc', opt);
    }
    $('#toc-switch').on('click', function() {
      if (tool('existClass')(this, 'not-toc')) {
        tool('opreateClass')(this, 'not-toc', 'remove');
        tool('animationEnd')('.toc-inner', 'fadeInDown')
        $('.toc-inner').show();
        opMenu();
      } else {
        tool('animationEnd')('.toc-inner', 'fadeOutUp', function() {
          $('.toc-inner').hide();
        });
        tool('opreateClass')(this, 'not-toc');
        opMenu('remove');
      }
    });
  }
  utils.tagcloud = function() {
    function tagHide() {
      $('#tagcloud').addClass('melt').one('webkitAnimationEnd AnimationEnd', function() {
        $(this).hide();
        tool('opreateClass')('#tagcloud', 'show syuanpi clarity melt', 'remove');
        tool('opreateClass')('.menu-item', 'has_tag', 'remove');
        tool('opreateClass')('.main-nav', 'has_tag', 'remove');
      });
    }
    $('#tags').on('click', function() {
      if (tool('existClass')('#tagcloud', 'show')) {
        tagHide();
      } else {
        $('#tagcloud').show();
        tool('opreateClass')('#tagcloud', 'show syuanpi clarity');
        tool('opreateClass')('.menu-item', 'has_tag');
        tool('opreateClass')('.main-nav', 'has_tag');
      }
    });
    $('#mobile-tags').on('click', function () {
      $('.inner-cloud').css('transform', 'translateX(-96%)');
    });
  }
  return utils
}
