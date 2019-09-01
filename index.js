'use strict';

const hero = document.querySelector('.hero');                     // 1. Create selectors for the elements you wish to animate with GSAP (in this case, we just have all of them for future use).
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const links = document.querySelector('.links');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();                                     // 2. create a variable called "tl" and assign new TimelineMax() to it to chain multiple animations.
                                                                  // 3. To start the timeline, call tl (i.e. creates new timelineMax) and define the elements you want to animate.

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })       // This will target the hero element, and with a duration of 1 second go from 0 height to 80% height with a easeInOut effect.
.fromTo(hero, 1.2, {width:"100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(headline, 1.2, {opacity: 0, x: 30}, {opacity: 1, x: 0, ease: Power2.easeInOut}, "-=1.2");