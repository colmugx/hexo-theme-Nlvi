~function(window, fn) {
  "use strict";

  var tools = fn();
  var Nlvi = {};
  Nlvi.base = {
    isBanderole: function() {
      return NlviConfig.theme === 'banderole';
    },

    isBalance: function () {
      return NlviConfig.theme === 'balance';
    },

    closeAnimate: function() {
      return tools.opreateClass('.syuanpi', 'syuanpi', 'remove');
    },

  };

  Nlvi.boot = function() {
    var boot = {
      smoothScroll: function() {
        $('.toc-link').click(function() {
          $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 200
          });
        });
      },
      picPos: function() {
        $('.post-content').each(function() {
          $(this).find('img').each(function() {
            $(this).parent('p').css('text-align', 'center');
            $(this).replaceWith("<a href='" + this.src + "' data-title='" + this.alt + "' data-lightbox='group'><img src='" + this.src + "' alt='" + this.alt + "'></a>");
          });
        });
      },
      showComments: function() {
        $('#com-switch').click(function() {
          if ($('#post-comments').css('display') == 'none') {
            $('#post-comments').css('display', 'block').addClass('syuanpi fallIn-light');
            $(this).removeClass('syuanpi').css('transform', 'rotate(180deg)');
          } else {
            $(this).addClass('syuanpi').css('transform', '');
            $('#post-comments').removeClass('fallIn-light').addClass('riseOut-light').one('webkitAnimationEnd AnimationEnd', function() {
              $(this).removeClass('syuanpi riseOut-light').css('display', 'none');
            });
          }
        });
      },
    };
    for (var i in boot) {
      boot[i]();
    }
  };

  Nlvi.tools = tools;

  window.Nlvi = Nlvi;
}(window, function() {
  var tools = {};

  tools.opreateClass = function (ele, cls, opt) {
    return opt === 'remove'
      ? $(ele).removeClass(cls)
      : $(ele).addClass(cls);
  };

  tools.existClass = function (ele, cls) {
    return $(ele).hasClass(cls);
  };

  tools.scroll = function (win) {
    return function(fn) {
      $(win).scroll(function() {
        var sct = $(win).scrollTop();
        fn && fn(sct);
      });
    };
  };

  return tools;
});
