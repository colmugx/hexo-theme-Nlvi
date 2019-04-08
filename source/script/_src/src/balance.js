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
    $('#switch-toc').on('click', e => {
      e.stopPropagation()
      $header.opreate('show_toc')
    })
    $('#header').on('click', () => {
      if ($header.exist('show_toc')) {
        $header.opreate('show_toc', 'remove')
      }
    })
  }
}
