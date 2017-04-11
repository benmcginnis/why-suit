---
  order: 1
---
*The following is stolen liberally from https://medium.com/objects-in-space/objects-in-space-f6f404727*
*everything below is using the BEM syntax*

# User Needs Beer

``` scss
// module/beer.scss
.beer {
  color:amber;
  display:liquid;
  alcohol:5.2%;
}
```

![Photo of a puddle of beer](http://blogs.wickedlocal.com/beernut/files/2011/06/IMG00173-20110604-1341-424x318.jpg)

🤔 it's all over the floor! What's going on?

>beer’s properties should not depend on its presentation method

*Presenting Beer*

![Photo of bartender with beer]

``` scss
// module/cup.scss
.cup {
  border-radius: 100%;
}
```

🤔 this doesn't hold much beer...

💡 we need a more specific cup

``` scss
// module/cup.scss
.cup--glass {
  @extend .cup;
  border-color: transparent;
  opacity: .5;
}

.cup--pint-glass {
  @extend .cup--glass;
  height: 1pint;
}
```

*Debate: Who should know about how the beer looks in a pint glass? The beer or the pint glass?*

*Opinion: The Pint Glass!*

``` scss
// module/cup.scss
.cup--glass {
  @extend .cup;
  border-color: transparent;
  opacity: .5;
}

.cup--pint-glass {
  @extend .cup--glass;
  height: 1pint;
}

// it does this whenever it's put inside ANY cup
.cup__beer {
  height: 85%;
  head: 10%;
}
```

``` html
<div class="cup--pint-glass">
  <div class="beer cup__beer">
    ...Dogfish Head 60 Minute...
  </div>
</div>
```

*Debate: Multi-class or single class?*

``` html
<div class="cup cup--pint-glass"></div>
/* vs */
<div class="cup--pint-glass"></div>
```

*States*
``` scss
// state/state.scss
.is-poisoned {
  font-family: 'Comic Sans', sans-serif;
  font-size: 4em;
  color: puse;
}
```

``` html
<div class="beer is-poisoned">
</div>

<div class='food is-poisoned'>
</div>

<div class="poisonous-potion-of-poisoning is-poisoned">
</div>
```

*Module specific states*
``` scss
// module/beer.scss

.beer
{
  &&--is-flat // .beer.beer--is-flat
  {
    head: 0px;
  }

  &&--is-skunked // .beer.beer--is-skunked
  {
    taste: heineken;
  }
}
```

``` html
<div class="beer beer--is-skunked">
  ...gross...
</div>
```

>Break something into a module only if it would be useful in another context. Everything else remains an element or component inside a module.
