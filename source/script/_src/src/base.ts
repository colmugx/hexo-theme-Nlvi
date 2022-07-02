import { fromEvent, from, zip, map, switchMap, filter } from 'rxjs'
import genSearch from './search'
import { Util } from './util'
import './barba'

interface Theme {
  scheme: 'banderole' | 'balance'
  lightbox: boolean
  animate: boolean
  search: boolean | false
  friends: boolean
  reward: boolean
  pjax: boolean
  lazy: boolean
  toc: boolean
}

export interface Config {
  title: string
  author: string
  baseUrl: string
  theme: Theme
}

abstract class Base {
  private theme: Theme
  private scrollArr: any[]
  private util: Util

  constructor(private readonly config: Config) {
    this.theme = config.theme
    this.scrollArr = []
    this.util = Util.getInstance(config)
  }

  init() {
    const fns: (keyof Base)[] = ['showComments', 'picPos']
    fns.forEach(fn => (<any>this[fn]).apply(null))

    this.util.handleScroll(this.scrollArr)
  }

  showComments() {
    const comSwitch = document.getElementById('com-switch')
    comSwitch?.addEventListener('click', () => {
      const postComment = document.getElementById('post-comments')!

      if (!this.util.isDisplay(postComment)) {
        postComment.style.display = 'block'
        postComment.classList.add('syuanpi', 'fadeInDown')
        comSwitch.classList.remove('syuanpi')
        comSwitch.style.transform = 'rotate(180deg)'
      } else {
        comSwitch.style.transform = ''
        comSwitch.classList.add('syuanpi')
        postComment.classList.remove('fadeInDown')
        this.util.animationEnd(postComment, 'syuanpi fadeOutUp', () => {
          postComment.style.display = 'none'
          postComment.classList.remove('syuanpi', 'fadeOutUp')
        })
      }
    })
  }

  picPos() {
    // it will flash, todo
    document.querySelectorAll<HTMLElement>('.post-content').forEach(ele => {
      ele.querySelectorAll('img').forEach(img => {
        img.parentElement!.style.textAlign = 'center'
        let imgHead = `<img src="${img.src}"`
        if (this.theme.lazy) {
          imgHead = `<img data-src="${img.src}" class="lazyload" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+P///38ACfsD/QVDRcoAAAAASUVORK5CYII="`
        }
        img.outerHTML = `<a href="${img.src}" class="glightbox" data-title="${img.alt}" data-gallery="post">${imgHead} alt="${img.alt}"></a>`
      })
    })

    window.GLightbox()
  }

