Nlvi.utils = {
  back2top: function() {
    var scrollTop = Nlvi.tools.scroll(window);
    scrollTop(function(sct) {
      if (sct > 110) {
        Nlvi.tools.opreateClass('#backtop', 'bloom', 'add');
        Nlvi.tools.opreateClass('#backtop', 'dead', 'remove');
      } else {
        Nlvi.tools.opreateClass('#backtop', 'dead', 'add');
        Nlvi.tools.opreateClass('#backtop', 'bloom', 'remove');
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
  },

  mobileHeader: function() {
    function resetMobileMenu() {
      $('.mobile-header').css({
        top: $('.mobile-header-nav').height() - $('.mobile-header').height()
      });
    }
    function closeMobileMenu() {
      Nlvi.tools.opreateClass('#mobile-left', 'item-clicked', 'remove');
      resetMobileMenu();
    }
    function openMobileMenu() {
      Nlvi.tools.opreateClass('#mobile-left', 'item-clicked');
      $('.mobile-header').css('top', '0');
    }
    resetMobileMenu();
    $('#mobile-left').on('click', function() {
      Nlvi.tools.existClass(this, 'item-clicked')
        ? closeMobileMenu()
        : openMobileMenu();
    });
  },

  tagcloud: function() {
    $('#tags').on('click', function() {
      Nlvi.tools.opreateClass('#tagcloud', 'show', 'add');
      Nlvi.tools.opreateClass('.tagcloud-mask', 'show', 'add');
      Nlvi.tools.opreateClass('.header', 'show', 'add');
    });
    $('.tagcloud-mask').on('click', function() {
      Nlvi.tools.opreateClass('#tagcloud', 'show', 'remove');
      Nlvi.tools.opreateClass('.tagcloud-mask', 'show', 'remove');
      Nlvi.tools.opreateClass('.header', 'show', 'remove');
    });
  },

  showToc: function() {
    var $toclink = $('.toc-link');
    var $headerlink = $('.headerlink');
    var scrollTop = Nlvi.tools.scroll(window);
    scrollTop(function(sct) {
      var headerlinkTop = $.map($headerlink, function (link) {
        return $(link).offset().top;
      });
      $('.title-link a').each(function () {
        if (sct >= 0 && sct < 230) {
          Nlvi.tools.opreateClass(this, 'active', 'add');
        } else {
          Nlvi.tools.opreateClass(this, 'active', 'remove');
        }
      });

      for (var i = 0; i < $toclink.length; i++) {
        var isLastOne = i + 1 === $toclink.length,
          currentTop = headerlinkTop[i],
          nextTop = isLastOne ? Infinity : headerlinkTop[i + 1];

        if (currentTop < sct + 200 && sct + 200 <= nextTop) {
          Nlvi.tools.opreateClass($toclink[i], 'active', 'add');
        } else {
          Nlvi.tools.opreateClass($toclink[i], 'active', 'remove');
        }
      }
    });
  },

  titleStatus: function () {
    var title = document.title;
    var tme;
    document.addEventListener('visibilitychange', function () {
      var sct = Math.floor($(window).scrollTop() / ($(document).height() - $(window).height()) * 100);
      if ($(document).height() - $(window).height() === 0) sct = 100;
      if (document.hidden) {
        clearTimeout(tme);
        document.title = 'Read ' + sct + '% · ' + title;
      } else {
        document.title = 'Welcome Back · ' + title;
        tme = setTimeout(function () {
          document.title = title;
        }, 3000);
      }
    });
  },

};
