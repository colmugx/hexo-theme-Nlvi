import Base from './base'

export default class Banderole extends Base {
  constructor (config) {
    super(config)
    this.utils = Base.utils
  }

  pushHeader() {
    super.pushHeader()
    if (!this.utils('iss').banderole()) return
    const $header = this.utils('cls', '#header')
    this.scrollArr.push(sct => {
      if (sct > 50) {
        $header.opreate('header-scroll', 'add')
      } else {
        $header.opreate('header-scroll', 'remove')
      }
    })
  }

  back2top() {
    const backtop = this.utils('cls', '#backtop')
    this.scrollArr.push((sct) => {
      if (sct > 110) {
        backtop.opreate('clarity', 'add')
        backtop.opreate('melt', 'remove')
      } else {
        backtop.opreate('melt')
        backtop.opreate('clarity', 'remove')
      }
      this.updateRound(sct)
    })
    super.back2top()
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
}
