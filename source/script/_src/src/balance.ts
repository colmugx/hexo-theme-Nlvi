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
    if (!this.theme.toc) false
    const utils = this.utils
    const $header = utils('cls', '#header')
    const $toc = utils('cls', '.post-toc')
    $('#switch-toc').on('click', e => {
      e.stopPropagation()
      $header.opreate('show_toc')
      $toc.opreate('hide', 'remove')
    })
    $('#header').on('click', () => {
      if ($header.exist('show_toc')) {
        $header.opreate('show_toc', 'remove')
        $toc.opreate('hide')
      }
    })
  }
}
