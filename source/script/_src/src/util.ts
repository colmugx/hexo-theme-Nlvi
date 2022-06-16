import { fromEvent, map, Subject, takeUntil } from 'rxjs'
import { Config } from './base'

export class Util {
  static instance: Util
  static getInstance(config: Config) {
    if (!this.instance) {
      this.instance = new Util(config)
    }

    return this.instance
  }

  constructor(private readonly config: Config) {}

  handleScroll(fnStore: Function[]) {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      takeUntil(new Subject().asObservable()),
      map(event => (<Element>event.target).scrollTop)
    )
    fnStore.length && scroll$.subscribe(next => fnStore.forEach(fn => fn(next)))
  }

  isDisplay(ele: HTMLElement) {
    return ele.offsetParent !== null
  }

  animationEnd(ele: Element, cls: string, callback?: Function) {
    ele.classList.add(...cls.split(' '))
    ele.addEventListener(
      'webkitAnimationEnd AnimationEnd',
      e => callback?.(e),
      { once: true }
    )
  }

  get isBanderole() {
    return this.config.theme.scheme === 'banderole'
  }

  get isBalance() {
    return this.config.theme.scheme === 'balance'
  }
}
