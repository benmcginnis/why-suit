---
  order: 0
---
*The following is stolen liberally from http://nicolasgallagher.com/about-html-semantics-front-end-architecture/*

## Se•man•tics:
>  the study of the relationships between signs and symbols and what they represent

## HTML Semantics
* This is the semantics of the content
** e.g. `<p>`, `<h1>`, and `<section>` tags
** or `role="button"` or `aria-hidden="true"`
* It tells a *machine* what the content means, e.g. Google or JAWS

## Engineering Semantics

> not all semantics need to be content-derived

It is important that we as engineers, use application-specific semantics so that other engineers know what the f*@% is going on with our code.

## An example from my past

``` html
<a class="promotion-button">Shop now</a>
<a class="cta-button cta-menu-button">View Full Menu</a>
<a class="cta-button cta-button-instagram">Follow us on instagram</a>
```

``` css
.button-primary,
.cta-button,
.cta-menu-button,
.promotion-button {
  background-color: #f0ede3;
  color: #b1501e;
  text-decoration: none;
}
```

*Why the content specific classes?*

(╯°□°）╯︵ ┻━┻

Because SMACSS confused me.

### Gallagher's Reasoning:
> Content-layer semantics are already served by HTML elements.
> Class names impart little or no useful semantic information to machines.
> The primary purpose of a class name is to be a hook for CSS and JavaScript.
> Class names should communicate *useful* information to *developers*.

## Class names are ideally independent of content

> The most reusable components are those with class names that are independent of the content.

## Fixing my past

``` html
<a class="Button--cta">Shop now</a>
<a class="Button--cta">View Full Menu</a>
<a class="Button--cta">Follow us on instagram</a>
```

``` css
.Button--cta {
  background-color: #f0ede3;
  color: #b1501e;
  text-decoration: none;
}
```

## Single-Class vs Multi-class modifiers

We often have variants of different classes, especially links, headings and buttons.  

Single Class Pattern:
``` html
.Heading, .Heading--lead, .Heading--quiet {
  font-family: sans-serif;
  margin-top: .5em;
  margin-bottom: 1em;
  -webkit-font-smoothing: antialiased;
}
.Heading--lead {
  font-size: 3rem;
  font-weight: 300;
}
.Heading--quiet {
  font-size: .8rem;
  font-weight: 400;
  color: light-gray;
}

<h1 class="Heading--lead">Welcome</h1>
<h3 class="Heading--quiet">About</h3>
```

Multi Class Pattern:
``` html
.Heading {
  font-family: sans-serif;
  margin-top: .5em;
  margin-bottom: 1em;
  -webkit-font-smoothing: antialiased;
}
.Heading--lead {
  font-size: 3rem;
  font-weight: 300;
}
.Heading--quiet {
  font-size: .8rem;
  font-weight: 400;
  color: light-gray;
}

<h1 class="Heading Heading--lead">Welcome</h1>
<h3 class="Heading Heading--quiet">About</h3>
```

*Q: which do you prefer?*
