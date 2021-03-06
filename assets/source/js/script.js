import SoftScroll from './modules/soft-scroll.js'
import AnimationScroll from './modules/animation-scroll.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tabnav.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import Dropdown from './modules/dropdown.js'
import MenuMobile from './modules/menu-mobile.js'
import DateObject from './modules/date-object.js'
import fetchAnimal from './modules/fetch-animal.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import SlideNav from './modules/slide.js'

function preventPassive() {
  if (typeof EventTarget !== 'undefined') {
    const func = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function lala(type, fn, capture) {
      this.func = func;
      if (typeof capture !== 'boolean') {
        capture = capture || {};
        capture.passive = false;
      }
      this.func(type, fn, capture);
    };
  }
}

preventPassive()
const softScroll = new SoftScroll('[data-menu="soft"] a[href^="#"]')
softScroll.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init()

const modal = new Modal('[data-modal="show"]', '[data-modal="closer"]', '[data-modal="modal"]')
modal.init()

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

fetchAnimal('../assets/source/api/api-animal.json', '.grid-number')

fetchBitcoin('https://blockchain.info/ticker', '.btc-price')

const animationScroll = new AnimationScroll('[data-anime="scroll"]')
animationScroll.init()

const dropdown = new Dropdown('[data-dropdown]')
dropdown.init()

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]')
menuMobile.init()

const dateObject = new DateObject('[data-wek]', 'open')
dateObject.init()

const slide = new SlideNav('.slide', '.slide-wrapper')
slide.init()
slide.addControl('.custom-controls')
