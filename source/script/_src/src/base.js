import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

class Base {

  constructor(config) {
    this.config = config
    this.theme = config.theme
    this.scrollArr = []
  }

  init() {
    const utils = Base.utils
    const fns = {
      smoothScroll() {
        $('.toc-link').on('click', function() {
          $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 200
          })
        })
      },
      picPos() {
        const _this = this
        const instance = Layzr()
        $('.post-content').each(function() {
          $(this).find('img').each(function() {
            $(this).parent('p').css('text-align', 'center')
            let imgHead = `<img src="${this.src}"`
            if (_this.theme.lazy) {
              imgHead = `<img data-normal="${this.src}"`
            }
            $(this).replaceWith(`<a href="${this.src}" data-title="${this.alt}" data-lightbox="group">${imgHead} alt="${this.alt}"></a>`)
          })
        })
        instance
          .update()
          .handlers(true)
      },
      showComments() {
        $('#com-switch').on('click', () => {
          if (utils('iss', '#post-comments').display()) {
            $('#post-comments').css('display', 'block').addClass('syuanpi fadeInDown')
            $(this).removeClass('syuanpi').css('transform', 'rotate(180deg)')
          } else {
            $(this).addClass('syuanpi').css('transform', '')
            utils('cls', '#post-comments').opreate('fadeInDown', 'remove')
            utils('ani', '#post-comments').end('fadeOutUp', function() {
              $(this).css('display', 'none')
            })
          }
        })
      }
    }
    Base.opScroll(this.scrollArr)
    return Object.values(fns).forEach(fn => fn.call(this))
  }

  back2top() {
    $('.toTop').on('click', function() {
      $('html, body').animate({
        scrollTop: 0
      })
    })
  }

  pushHeader() {
    const $header = this.utils('cls', '#mobile-header')
    this.scrollArr.push(sct => {
      if (sct > 5) {
        $header.opreate('header-scroll', 'add')
      } else {
        $header.opreate('header-scroll', 'remove')
      }
    })
  }

  updateRound(sct) {
    const scrollPercentRounded = Math.floor(
      sct
      / ($(document).height() - $(window).height())
      * 100
    )
    $('#scrollpercent').html(scrollPercentRounded)
  }

  showToc() {
    const utils = Base.utils
    const $toclink = $('.toc-link')
    const $headerlink = $('.headerlink')
    this.scrollArr.push(function(sct) {
      const headerlinkTop = $.map($headerlink, function(link) {
        return $(link).offset().top
      })
      $('.title-link a').each(function() {
        const ele = utils('cls', this)
        sct >= 0 && sct < 230
          ? ele.opreate('active')
          : ele.opreate('active', 'remove')
      })
      for (let i = 0; i < $toclink.length; i++) {
        const
          isLastOne = i + 1 === $toclink.length,
          currentTop = headerlinkTop[i],
          nextTop = isLastOne
            ? Infinity
            : headerlinkTop[i + 1],
          $tl = utils('cls', $toclink[i])
        currentTop < sct + 210 && sct + 210 <= nextTop
          ? $tl.opreate('active')
          : $tl.opreate('active', 'remove')
      }
    })
  }

  titleStatus() {
    const title = document.title
    var tme
    document.addEventListener('visibilitychange', function() {
      const sct = Math.floor($(window).scrollTop() / ($(document).height() - $(window).height()) * 100)
      if ($(document).height() - $(window).height() === 0) sct = 100
      if (document.hidden) {
        clearTimeout(tme)
        document.title = 'Read ' + sct + '% · ' + title
      } else {
        document.title = 'Welcome Back · ' + title
        tme = setTimeout(function() {
          document.title = title
        }, 3000)
      }
    })
  }

  showReward() {
    const utils = Base.utils
    const $btn = utils('ani', '#reward-btn')
    $('#reward-btn').click(() => {
      if (utils('iss', '#reward-btn')) {
        $('#reward-wrapper').css('display', 'flex')
        $btn.end('clarity')
      } else {
        $btn.end('melt', () => {
          $('#reward-wrapper').hide()
        })
      }
    })
  }

  pjax() {

  }

  static utils(g, e) {
    const cls = ele => ({
      opreate(cls, opt) {
        return opt === 'remove'
          ? $(ele).removeClass(cls)
          : $(ele).addClass(cls)
      },
      exist(cls) {
        return $(ele).hasClass(cls)
      }
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
      }
    })
    const ani = ele => ({
      close() {
        return cls.opreate('.syuanpi', 'syuanpi', 'remove')
      },
      end(ani, fn) {
        $(ele)
          .addClass(ani)
          .one('webkitAnimationEnd AnimationEnd', function() {
            $(ele).removeClass(ani)
            fn && fn.call(null, ele)
          })
      }
    })
    return { cls, iss, ani }[g](e)
  }

  static opScroll(fns) {
    const scroll$ = fromEvent(window, 'scroll')
      .pipe(
        map(v => v.target.scrollingElement.scrollTop)
      )
    fns.length && scroll$.subscribe(next => fns.forEach(fn => fn(next)))
  }
}


export default Base
