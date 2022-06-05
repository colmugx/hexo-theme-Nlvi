import barba from '@barba/core';

barba.init({
  transitions: [{
    name: 'default-transition',
    leave(data) {
      // data.current.container.classList.add('syuanpi fadeOutLeftShort')
    },
    enter(data) {
      // data.current.container.classList.add('syuanpi fadeOutLeftShort')
    }
  }]
})
