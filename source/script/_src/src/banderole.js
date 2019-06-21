import Base from './base'
import { fromEvent } from 'rxjs'
import { throttleTime, map } from 'rxjs/operators'

export default class Banderole extends Base {
  constructor (config) {
    super(config)
    this.utils = Base.utils
  }

  pushHeader() {
    super.pushHeader()
    if (!this.utils('iss').banderole()) return
    const $header = this.utils('cls', '#header')
    fromEvent(window, 'wheel').pipe(
      throttleTime(500),
      map(({ deltaY }) => deltaY > 0)
    ).subscribe(v => $header.opreate('header-hide', v ? 'add' : 'remove'))
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
    if (!this.theme.toc) false
    const utils = this.utils
    const $inner = utils('cls', '.toc-inner')
    const $title = utils('cls', '.post-toc .title')
    const $container = utils('cls', '.container-inner')

    $('.post-toc .title').on('click', () => {
      if ($title.exist('show')) {
        $title.opreate('show', 'remove')
        $inner.opreate('show', 'remove')
        $container.opreate('has_toc', 'remove')
      } else {
        $title.opreate('show')
        $inner.opreate('show')
        $container.opreate('has_toc')
      }
    })
  }
}
