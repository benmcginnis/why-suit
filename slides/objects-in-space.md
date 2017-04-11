---
  order: 1
---
*The following is stolen liberally from https://medium.com/objects-in-space/objects-in-space-f6f404727*

# User Needs Beer

``` scss
// module/Beer.scss
.Beer {
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
// module/Cup.scss
.Cup {
  border-radius: 100%;
}
```

🤔 this doesn't hold much beer...

💡 we need a more specific cup

``` scss
// module/Cup.scss
.Cup--glass {
  @extend .Cup;
  border-color: transparent;
  opacity: .5;
}

.Cup--pintGlass {
  @extend .Cup--glass;
  height: 1pint;
}
```

*Debate: Who should know about how the beer looks in a pint glass? The beer or the pint glass?*

*Should the cup?*
``` scss
// module/Cup.scss
.Cup--glass {
  @extend .Cup;
  border-color: transparent;
  opacity: .5;
}

.Cup--pintGlass {
  @extend .Cup--glass;
  height: 1pint;
}

// it does this whenever it's put inside ANY cup
.Cup-beer {
  height: 85%;
  head: 10%;
}
```

``` html
<div class="Cup--pintGlass">
  <div class="Beer Cup-beer">
    ...Dogfish Head 60 Minute...
  </div>
</div>
```

*or the beer?*
``` scss
// module/Beer.scss
.Beer {
  color: amber;  
  display:liquid;
  alcohol:5.2%;

  .Cup & {
    height: 85%;
    head: 10%;
  }
}
```

``` html
<div class="Cup Cup--pintGlass">
  <div class="Beer">
    ...Dogfish Head 60 Minute...
  </div>
</div>
```

*Debate: Multi-class or single class?*

``` html
<div class="Cup Cup-pintGlass"></div>
/* vs */
<div class="Cup-pintGlass"></div>
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
<div class="Beer is-poisoned">
</div>

<div class='Food is-poisoned'>
</div>

<div class="PoisonousPotionOfPoisoning is-poisoned">
</div>
```

*Module specific states*
``` scss
// module/Beer.scss

.Beer
{
  &&--is-flat // .Beer.Beer--is-flat
  {
    head: 0px;
  }

  &&--is-skunked // .Beer.Beer--is-skunked
  {
    taste: heineken;
  }
}
```

``` html
<div class="Beer Beer--is-skunked">
  ...gross...
</div>
```

>Break something into a module only if it would be useful in another context. Everything else remains an element or component inside a module.
