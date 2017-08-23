(function() {
    "use strict"
    var Nlvi = {
        tagcloud() {
            $('#tags').click(function() {
                $('#tagcloud').css({'transform': 'translateY(0px)', '-webkit-transform': 'translateY(0px)'})
                $('.tagcloud-mask').css({'background': 'rgba(0, 0, 0, 0.3)', 'z-index': '500'})
            })
            $('.tagcloud-mask').click(function() {
                $('#tagcloud').css('transform', '').css('-webkit-transform', '')
                $('.tagcloud-mask').css('background', '').css('z-index', '')
            })
            $('#mobile-tags').click(function() {
                $('.inner-cloud').css('transform', 'translateX(-96%)')
            })
        },

        mobileHeader() {
            var that = this
            $(window).scroll(function() {
                if ($(window).scrollTop() > $('#header').height()) {
                    $('.mobile-header').css('top', $('.mobile-header-nav').height() - $('.mobile-header').height())
                    $('#mobile-left').removeClass('item-clicked')
                    $('#tagcloud').hide()
                } else {
                    $('.mobile-header').css('top', '')
                    $('#tagcloud').show()
                }
            })
            $('#mobile-left').click(function() {
                if ($(this).hasClass('item-clicked')) {
                    return that.closeHeaderMenu()
                }
                return that.openHeaderMenu()
            })
        },

        closeHeaderMenu() {
            $('#mobile-left').removeClass('item-clicked')
            $('.mobile-header').css('top', $('.mobile-header-nav').height() - $('.mobile-header').height())
        },
        openHeaderMenu() {
            $('#mobile-left').addClass('item-clicked')
            $('.mobile-header').css('top', '0')
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

        smoothScroll() {
            $('.toc-link').click(function() {
                $('body').animate({ scrollTop: $($.attr(this, 'href')).offset().top - 200 })
            })
        },

        onView() {
            var title = document.title
            var tme
            document.addEventListener('visibilitychange', function() {
                var sct = Math.floor($(window).scrollTop() / ($(document).height() - $(window).height()) * 100)
                if ($(document).height() - $(window).height() === 0) sct = 100
                if (document.hidden) {
                    clearTimeout(tme)
                    document.title = 'Read '+sct+'% · '+document.title
                } else {
                    document.title = 'Welcome Back · ' + title
                    tme = setTimeout(function() {
                        document.title = title
                    }, 3000)
                }
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
                    var scrollPercentRounded = Math.floor(scrollPercent*100)
                    $('#scrollpercent').html(scrollPercentRounded)
                })
            })
            $('.toTop').click(function() {
                $('html, body').animate({ scrollTop: 0 })
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
                    return $(link).offset().top
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

                    if (currentTop < $scrollTop + 200 && $scrollTop + 200 <= nextTop) {
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
