import './style.css'
import './quote.css'
import Alpine from 'alpinejs'
import LoveCounter from './love-counter';
import persist from '@alpinejs/persist'
import Quotes from './quotes';
window.Alpine = Alpine

document.querySelector('#app').innerHTML =   
`"I 💚 Alpine JS!" <br></br> `

document.querySelector('.enzo').innerHTML =   
`"I 💚 Alpine JS!" <br></br> `


Alpine.data('loveCounter', LoveCounter);
Alpine.plugin(persist)
Alpine.data('quoteApp', Quotes)


Alpine.start()

