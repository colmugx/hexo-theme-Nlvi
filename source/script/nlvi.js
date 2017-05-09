(function() {
    "use strict"
    var Nlvi = {
        tagcloud() {
            $('#tags').click(function() {
                $('.body').each(function() {
                    if ($(this).hasClass('show-tag')) {
                        $(this).removeClass('show-tag')
                    } else {
                        $(this).addClass('show-tag')
                    }
                })
            })
        },

        offAnimate() {
            $('.syuanpi').removeClass('syuanpi')
        },

        onPicBox () {
            $('.post-content').each(function() {
                $(this).find('img').each(function() {
                    $(this).replaceWith("<a href='" + this.src + "' data-title='" + this.alt + "' data-lightbox='group'><img src='" + this.src + "' alt='" + this.alt + "'></a>")
                })
            })
        },

        back2top() {
            $(window).each(function() {
                $(this).scroll(function() {
                    if($(this).scrollTop() > 110) {
                        $('#backtop').addClass('bloom').removeClass('dead')
                    } else {
                        $('#backtop').addClass('dead').removeClass('bloom')
                    }

                    var scrollTop = $(window).scrollTop()
                    var docHeight = $(document).height()
                    var winHeight = $(window).height()
                    var scrollPercent = (scrollTop) / (docHeight - winHeight)
                    var scrollPercentRounded = Math.round(scrollPercent*100)
                    $('#scrollpercent').html(scrollPercentRounded)
                });
            });
            $('.toTop').click(function() {
                $('body').animate({ scrollTop: 0 })
            })
        },

        showComments() {
            $('#com-switch').click(function() {
                if ($('#post-comments').css('display') == 'none') {
                    $('#post-comments').css('display', 'block').addClass('syuanpi fallIn-light')
                    $(this).removeClass('syuanpi').css('transform', 'rotate(180deg)')
                } else {
                    $(this).addClass('syuanpi').css('transform', '')
                    $('#post-comments').removeClass('fallIn-light').addClass('riseOut-light').one('webkitAnimationEnd AnimationEnd', function() {
                        $(this).removeClass('syuanpi riseOut-light').css('display', 'none')
                    })
                }
            })
        },

        showReward() {
            $('#reward-btn').click(function () {
                if($('#reward-wrapper').css('display') == 'none') {
                    $('#reward-wrapper').css('display', 'flex').addClass('syuanpi fallIn-light')
                } else {
                    $('#reward-wrapper').removeClass('fallIn-light').addClass('riseOut-light').one('webkitAnimationEnd AnimationEnd', function() {
                        $(this).removeClass('syuanpi riseOut-light').css('display', 'none')
                    })
                }
            })
        },

        showToc() {
            var $toclink = $('.toc-link')
            var $headerlink = $('.headerlink')
            var h = 30

            $(window).scroll(function () {
                var $scrollTop = $(window).scrollTop()
                var headerlinkTop = $.map($headerlink, function (link) {
                    return $(link).offset().top;
                })
                $('.title-link a').each(function () {
                    if($scrollTop >= 0 && $scrollTop < 230) {
                        $(this).addClass('active')
                    } else {
                        $(this).removeClass('active')
                    }
                })

                for (var i = 0; i < $toclink.length; i++) {
                    var isLastOne = i + 1 === $toclink.length,
                        currentTop = headerlinkTop[i],
                        nextTop = isLastOne ? Infinity : headerlinkTop[i + 1]

                    if (currentTop < $scrollTop && $scrollTop <= nextTop) {
                        $($toclink[i]).addClass('active')
                    } else {
                        $($toclink[i]).removeClass('active')
                    }
                }
            })
        }
    }

    this.Nlvi = Nlvi
}.call(this))
