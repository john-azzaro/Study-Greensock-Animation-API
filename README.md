# Greensock Animation API Study
See it Live: https://john-azzaro.github.io/Study-Greensock-Animation-API/

<br>

## Study Contents:

* [What is Greensock Animation API Study?](#What-is-Greensock-Animation-API-Study)
* [What libraries can you use with GSAP?](#What-libraries-can-you-use-with-GSAP)
* [How do you install the GSAP libraries](#How-do-you-install-the-GSAP-libraries)
* [What is Greensock Animation API Study?](#What-is-Greensock-Animation-API-Study)
* [What is Greensock Animation API Study?](#What-is-Greensock-Animation-API-Study)
* [What is Greensock Animation API Study?](#What-is-Greensock-Animation-API-Study)


<br>

## What is Greensock Animation API Study?
The "Greensock Animation API Study" is an exploration of the Greensock Animation API (GSAP).  GSAP is a very handy
animation library that helps you make preformant animations.  In this study, you have a simple landing page with a 
headline and an image.  Using GSAP, the image and headline use a simple animation to reveal on load.

<br>

## What libraries can you use with GSAP?
There are 4 libraries to choose from- TweenLite, TweenMax, TimelineLite, and TimelineMax.  TweenMax has more features than
TweenLite and TimlineMax has more features than TimelineLite.

<br>

## How do you install the GSAP libraries?
To install your desired GSAP libraries, which for all intents and purposes is TweenMax and TimelineMax, you simply need to 
include the scripts in your HTML file before your JavaScript file.  In this particular study, TimelineMax is used.
```HTML
      <script
         src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
         integrity="sha256-lPE3wjN2a7ABWHbGz7+MKBJaykyzqCbU96BJWjio86U="
         crossorigin="anonymous"
      ></script>
      <script
         src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js"
         integrity="sha256-fIkQKQryItPqpaWZbtwG25Jp2p5ujqo/NwJrfqAB+Qk="
         crossorigin="anonymous"
      ></script>
```

<br>

## What is a tween?
A "tween" is a *SINGLE* movement in an animation. The syntax for a tween is as follows:\
```
TweenMax.method(element, duration, properties-to-animate)
```
* **TweenMax** is the library being used (e.g. TweenMax, TweenLite, etc.).
* **.method** is the GSAP method you wish to use.
* **element** is the element you want to animate (note: you can pass in an array of elements if you wish).
* **duration** is the length of time you want to animate your element in seconds.
* **properties-to-animate** is an object of properties you wish to animate.




```JavaScript
const logo = document.querySelector('#logo');
TweenMax.to(logo, 9, {x: 100, ease: Power2.easeInOut })
```
In the example above, 