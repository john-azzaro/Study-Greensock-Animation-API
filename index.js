'use strict';

const hero = document.querySelector('.hero');                     // 1. Create selectors for the elements you wish to animate with GSAP.
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const links = document.querySelector('.links');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();                                     // 2. create a variable called "tl" and assign new TimelineMax() to it to chain multiple animations.

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%"});              // 3. To start the timeline, call tl (i.e. creates new timelineMax) and define the elements you want to animate.