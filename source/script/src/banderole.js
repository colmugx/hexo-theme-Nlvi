import Base from './base'

export default class Banderole extends Base {
  constructor (config) {
    super(config)
    this.utils = Base.utils
  }

  back2top() {
    const backtop = this.utils('cls', '#backtop')
    this.scrollArr.push(function(sct) {
      if (sct > 110) {
        backtop.opreate('clarity', 'add')
        backtop.opreate('melt', 'remove')
      } else {
        backtop.opreate('melt')
        backtop.opreate('clarity', 'remove')
      }
      var scrollPercentRounded = Math.floor(
        sct
        / ($(document).height() - $(window).height())
        * 100
      )
      $('#scrollpercent').html(scrollPercentRounded)
    })
    $('.toTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      })
    })
  }

  switchToc() {
    const utils = this.utils
    const tocSwitch = utils('cls', '#toc-switch')
    const aniInner = utils('ani', '.toc-inner')
    const clsInner = utils('cls', '.toc-inner')
    const container = utils('cls', '.container-inner')

    tocSwitch.opreate('not-toc')
    clsInner.opreate('back-1', 'remove')
    $('#toc-switch').on('click', () => {
      if (tocSwitch.exist('not-toc')) {
        tocSwitch.opreate('not-toc', 'remove')
        clsInner.opreate('fadeOutRight', 'remove')
        aniInner.end('fadeInRight')
        $('.toc-inner').show()
        container.opreate('has_toc')
      } else {
        aniInner.end('fadeOutRight', function() {
          $('.toc-inner').hide()
        })
        tocSwitch.opreate('not-toc')
        container.opreate('has_toc', 'remove')
      }
    })
  }

  tagcloud() {
    $('#tags').on('click', function() {
      tool('opreateClass')('#tagcloud', 'show', 'add')
      tool('opreateClass')('.tagcloud-mask', 'show', 'add')
      tool('opreateClass')('.header', 'show', 'add')
    })
    $('.tagcloud-mask').on('click', function() {
      tool('opreateClass')('#tagcloud', 'show', 'remove')
      tool('opreateClass')('.tagcloud-mask', 'show', 'remove')
      tool('opreateClass')('.header', 'show', 'remove')
    })
    $('#mobile-tags').on('click', function () {
      $('.inner-cloud').css('transform', 'translateX(-96%)')
    })
  }
}
