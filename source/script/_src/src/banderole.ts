import Base, { Config } from './base'
import { fromEvent, map, throttleTime } from 'rxjs'

export default class Banderole extends Base {
  constructor(config: Config) {
    super(config)
  }

  hideMobileHeader() {
    super.hideMobileHeader()
    if (this.util.isBanderole) return

    const header = document.getElementById('header')
    fromEvent<WheelEvent>(window, 'wheel')
      .pipe(
        throttleTime(500),
        map(({ deltaY }) => deltaY > 0)
      )
      .subscribe(value =>
        header?.classList[value ? 'add' : 'remove']('header-hide')
      )

    this.scrollArr.push((sct: number) => {
      header?.classList[sct > 50 ? 'add' : 'remove']('header-scroll')
    })
  }

  back2top() {
    super.back2top()

    const backTop = document.getElementById('backtop')
    this.scrollArr.push((sct: number) => {
      if (sct > 110) {
        backTop?.classList.replace('melt', 'clarity')
      } else {
        backTop?.classList.replace('clarity', 'melt')
      }

      this.updateRound(sct)
    })
  }

  switchToc() {
    if (!this.theme.toc) {
      return
    }

    const tocInner = document.querySelector('.toc-inner')
    const title = document.querySelector('.post-toc .title')
    const container = document.querySelector('.container-inner')

    title?.addEventListener('click', () => {
      const isShow = title.classList.contains('show')
      title.classList[isShow ? 'remove' : 'add']('show')
      tocInner?.classList[isShow ? 'remove' : 'add']('show')
      container?.classList[isShow ? 'remove' : 'add']('has_toc')
    })
  }

  bootstarp(): void {
    super.bootstarp()
    this.switchToc()
  }
}
