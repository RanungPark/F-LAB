import createRouter from './router.js'

const contaniner = document.querySelector('main')
const pages = {
  home: () => contaniner.innerText = 'home page',
  melon: () => contaniner.innerText = 'melon page',
}

const router = createRouter();

router.addRoute('#/', pages.home)
      .addRoute('#/melon', pages.melon)
      .start();