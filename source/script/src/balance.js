import Base from './base'

export default class Balance extends Base {
  constructor (config) {
    super(config)
    this.utils = Base.utils
  }

  balance() {
    this.utils.back2top = function() {
      utils('cls', '#backtop').opreate('melt', 'remove')
      var scrollTop = this.utils('win', window).scroll()
      scrollTop(function(sct) {
        var scrollPercentRounded = Math.floor(
          sct
          / ($(document).height() - $(this).height())
          * 100
        )
        $('#scrollpercent').html(scrollPercentRounded)
      })
      $('.toTop').on('click', function() {
        $('html, body').animate({
          scrollTop: 0
        })
      })
    }
  }

  switchToc() {
    const utils = this.utils
    const tocSwitch = utils('cls', '#toc-switch')
    const aniInner = utils('ani', '.toc-inner')
    utils('cls', '#toc-switch').opreate('not-toc')
    function opMenu(opt) {
      utils('cls', '.menu-item').opreate('has_toc', opt)
      utils('cls', '.main-nav').opreate('has_toc', opt)
    }
    $('#toc-switch').on('click', () => {
      if (tocSwitch.exist('not-toc')) {
        tocSwitch.opreate('not-toc', 'remove')
        aniInner.end('fadeInDown')
        $('.toc-inner').show()
        opMenu()
      } else {
        aniInner.end('fadeOutUp', () => {
          $('.toc-inner').hide()
        })
        tocSwitch.opreate('not-toc')
        opMenu('remove')
      }
    })
  }

  tagcloud() {
    function tagHide() {
      $('#tagcloud').addClass('melt').one('webkitAnimationEnd AnimationEnd', function() {
        $(this).hide()
        tool('opreateClass')('#tagcloud', 'show syuanpi clarity melt', 'remove')
        tool('opreateClass')('.menu-item', 'has_tag', 'remove')
        tool('opreateClass')('.main-nav', 'has_tag', 'remove')
      })
    }
    $('#tags').on('click', function() {
      if (tool('existClass')('#tagcloud', 'show')) {
        tagHide()
      } else {
        $('#tagcloud').show()
        tool('opreateClass')('#tagcloud', 'show syuanpi clarity')
        tool('opreateClass')('.menu-item', 'has_tag')
        tool('opreateClass')('.main-nav', 'has_tag')
      }
    })
    $('#mobile-tags').on('click', function () {
      $('.inner-cloud').css('transform', 'translateX(-96%)')
    })
  }

}
