(function () {
  Nlvi.search = function () {
    var $search = $('#search')
    var $mask = $('#mask')
    var $header = $('#search-header')
    var $input = $('#local-search-input')
    var $result = $('#local-search-result')

    $search.click(function () {
      $('.search').show();
      $('.search-wrapper').addClass('bloom')
    })
    $mask.click(function () {
      $('.search-wrapper').removeClass('bloom').addClass('dead').one('webkitAnimationEnd AnimationEnd', function() {
        $(this).removeClass('dead');
        $('.search').hide();
      })
    })
    $header.click(function () {
      $('.search-wrapper').removeClass('bloom').addClass('dead').one('webkitAnimationEnd AnimationEnd', function() {
        $(this).removeClass('dead');
        $('.search').hide();
      })
    })

    var nowDate = new Date()
    var hour = nowDate.getHours()
    if (hour >= 8 && hour < 11) {
      $header.html(GREETING.morning)
    } else if (hour >= 11 && hour < 13) {
      $header.html(GREETING.noon)
    } else if (hour >= 13 && hour < 18) {
      $header.html(GREETING.after)
    } else if (hour >= 18 && hour < 23) {
      $header.html(GREETING.night)
    } else if (hour >= 23 && hour < 1) {
      $header.html(GREETING.midnight)
    } else if (hour >= 1 && hour < 8) {
      $header.html(GREETING.midnight)
    }

    $.ajax({
      url: '/search.xml',
      dataType: 'xml',
      success: function (xmlResponse) {
        var searchData = $('entry', xmlResponse).map(function () {
          return {
            title: $('title', this).text(),
            content: $('content', this).text(),
            url: $('url', this).text()
          };
        }).get();

        $input.on('input', function () {
          $header.addClass('slide')
          $input.addClass('slide')
          $result.addClass('slide')
          $header.addClass('fadeOut')
          $result.show();
          var str = '<ul class=\"search-result-list syuanpi back-1 riseIn-light\">';
          var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
          $result.html('');
          if (this.value.trim().length <= 0) {
            return;
          }
          searchData.forEach(function (data) {
            var isMatch = true;
            var content_index = [];
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

                str += "<p class=\"search-result\">" + match_content + "...</p>"
              }
              str += "</li>";
            }
          });
          str += "</ul>";
          str += "<hr class='end-line'>";
          $result.html(str);
        })
      }
    })
  }
})()
