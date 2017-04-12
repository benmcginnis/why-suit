require('!style-loader!css-loader!./node_modules/reveal.js/css/reveal.css');
require(
  '!style-loader!css-loader!./node_modules/reveal.js/css/theme/white.css',
);
import Reveal from 'reveal.js';
const thanksMD = require('./slides/thank-you.md');
const thanks = require('./templates/thank-you.soy').thankYouList;
const thanksSlide = thanks({contents: thanksMD.__content, list: thanksMD.list});
document.getElementById('js-slides').insertAdjacentHTML('beforeEnd', thanksSlide);

Reveal.initialize();
