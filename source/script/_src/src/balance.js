import { fromEvent, from, zip } from 'rxjs'
import { map, switchMap, filter } from 'rxjs/operators'
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

  tagcloud() {
    const utils = this.utils
    const $tag = $('#tags')
    const $container = utils('cls', 'body')
    const $tagcloud = utils('cls', '#tagcloud')
    const $tagcloudAni = utils('ani', '#tagcloud')
    const $containerInner = utils('cls', '.container-inner')
    $tag.on('click', () => {
      if ($container.exist('under')) {
        $container.opreate('under', 'remove')
        $containerInner.opreate('under', 'remove')
        $tagcloud.opreate('shuttleIn', 'remove')
        $tagcloudAni.end('zoomOut', () => {
          $tagcloud.opreate('syuanpi show', 'remove')
        })
      } else {
        $container.opreate('under', 'add')
        $containerInner.opreate('under', 'add')
        $tagcloud.opreate('syuanpi shuttleIn show')
      }
    })
    const tags$ = fromEvent(document.querySelectorAll('.tagcloud-tag button'), 'click').pipe(
      map(({ target }) => target)
    )
    const postlist$ = from(document.querySelectorAll('.tagcloud-postlist'))
    const cleanlist$ = postlist$.pipe(map(dom => dom.classList.remove('active')))
    const click$ = tags$.pipe(switchMap(() => cleanlist$))
    zip(click$, tags$).pipe(
      map(([_, dom]) => dom),
      switchMap(v => postlist$.pipe(
        filter(dom => dom.firstElementChild.innerHTML === v.innerHTML)
      ))
    ).subscribe(v => v.classList.add('active'))
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
