require('!style-loader!css-loader!./node_modules/reveal.js/css/reveal.css');
require(
  '!style-loader!css-loader!./node_modules/reveal.js/css/theme/white.css',
);
import Reveal from 'reveal.js';
function requireAll(context) {
  return context.keys().map(context);
}

let slides = requireAll(require.context('./slides', false, /.md$/));
slides = slides.sort((a, b) => {
  return a.order - b.order;
});
const slide = require('./templates/slide.soy').slide;
const thanks = require('./templates/thank-you.soy').thankYouList;
const knownTemplates = { 'slide': slide, 'thanks': thanks };

slides.forEach(slideContent => {
  const dataObj = { contents: slideContent.__content };
  Object.assign(dataObj, slideContent);
  let templateName = 'slide';
  if (slideContent.template) {
    templateName = slideContent.template;
  }
  const html = knownTemplates[templateName](dataObj);
  document.getElementById('js-slides').insertAdjacentHTML('beforeEnd', html);
});

Reveal.initialize();
