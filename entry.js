require('!style-loader!css-loader!./node_modules/highlightjs/styles/mono-blue.css');
require('!style-loader!css-loader!./node_modules/reveal.js/css/reveal.css');
require(
  '!style-loader!css-loader!./node_modules/reveal.js/css/theme/white.css',
);
import Highlight from 'highlightjs/highlight.pack.js';
Highlight.initHighlightingOnLoad();
import Reveal from 'reveal.js';
const thanksMD = require('./slides/thank-you.md');
const thanks = require('./templates/thank-you.soy').thankYouList;
const thanksSlide = thanks({contents: thanksMD.__content, list: thanksMD.list});
document.getElementById('js-slides').insertAdjacentHTML('beforeEnd', thanksSlide);

Reveal.initialize();
