~function(window) {
  "use strict";

  function nlvi(config) {
    this.config = config;
  }

  nlvi.prototype.tools = function(tool) {
    var tools = {
      opreateClass: function(ele, cls, opt) {
        return opt === 'remove'
          ? $(ele).removeClass(cls)
          : $(ele).addClass(cls);
      },
      existClass: function(ele, cls) {
        return $(ele).hasClass(cls);
      },
      scroll: function(win) {
        return function(fn) {
          $(win).scroll(function() {
            var sct = $(win).scrollTop();
            fn && fn(sct);
          });
        }
      },
      animationEnd: function(ele, ani, fn) {
        $(ele)
          .addClass(ani)
          .one('webkitAnimationEnd AnimationEnd', function() {
            $(ele).removeClass(ani);
            fn.apply(ele);
          });
      }
    }
    return tools[tool];
  }

  nlvi.prototype.base = function() {
    var config = this.config.theme;
    var base = {
      isBanderole: function() {
        return config.scheme === 'banderole';
      },
      isBalance: function() {
        return config.scheme === 'balance';
      },
      closeAnimate: function() {
        return tools.opreateClass('.syuanpi', 'syuanpi', 'remove');
      }
    }
    return base;
  }

  nlvi.prototype.expect = function(ele) {
    var fns = {
      isDisplay: function() {
        return $(ele).css('display') === 'none';
      }
    }
    return fns;
  }

  nlvi.prototype.boot = function() {
    var tool = this.tools;
    var expect = this.expect;
    var theme = this.config.theme;
    var boot = {
      smoothScroll: function() {
        $('.toc-link').on('click', function() {
          $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 200
          });
        });
      },
      picPos: function() {
        $('.post-content').each(function() {
          $(this).find('img').each(function() {
            $(this).parent('p').css('text-align', 'center');
            var imgHead = "<img src='" + this.src;
            if (theme.lazy) {
              imgHead = "<img class='lazy' data-src='" + this.src;
            }
            $(this).replaceWith("<a href='" + this.src + "' data-title='" + this.alt + "' data-lightbox='group'>" + imgHead + "' alt='" + this.alt + "'></a>");
          });
        });
      },
      showComments: function() {
        $('#com-switch').on('click', function() {
          if (expect('#post-comments').isDisplay()) {
            $('#post-comments').css('display', 'block').addClass('syuanpi fadeInDown');
            $(this).removeClass('syuanpi').css('transform', 'rotate(180deg)');
          } else {
            $(this).addClass('syuanpi').css('transform', '');
            tool('opreateClass')('#post-comments', 'fadeInDown', 'remove');
            tool('animationEnd')('#post-comments', 'fadeOutUp', function() {
              $(this).css('display', 'none');
            });
          }
        });
      }
    };
    for (var i in boot) {
      boot[i]();
    }
  }

  nlvi.prototype.universal = function() {
    var tool = this.tools;
    var expect = this.expect;
    var config = this.config;
    var utils = {
      mobileHeader: function() {
        function resetMobileMenu() {
          $('.mobile-header').css({
            top: $('.mobile-header-nav').height() - $('.mobile-header').height()
          });
        }
        function closeMobileMenu() {
          tool('opreateClass')('#mobile-left', 'item-clicked', 'remove');
          resetMobileMenu();
        }
        function openMobileMenu() {
          tool('opreateClass')('#mobile-left', 'item-clicked');
          $('.mobile-header').css('top', '0');
        }
        resetMobileMenu();
        $('#mobile-left').on('click', function() {
          tool('existClass')(this, 'item-clicked')
            ? closeMobileMenu()
            : openMobileMenu();
        });
      },
      showToc: function() {
        var $toclink = $('.toc-link');
        var $headerlink = $('.headerlink');
        var scrollTop = tool('scroll')(window);
        scrollTop(function(sct) {
          var headerlinkTop = $.map($headerlink, function(link) {
            return $(link).offset().top;
          });
          $('.title-link a').each(function() {
            if (sct >= 0 && sct < 230) {
              tool('opreateClass')(this, 'active', 'add');
            } else {
              tool('opreateClass')(this, 'active', 'remove');
            }
          });

          for (var i = 0; i < $toclink.length; i++) {
            var isLastOne = i + 1 === $toclink.length,
              currentTop = headerlinkTop[i],
              nextTop = isLastOne
                ? Infinity
                : headerlinkTop[i + 1];

            if (currentTop < sct + 200 && sct + 200 <= nextTop) {
              tool('opreateClass')($toclink[i], 'active', 'add');
            } else {
              tool('opreateClass')($toclink[i], 'active', 'remove');
            }
          }
        });
      },
      titleStatus: function() {
        var title = document.title;
        var tme;
        document.addEventListener('visibilitychange', function() {
          var sct = Math.floor($(window).scrollTop() / ($(document).height() - $(window).height()) * 100);
          if ($(document).height() - $(window).height() === 0) sct = 100;
          if (document.hidden) {
            clearTimeout(tme);
            document.title = 'Read ' + sct + '% · ' + title;
          } else {
            document.title = 'Welcome Back · ' + title;
            tme = setTimeout(function() {
              document.title = title;
            }, 3000);
          }
        });
      },
      showReward: function () {
        $('#reward-btn').click(function () {
          if (expect('#reward-wrapper').isDisplay()) {
            $('#reward-wrapper').css('display', 'flex');
            tool('animationEnd')('#reward-wrapper', 'clarity');
          } else {
            tool('animationEnd')('#reward-wrapper', 'melt', function() {
              $(this).hide();
            })
          }
        });
      },
      search: function() {
        var $search = $('#search');
        var $mask = $('#mask');
        var $header = $('#search-header');
        var $input = $('#local-search-input');
        var $result = $('#local-search-result');

        $search.on('click', function() {
          $('.search').show();
          if ($('.search-wrapper').hasClass('syuanpi')) {
            $('.search-wrapper').addClass('clarity');
          }
        });
        $mask.on('click', function() {
          if ($('.search-wrapper').hasClass('syuanpi')) {
            tool('opreateClass')('.search-wrapper', 'clarity', 'remove');
            tool('animationEnd')('.search-wrapper', 'melt', function() {
              $('.search').hide();
            });
          } else
            $('.search').hide();
          }
        );
        $header.on('click', function() {
          if ($('.search-wrapper').hasClass('syuanpi')) {
            tool('opreateClass')('.search-wrapper', 'clarity', 'remove');
            tool('animationEnd')('.search-wrapper', 'melt', function() {
              $('.search').hide();
            });
          } else
            $('.search').hide();
          }
        );
        $.ajax({
          url: config.baseUrl + 'search.xml',
          dataType: 'xml',
          success: function(xmlResponse) {
            var searchData = $('entry', xmlResponse).map(function() {
              return {
                title: $('title', this).text(),
                content: $('content', this).text(),
                url: $('url', this).text()
              };
            }).get();

            $input.on('input', function(e) {
              if (!e.target.value.length) {
                $header.removeClass('slide');
                $input.removeClass('slide');
                $result.removeClass('slide');
                $header.removeClass('fadeOut').addClass('fadeIn');
                $result.html('');
              } else {
                $header.addClass('slide');
                $input.addClass('slide');
                $result.addClass('slide');
                $header.removeClass('fadeIn').addClass('fadeOut');
                $result.show();
                var str = '<ul class=\"search-result-list syuanpi back-1 fadeInUp\">';
                var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                $result.html('');
                if (this.value.trim().length <= 0) {
                  return;
                }
                searchData
                  .forEach(function(data) {
                    var isMatch = true;
                    var data_title = data.title.trim().toLowerCase();
                    var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
                    var data_url = data.url;
                    var index_title = -1;
                    var index_content = -1;
                    var first_occur = -1;
                    // only match artiles with not empty titles and contents
                    if (data_title != '' && data_content != '') {
                      keywords.forEach(function(keyword, i) {
                        index_title = data_title.indexOf(keyword);
                        index_content = data_content.indexOf(keyword);
                        if (index_title < 0 && index_content < 0) {
                          isMatch = false;
                        } else {
                          if (index_content < 0) {
                            index_content = 0;
                          }
                          if (i == 0) {
                            first_occur = index_content;
                          }
                        }
                      });
                    }
                    // show search results
                    if (isMatch) {
                      str += "<li class='search-result-item'><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
                      var content = data.content.trim().replace(/<[^>]+>/g, "");
                      if (first_occur >= 0) {
                        // cut out 100 characters
                        var start = first_occur - 20;
                        var end = first_occur + 80;
                        if (start < 0) {
                          start = 0;
                        }
                        if (start == 0) {
                          end = 100;
                        }
                        if (end > content.length) {
                          end = content.length;
                        }
                        var match_content = content.substr(start, end);
                        // highlight all keywords
                        keywords.forEach(function(keyword) {
                          var regS = new RegExp(keyword, "gi");
                          match_content = match_content.replace(regS, "<span class=\"search-keyword\">" + keyword + "</span>");
                        });

                        str += "<p class=\"search-result\">" + match_content + "...</p>";
                      }
                      str += "</li>";
                    }
                  });
                str += "</ul>";
                str += "<hr class='end-line'>";
                $result.html(str);
              }
            });
          }
        });
      }
    }
    return utils;
  }

  nlvi.prototype.bootstrap = function() {
    var config = this.config;
    var theme = config.theme;
    var utils = {};
    switch (true) {
      case this.base().isBalance():
        utils = this.balance();
        break;
      case this.base().isBanderole():
        utils = this.banderole();
        break;
    }
    this.boot();
    utils.titleStatus();
    utils.showToc();
    utils.back2top();
    utils.tagcloud();
    utils.switchToc();
    theme.reward && utils.showReward();
    theme.search && utils.search();
    theme.lazy && $('img.lazy').lazyload();

    $(document).ready(function() {
      $('.container').show();
      utils.mobileHeader();
    });
  }

  window.nlvi = nlvi;
}(window)
