---
  order: 2
---
# Naming is hard!

![mad baby](/dist/images/naming-is-hard.jpg)

## A suggested convention
from [Nicholas Gallagher](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/) and based on [BEM](http://getbem.com/introduction/)

``` scss
// corresponding files
// sass/modules/ComponentName.scss
// js/modules/ComponentName.js
// templates/modules/ComponentName.soy

/* Component/Module */
.ComponentName {}

/* Component/Module with modifier */
.ComponentName--modifierName {}

/* Component descendant */
.ComponentName-descendant {}

/* Component descendant modifier */
.ComponentName-descendant--modifier {}

/* Component state (scoped to component) */
.ComponentName.is-stateOfComponent {}
```

## But why?
* Easily know from the inspector, where to go for *all the things*
* Clear separation between the Module and the children
* Naming mostly independent of HTML structure
* Modules/Components are never dependent on other elements on a page, so you will never experience cascade problems
* Easy to understand what's going on
* Compose-ability

## Examples!

## Extension -- using ARIA for State

Bootstrap Collapse vs ARIA Collapse

### Bootstrap:
``` css
 .expanded {display: inline;}
 .closed {display: none; }
 .collapsed .expanded { display: none;}
 .collapsed .closed { display: inline; }
 .collapse { display: none; }
```
``` html
<button class="btn collapsed" data-toggle="collapse" data-target="#target">
  <span class="expanded">Close me</span>
  <span class="closed">Open Me</span>
</button>
<p class="collapse" id="target">
  content
</p>
```
``` js
for (let collapser of document.querySelectorAll('[data-toggle="collapse"]')) {
  collapser.addEventListener( () => {
    document.querySelector(collapser.dataset.target).classList.toggle('collapse');
  });
}
```

### Aria
``` css
[aria-hidden="true"] {display: none;}
```
``` html
<button class="Collapser" aria-expanded="false" aria-controls="target-aria" aria-live="polite">
   ARIA
  <span class="Collapser-toggleOpen"
        aria-hidden="true">
    Close Me
  </span>
  <span class="Collapser-toggleClosed"
        aria-hidden="false">
    Open Me
  </span>
</button>
<p class="Collapser-target"
   id="target-aria"
   aria-hidden="true">
  aria content
</p>
```

``` js
for (let collapser of document.querySelectorAll('.Collapser')) {
  const target = document.getElementById(collapser.getAttribute('aria-controls'));
  const toggleOpen = collapser.querySelector('.Collapser-toggleOpen');
  const toggleClosed = collapser.querySelector('.Collapser-toggleClosed');
  collapser.addEventListener('click', () =>{
    const nowIsExpanded = !(collapser.getAttribute('aria-expanded') === 'true');
    collapser.setAttribute('aria-expanded', nowIsExpanded);    
    target.setAttribute('aria-hidden', !nowIsExpanded);
    toggleOpen.setAttribute('aria-hidden', !nowIsExpanded);
    toggleClosed.setAttribute('aria-hidden', nowIsExpanded);
  });
}
```

Needs more thought/research.
