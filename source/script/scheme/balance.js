if (Nlvi.base.isBalance()) {
  Nlvi.utils.back2top = function() {
    Nlvi.tools.opreateClass('#backtop', 'dead', 'remove');
    var scrollTop = Nlvi.tools.scroll(window);
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

  Nlvi.utils.switchToc = function() {
    function tocHide() {
      $('.toc-inner').addClass('riseOut-light').one('webkitAnimationEnd AnimationEnd', function() {
        $(this).hide();
      });
    }
    $('.toc-inner').one('webkitAnimationEnd AnimationEnd', function() {
      Nlvi.tools.opreateClass('.toc-inner', 'fallIn-light', 'remove');
      Nlvi.tools.opreateClass('#toc-switch', 'not-toc');
    });
    tocHide();
    $('#toc-switch').on('click', function() {
      if (Nlvi.tools.existClass(this, 'not-toc')) {
        Nlvi.tools.opreateClass(this, 'not-toc', 'remove');
        Nlvi.tools.opreateClass('.toc-inner', 'riseOut-light', 'remove');
        Nlvi.tools.opreateClass('.toc-inner', 'fallIn-light');
        $('.toc-inner').show();
        Nlvi.tools.opreateClass('.menu-item', 'has_toc');
        Nlvi.tools.opreateClass('.main-nav', 'has_toc');
      } else {
        tocHide();
        Nlvi.tools.opreateClass(this, 'not-toc');
        Nlvi.tools.opreateClass('.menu-item', 'has_toc', 'remove');
        Nlvi.tools.opreateClass('.main-nav', 'has_toc', 'remove');
      }
    })
  }

  Nlvi.utils.tagcloud = function() {
    function tagHide() {
      $('#tagcloud').addClass('dead').one('webkitAnimationEnd AnimationEnd', function() {
        $(this).hide();
        Nlvi.tools.opreateClass('#tagcloud', 'show syuanpi bloom dead', 'remove');
        Nlvi.tools.opreateClass('.menu-item', 'has_tag', 'remove');
        Nlvi.tools.opreateClass('.main-nav', 'has_tag', 'remove');
      });
    }
    $('#tags').on('click', function() {
      if (Nlvi.tools.existClass('#tagcloud', 'show')) {
        tagHide();
      } else {
        $('#tagcloud').show();
        Nlvi.tools.opreateClass('#tagcloud', 'show syuanpi bloom');
        Nlvi.tools.opreateClass('.menu-item', 'has_tag');
        Nlvi.tools.opreateClass('.main-nav', 'has_tag');
      }
    });
  }

  Nlvi.utils.refreshSearch = function() {}
}
