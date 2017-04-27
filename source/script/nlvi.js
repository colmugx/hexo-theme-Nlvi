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
                });
            });

            $('#backtop').click(function() {
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
        }
    }

    this.Nlvi = Nlvi
}.call(this))
