import { fromEvent, from, zip, map, switchMap, filter } from 'rxjs'
import genSearch from './search'
import { Util } from './util'
import { init as barbaInit } from './barba'

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
  protected theme: Theme
  protected scrollArr: any[]
  protected util: Util

  constructor(protected readonly config: Config) {
    this.theme = config.theme
    this.scrollArr = []
    this.util = Util.getInstance(config)
  }

  init() {
    const fns: (keyof Base)[] = ['showComments', 'picPos']
    fns.forEach(fn => (<any>this[fn]).apply(this))

    this.util.handleScroll(this.scrollArr)
  }

  showComments() {
    const comSwitch = document.getElementById('com-switch')
    comSwitch?.addEventListener('click', () => {
      const postComment = document.getElementById('post-comments')!

      if (!this.util.isDisplay(postComment)) {
        postComment.style.setProperty('display', 'block')
        postComment.classList.add('syuanpi', 'fadeInDown')
        comSwitch.classList.remove('syuanpi')
        comSwitch.style.setProperty('transform', 'rotate(180deg)')
      } else {
        comSwitch.style.setProperty('transform', 'rotate(180deg)')
        comSwitch.classList.add('syuanpi')
        postComment.classList.remove('fadeInDown')
        this.util.animationEnd(postComment, 'syuanpi fadeOutUp', () => {
          postComment.style.setProperty('display', 'nnone')
          postComment.classList.remove('syuanpi', 'fadeOutUp')
        })
      }
    })
  }

  picPos() {
    // it flash, todo
    document.querySelectorAll<HTMLElement>('.post-content').forEach(ele => {
      ele.querySelectorAll('img').forEach(img => {
        img.parentElement?.style.setProperty('textAlign', 'center')
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
          wrapper?.style.setProperty('display', 'none')
        })
      } else {
        wrapper?.style.setProperty('display', 'flex')
        this.util.animationEnd(wrapper!, 'clarity', () => {
          wrapper?.classList.remove('clarity')
        })
      }
    })
  }

  listenExit(ele: Element | null, fn?: () => void) {
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
    const tag = document.getElementById('tags')
    const tagcloud = document.getElementById('tagcloud')
    const search = document.getElementById('search')

    const closeFrame = () => {
      tagcloud?.classList.remove('shuttleIn')
      this.util.animationEnd(tagcloud, 'zoomOut', () => {
        tagcloud?.classList.remove('zoomOut', 'syuanpi', 'show')
      })
    }

    const switchShow = () => {
      this.depth(() => {
        tagcloud?.classList.add('syuanpi', 'shuttleIn', 'show')
      }, closeFrame)
    }

    this.listenExit(tag, switchShow)
    this.listenExit(document.querySelector('.tagcloud-taglist'), switchShow)

    tag?.addEventListener('click', () => {
      if (search?.classList.contains('show')) {
        tagcloud?.classList.add('syuanpi', 'shuttleIn', 'show')
        search.classList.remove('shuttleIn')
        this.util.animationEnd(search, 'zoomOut', () => {
          search.classList.remove('zoomOut', 'syuanpi', 'show')
        })

        return
      }

      switchShow()
    })

    tagcloud?.addEventListener('click', event => {
      event.stopPropagation()

      if ((<Element>event.target).tagName === 'DIV') {
        this.depth(() => {
          tagcloud.classList.add('syuanpi', 'shuttleIn', 'show')
        }, closeFrame)
      }
    })

    const tags$ = fromEvent(
      document.querySelectorAll('.tagcloud-tag button'),
      'click'
    ).pipe(map(({ target }) => target))
    const postList$ = from(document.querySelectorAll('.tagcloud-postlist'))
    const cleanList$ = postList$.pipe(
      map(dom => dom.classList.remove('active'))
    )
    const click$ = tags$.pipe(switchMap(() => cleanList$))

    zip(click$, tags$)
      .pipe(
        map(([_, dom]) => dom),
        switchMap(target =>
          postList$.pipe(
            filter(
              dom =>
                dom.firstElementChild?.innerHTML.trim() ===
                (<Element>target).innerHTML.trim()
            )
          )
        )
      )
      .subscribe(v => v.classList.add('active'))
  }

  search() {
    if (!this.theme.search) return

    const search = document.getElementById('search')
    const searchBtn = document.getElementById('search-btn')
    const searchInput = document.getElementById(
      'search-input'
    ) as HTMLInputElement
    const searchResult = document.getElementById('search-result')
    const tagcloud = document.getElementById('tagcloud')

    const closeFrame = () => {
      search?.classList.remove('shuttleIn')
      this.util.animationEnd(search, 'zoomOut', () => {
        search?.classList.remove('zoomOut', 'syuanpi', 'show')
        searchInput.value = ''
      })
    }

    const switchShow = () => {
      this.depth(() => {
        search?.classList.add('syuanpi', 'shuttleIn', 'show')
        searchInput.focus()
      }, closeFrame)
    }

    this.listenExit(search, switchShow)

    searchBtn?.addEventListener('click', () => {
      if (tagcloud?.classList.contains('show')) {
        search?.classList.add('syuanpi', 'shuttleIn', 'show')
        tagcloud.classList.remove('shuttleIn')
        this.util.animationEnd(tagcloud, 'zoomOut', () => {
          tagcloud.classList.remove('zoomOut', 'syuanpi', 'show')
        })

        return
      }

      switchShow()
    })

    search?.addEventListener('click', event => {
      event.stopPropagation()

      if ((<Element>event.target).tagName === 'DIV') {
        this.depth(() => {
          search.classList.add('syuanpi', 'shuttleIn', 'show')
        }, closeFrame)
      }
    })

    genSearch(`${this.config.baseUrl}search.xml`, 'search-input').subscribe(
      vals => {
        const list = (body: string) =>
          `<ul class="search-result-list syuanpi fadeInUpShort">${body}</ul>`

        const item = ({
          url,
          title,
          content,
        }: {
          [key: string]: string | null
        }) => `
          <li class="search-result-item">
            <a href="${url}"><h2>${title}</h2></a>
            <p>${content}</p>
          </li>
        `

        const output = vals.map(item)
        searchResult!.innerHTML = list(output.join(''))
      }
    )
  }

  mobileHeader() {
    const menu = document.querySelector('.mobile-header-body')
    const headerline = document.querySelector('.header-menu-line')
    const tag = document.getElementById('mobile-tags')
    const tagcloud = document.getElementById('tagcloud')

    tag?.addEventListener('click', () => {
      menu?.classList.remove('show')
      headerline?.classList.remove('show')
      tagcloud?.classList.add('syuanpi', 'shuttleIn', 'show')
    })

    document.getElementById('mobile-left')?.addEventListener('click', () => {
      this.depth(
        () => {
          menu?.classList.add('show')
          headerline?.classList.add('show')
        },
        () => {
          menu?.classList.remove('show')
          headerline?.classList.remove('show')
        }
      )
    })
  }

  pjax() {
    if (!this.theme.pjax) return

    barbaInit()
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
    this.mobileHeader()
    this.pjax()
  }

  reload() {
    this.showComments()
  }

  private getPageProgress(scrollTop: number): number {
    const documentHeight = document.body.scrollHeight
    const windowHeight = window.innerHeight
    return Math.floor((scrollTop / (documentHeight - windowHeight)) * 100)
  }
}

export default Base
