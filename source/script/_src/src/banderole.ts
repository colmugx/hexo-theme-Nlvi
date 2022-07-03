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

    // check
    const isPost = document.querySelector('article.is_post')

    const switchToc = document.getElementById('switch-toc')
    const tocInner = document.querySelector('.toc-inner')
    const container = document.querySelector('.container-inner')

    switchToc!.style.display = isPost ? 'flex' : 'none'

    switchToc?.addEventListener('click', () => {
      const isShow = tocInner?.classList.contains('show')
      tocInner?.classList[isShow ? 'remove' : 'add']('show')
      container?.classList[isShow ? 'remove' : 'add']('has_toc')
    })
  }

  bootstarp() {
    super.bootstarp()
    this.switchToc()
  }

  reload() {
    super.reload()
    this.switchToc()
  }
}