  back2top() {
    document.querySelector('.to-top')?.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    })
  }

  hideMobileHeader() {
    const header = document.getElementById('mobile-header')!
    this.scrollArr.push((sct: number) => {
      if (sct > 5) {
        header.classList.add('header-scroll')
      } else {
        header.classList.remove('header-scroll')
      }
    })
  }

  updateRound(sct: number) {
    const scrollPercentRounded = this.getPageProgress(sct)

    document.getElementById('scrollpercent')!.innerHTML =
      '' + Math.min(scrollPercentRounded, 100)
  }

  showToc() {
    const tocLinks = document.querySelectorAll('.toc-link')
    const headerLinks = document.querySelectorAll('.headerlink')

    this.scrollArr.push((sct: number) => {
      const scrollTops = [...headerLinks].map(link => link.scrollTop)

      document.querySelectorAll('.title-link a').forEach(ele => {
        ele.classList[sct >= 0 && sct < 230 ? 'add' : 'remove']('active')
      })

      tocLinks.forEach((link, index) => {
        const isLast = index === tocLinks.length
        const currentTop = scrollTops[index]
        const nextTop = isLast ? Infinity : scrollTops[index + 1]

        link.classList[
          currentTop < sct + 210 && sct + 210 <= nextTop ? 'add' : 'remove'
        ]('active')
      })
    })
  }

  titleStatus() {
    const title = document.title
    let timer: number
    document.addEventListener('visibilitychange', () => {
      const sct = Math.min(
        this.getPageProgress(
          (document.scrollingElement || document.documentElement).scrollTop
        ),
        100
      )

      if (document.hidden) {
        clearTimeout(timer)
        document.title = 'Read ' + sct + '% · ' + title
      } else {
        document.title = 'Welcome Back · ' + title
        timer = setTimeout(function () {
          document.title = title
        }, 3000)
      }
    })
  }

  showReward() {
    if (!this.theme.reward) return

    const button = document.getElementById('reward-btn')
    const wrapper = document.getElementById('reward-wrapper')

    button?.addEventListener('click', () => {
      if (this.util.isDisplay(wrapper!)) {
        this.util.animationEnd(wrapper!, 'melt', () => {
          wrapper?.classList.remove('melt')
          wrapper!.style.display = 'none'
        })
      } else {
        wrapper!.style.display = 'flex'
        this.util.animationEnd(wrapper!, 'clarity', () => {
          wrapper?.classList.remove('clarity')
        })
      }
    })
  }

  listenExit(ele?: Element, fn?: () => void) {
    fromEvent<KeyboardEvent>(ele!, 'keyup')
      .pipe(filter(event => event.code === 'Escape'))
      .subscribe(() => fn?.())
  }

  depth(open: () => void, close: () => void) {
    const container = document.body
    const containerInner = document.querySelector('.container-inner')

    if (container.classList.contains('under')) {
      container.classList.remove('under')
      containerInner?.classList.remove('under')
      close.apply(null)
    } else {
      container.classList.add('under')
      containerInner?.classList.add('under')
      open.apply(null)
    }
  }

  tagcloud() {
    const utils = this.utils
    const $tag = $('#tags')
    const $tagcloud = utils('cls', '#tagcloud')
    const $tagcloudAni = utils('ani', '#tagcloud')
    const $search = utils('cls', '#search')
    const $searchAni = utils('ani', '#search')
    const closeFrame = () => {
      $tagcloud.opreate('shuttleIn', 'remove')
      $tagcloudAni.end('zoomOut', () => {
        $tagcloud.opreate('syuanpi show', 'remove')
      })
    }
    const switchShow = () => {
      this.depth(() => $tagcloud.opreate('syuanpi shuttleIn show'), closeFrame)
    }
    this.listenExit($tag, switchShow)
    this.listenExit(
      document.querySelector('.tagcloud-taglist')!,
      switchShow
    )
    $tag.on('click', () => {
      if ($search.exist('show')) {
        $tagcloud.opreate('syuanpi shuttleIn show')
        $search.opreate('shuttleIn', 'remove')
        $searchAni.end('zoomOut', () => {
          $search.opreate('syuanpi show', 'remove')
        })
        return
      }
      switchShow()
    })
    $('#tagcloud').on('click', e => {
      e.stopPropagation()
      if (e.target.tagName === 'DIV') {
        this.depth(
          () => $tagcloud.opreate('syuanpi shuttleIn show'),
          closeFrame
        )
      }
    })
    const tags$ = fromEvent(
      document.querySelectorAll('.tagcloud-tag button'),
      'click'
    ).pipe(map(({ target }) => target))
    const postlist$ = from(document.querySelectorAll('.tagcloud-postlist'))
    const cleanlist$ = postlist$.pipe(
      map(dom => dom.classList.remove('active'))
    )
    const click$ = tags$.pipe(switchMap(() => cleanlist$))
    zip(click$, tags$)
      .pipe(
        map(([_, dom]) => dom),
        switchMap(v =>
          postlist$.pipe(
            filter(
              dom =>
                dom.firstElementChild.innerHTML.trim() === v.innerHTML.trim()
            )
          )
        )
      )
      .subscribe(v => v.classList.add('active'))
  }

  search() {
    if (!this.theme.search) return

    const utils = this.utils
    const $searchbtn = $('#search-btn')
    const $result = $('#search-result')
    const $search = utils('cls', '#search')
    const $searchAni = utils('ani', '#search')
    const $tagcloud = utils('cls', '#tagcloud')
    const $tagcloudAni = utils('ani', '#tagcloud')
    const closeFrame = () => {
      $search.opreate('shuttleIn', 'remove')
      $searchAni.end('zoomOut', () => {
        $search.opreate('syuanpi show', 'remove')
      })
    }
    const switchShow = () => {
      this.depth(() => $search.opreate('syuanpi shuttleIn show'), closeFrame)
    }
    this.listenExit(document.getElementById('search')!, switchShow)
    $searchbtn.on('click', () => {
      if ($tagcloud.exist('show')) {
        $search.opreate('syuanpi shuttleIn show')
        $tagcloud.opreate('shuttleIn', 'remove')
        $tagcloudAni.end('zoomOut', () => {
          $tagcloud.opreate('syuanpi show', 'remove')
        })
        return
      }
      switchShow()
    })
    $('#search').on('click', e => {
      e.stopPropagation()
      if (e.target.tagName === 'DIV') {
        this.depth(() => $search.opreate('syuanpi shuttleIn show'), closeFrame)
      }
    })
    genSearch(`${this.config.baseUrl}search.xml`, 'search-input').subscribe(
      vals => {
        const list = body =>
          `<ul class="search-result-list syuanpi fadeInUpShort">${body}</ul>`
        const item = ({ url, title, content }) => `
          <li class="search-result-item">
            <a href="${url}"><h2>${title}</h2></a>
            <p>${content}</p>
          </li>
        `
        const output = vals.map(item)
        $result.html(list(output.join('')))
      }
    )
  }

  headerMenu() {
    const utils = this.utils
    const $mobileMenu = utils('cls', '.mobile-header-body')
    const $haderline = utils('cls', '.header-menu-line')
    const $mtag = $('#mobile-tags')
    const $tagcloud = utils('cls', '#tagcloud')
    $mtag.on('click', () => {
      $mobileMenu.opreate('show', 'remove')
      $haderline.opreate('show', 'remove')
      $tagcloud.opreate('syuanpi shuttleIn show')
    })
    $('#mobile-left').on('click', () => {
      this.depth(
        () => {
          $mobileMenu.opreate('show')
          $haderline.opreate('show')
        },
        () => {
          $mobileMenu.opreate('show', 'remove')
          $haderline.opreate('show', 'remove')
        }
      )
    })
  }

  pjax() {
    if (!this.theme.pjax) return
    const utils = this.utils
    const $container = utils('cls', '.container-inner')
    const $header = utils('cls', '.header')
    const $headerWrapper = utils('cls', '.header-wrapper')
    $(document).pjax('.container-inner a', '.container-inner', {
      fragment: 'container-inner',
    })
    $(document).on('pjax:send', function () {
      $container.opreate('syuanpi fadeOutLeftShort')
      $headerWrapper.opreate('syuanpi fadeOutLeftShort')
      $header.opreate('melt')
    })
  }

  bootstarp() {
    this.showToc()
    this.back2top()
    this.titleStatus()
    this.init()
    this.hideMobileHeader()
    this.tagcloud()
    this.search()
    this.showReward()
    this.headerMenu()
    // this.pjax()
  }

  private getPageProgress(scrollTop: number): number {
    const documentHeight = document.body.clientHeight
    const windowHeight = window.innerHeight
    return Math.floor((scrollTop / (documentHeight - windowHeight)) * 100)
  }

  static utils(g, e) {
    const cls = ele => ({
      opreate(cls, opt) {
        return opt === 'remove' ? $(ele).removeClass(cls) : $(ele).addClass(cls)
      },
      exist(cls) {
        return $(ele).hasClass(cls)
      },
    })
    const iss = ele => ({
      banderole: () => {
        return this.theme.scheme === 'banderole'
      },
      balance: () => {
        return this.theme.scheme === 'balance'
      },
      display() {
        return $(ele).css('display') === 'none'
      },
    })
    const ani = ele => ({
      close() {
        return cls.opreate('.syuanpi', 'syuanpi', 'remove')
      },
      end(ani, fn) {
        $(ele)
          .addClass(ani)
          .one('webkitAnimationEnd AnimationEnd', function () {
            $(ele).removeClass(ani)
            fn && fn.apply(null, [ele])
          })
      },
    })
    return { cls, iss, ani }[g](e)
  }

  static opScroll(fns) {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      map(v => v.target.scrollingElement.scrollTop)
    )
    fns.length && scroll$.subscribe(next => fns.forEach(fn => fn(next)))
  }
}

export default Base
