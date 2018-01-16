Nlvi.utils = {
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
    $('#mobile-tags').click(function () {
      $('.inner-cloud').css('transform', 'translateX(-96%)');
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

  search: function () {
    var $search = $('#search');
    var $mask = $('#mask');
    var $header = $('#search-header');
    var $input = $('#local-search-input');
    var $result = $('#local-search-result');

    $search.click(function () {
      $('.search').show();
      if ($('.search-wrapper').hasClass('syuanpi')) {
        $('.search-wrapper').addClass('bloom');
      }
    });
    $mask.click(function () {
      if ($('.search-wrapper').hasClass('syuanpi')) {
        $('.search-wrapper').removeClass('bloom').addClass('dead').one('webkitAnimationEnd AnimationEnd', function() {
          $(this).removeClass('dead');
          $('.search').hide();
        });
      } else $('.search').hide();
    });
    $header.click(function () {
      if ($('.search-wrapper').hasClass('syuanpi')) {
        $('.search-wrapper').removeClass('bloom').addClass('dead').one('webkitAnimationEnd AnimationEnd', function() {
          $(this).removeClass('dead');
          $('.search').hide();
        });
      } else $('.search').hide();
    });

    $.ajax({
      url: NlviConfig.baseUrl + 'search.xml',
      dataType: 'xml',
      success: function (xmlResponse) {
        var searchData = $('entry', xmlResponse).map(function () {
          return {
            title: $('title', this).text(),
            content: $('content', this).text(),
            url: $('url', this).text()
          };
        }).get();

        $input.on('input', function (e) {
          if (e.target.value.length = 0 || e.target.value == '') {
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
            var str = '<ul class=\"search-result-list syuanpi back-1 riseIn-light\">';
            var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
            $result.html('');
            if (this.value.trim().length <= 0) {
              return;
            }
            searchData.forEach(function (data) {
              var isMatch = true;
              var data_title = data.title.trim().toLowerCase();
              var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
              var data_url = data.url;
              var index_title = -1;
              var index_content = -1;
              var first_occur = -1;
              // only match artiles with not empty titles and contents
              if (data_title != '' && data_content != '') {
                keywords.forEach(function (keyword, i) {
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
                  keywords.forEach(function (keyword) {
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
    this.refreshSearch($header);
  },

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

  switchToc: function() {
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
        Nlvi.tools.opreateClass('.container-inner', 'has_toc');
      } else {
        tocHide();
        Nlvi.tools.opreateClass(this, 'not-toc');
        Nlvi.tools.opreateClass('.container-inner', 'has_toc', 'remove');
      }
    })
  },

  refreshSearch: function($header) {
    var nowDate = new Date();
    var hour = nowDate.getHours();
    if (hour >= 8 && hour < 11) {
      $header.html(GREETING.morning);
    } else if (hour >= 11 && hour < 13) {
      $header.html(GREETING.noon);
    } else if (hour >= 13 && hour < 18) {
      $header.html(GREETING.after);
    } else if (hour >= 18 && hour < 23) {
      $header.html(GREETING.night);
    } else if (hour >= 23 && hour < 1) {
      $header.html(GREETING.midnight);
    } else if (hour >= 1 && hour < 8) {
      $header.html(GREETING.midnight);
    }
  }
};
