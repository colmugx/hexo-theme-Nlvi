import anime from 'animejs'
import barba from '@barba/core'

export function init() {
  barba.init({
    preventRunning: true,
    prevent: ({ el }) => el.classList.contains('glightbox'),
    transitions: [
      {
        name: 'default',
        async leave({ current }) {
          return await anime({
            targets: current.container,
            translateX: -16,
            opacity: 0,
            duration: 375,
          }).finished
        },
        afterLeave() {
          window.scrollTo({
            top: 0,
          })
        },
      },
      {
        name: 'back',
        from: { namespace: 'post' },
        to: { namespace: 'home' },
        async leave({ current }) {
          return await anime({
            targets: current.container,
            translateX: 16,
            opacity: 0,
            duration: 375,
          }).finished
        },
      },
    ],
  })

  barba.hooks.afterEnter(() => {
    console.log('enter')
  })
}
