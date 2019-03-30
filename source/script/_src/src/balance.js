import Base from './base'

export default class Balance extends Base {
  constructor (config) {
    super(config)
    this.utils = Base.utils
  }

  back2top() {
    const backtop = this.utils('cls', '#backtop')
    backtop.opreate('melt', 'remove')
    this.scrollArr.push((sct) => {
      this.updateRound(sct)
    })
    super.back2top()
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
}
