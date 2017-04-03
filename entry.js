require('!style-loader!css-loader!./node_modules/reveal.js/css/reveal.css');
require(
  '!style-loader!css-loader!./node_modules/reveal.js/css/theme/white.css',
);
import Reveal from 'reveal.js';

const tyData = require('./slides/thank-you.md');
const thanks = require('./templates/thank-you.soy').thankYouList;
const slide = require('./templates/slide.soy').slide;

const data = {
  contents: thanks({ intro: tyData.__content, list: tyData.thankyous }),
};
document.getElementById('js-slides').innerHTML = slide(data);

Reveal.initialize();
