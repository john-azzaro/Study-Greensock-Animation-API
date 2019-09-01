# Greensock Animation API Study
See it Live: https://john-azzaro.github.io/Study-Greensock-Animation-API/

<br>

## Study Contents:

* [What is Greensock Animation API Study?](#What-is-Greensock-Animation-API-Study)
* [What libraries can you use with GSAP?](#What-libraries-can-you-use-with-GSAP)
* [How do you install the GSAP libraries](#How-do-you-install-the-GSAP-libraries)
* [What is a tween?](#What-is-a-tween)
* [What methods can you use with Tweens?](#What-methods-can-you-use-with-Tweens)
* [What does a basic example using TweenMax look like?](#What-does-a-basic-example-using-TweenMax-look-like)
* [What is a timing function?](#What-is-a-timing-function)
* [How do you use TimelineMax to chain Tweens together?](#How-do-you-use-TimelineMax-to-chain-Tweens-together)
* [Screenshots](#Screenshots)

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
A "tween" is a *SINGLE* movement in an animation. The syntax for a tween is as follows:
```
TweenMax.method(element, duration, properties-to-animate)
```
* **TweenMax** is the Constructor (e.g. TweenMax, TweenLite, etc.).
* **.method** is the GSAP method you wish to use.
* **element** is the element you want to animate (note: you can pass in an array of elements if you wish).
* **duration** is the length of time you want to animate your element in seconds.
* **properties-to-animate** is an object of properties you wish to animate.

<br>

## What methods can you use with Tweens?
The methods available to you through the GSAP API are varied and it is up to you to determine what would be best for you
and the effect you want to achieve.  However, there a few methods that should be good to know:
* **delay**, which delays the animation in seconds before executing.
* **fromTo**, that allows you to define the starting and ending values.
* **set**, which immediately sets the properties of the target (i.e. no time duration).
* **to**, which animates to a specified destination value (see below).

To find more methods, see the TweenMax documentation: https://greensock.com/docs/TweenMax

<br>

## What does a basic example using TweenMax look like?
First, you need to select an element from the DOM in order to animate it.  To do this, you can use a query selector and store as
a const called "logo".
```JavaScript
    const logo = document.querySelector('#logo');
```
Then, you simply call the "TweenMax" constructor and add your method and animation details.
```JavaScript
    TweenMax.to(logo, 2, {x: 100})
```
In the example above, we want to animate a logo so that when the page loads, it will translate
100 pixels along the x-axis(i.e. go right).  So, to do this we use the TweenMax constructor, add the ```.to``` method with will
animate to a specified destination value (which will be 100px on the x-axis).  Inside the parenthesis, you first specify the element, 
then the duraction (i.e. 2 seconds), and then inside an object you specify the location you want to animate to, specificially 100px 
along the x-axis.

<br>

## What is a timing function?
A timing function uses the ```ease``` property to write a timing function.  GSAP provides easing variables from Power0 - Power4 which
tells GSAP how strong the easing needs to be.  To find the right timing function, you can use the easing visualize below:

Easing visualizer: https://greensock.com/ease-visualizer

<br>

## How do you use TimelineMax to chain Tweens together?
The TimelineMax constructor lets you chain multiple tweens together.  When you chain tweens together, they will execute in the order in which 
they are chained together.  

To use TimelineMax, first you need to create an instance of TimelineMax:
```JavaScript
    const tl = new TimelineMax();
``` 

Then, you simply chain your methods to the ```tl``` variable and create your chained tweens.
```JavaScript
const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })
.fromTo(hero, 1.2, {width:"100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(logo, 2, {opacity: 0, x: 30}, {opacity: 1, x: 0, ease: Power2.easeInOut});
```
Each follows from the other and each animation executes one after the other.  However, suppose you wanto your logo (at the end), 
to animate at the same time as the second hero animation.  To do this, you just add a ```"-=X"``` where X is the amount of seconds the previous
element uses.  So for example, if you want the logo to appear at the same time as the second hero animation, do this:
```JavaScript
tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })
.fromTo(hero, 1.2, {width:"100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(logo, 2, {opacity: 0, x: 30}, {opacity: 1, x: 0, ease: Power2.easeInOut}, "-=1.2");
```
And if you wanted to logo to appear at the start when the first hero animation occurs, add that time as well:
```JavaScript
tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })
.fromTo(hero, 1.2, {width:"100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(logo, 2, {opacity: 0, x: 30}, {opacity: 1, x: 0, ease: Power2.easeInOut}, "-=2.2");
```

<br>

## Screenshots

![gsap1](https://user-images.githubusercontent.com/37447586/64072089-d5969e00-cc3d-11e9-8e6f-fe2bce80ddae.png)
![gsap2](https://user-images.githubusercontent.com/37447586/64072090-d5969e00-cc3d-11e9-8a11-c9e2c14a7524.png)
![gsap3](https://user-images.githubusercontent.com/37447586/64072091-d5969e00-cc3d-11e9-9a0c-76c588159aa3.png)