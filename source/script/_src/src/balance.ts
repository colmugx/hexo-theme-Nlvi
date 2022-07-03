import Base, { Config } from './base'

export default class Balance extends Base {
  constructor(config: Config) {
    super(config)
  }

  back2top() {
    super.back2top()
    const backTop = document.getElementById('backtop')
    backTop?.classList.remove('melt')

    this.scrollArr.push((sct: number) => {
      this.updateRound(sct)
    })
  }

  switchToc() {
    if (!this.theme.toc) return

    const header = document.getElementById('header')
    const toc = document.querySelector('.post-toc')

    document.getElementById('switch-toc')?.addEventListener('click', event => {
      event.stopPropagation()

      header?.classList.add('show_toc')
      toc?.classList.remove('hide')
    })

    header?.addEventListener('click', event => {
      event.stopPropagation()

      if (header.classList.contains('show_toc')) {
        header.classList.remove('show_toc')
        toc?.classList.add('hide')
      }
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
