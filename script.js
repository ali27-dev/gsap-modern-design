var tl = gsap.timeline();

tl.from('.section', {
    stagger: .3,
    opacity: 0,
    width: 0,
    ease: 'Expo.easeInOut',
    duration: 2,
}).from('nav a',{
    stagger: .1,
    x: -30,
    duratio: 1.5,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, '-=1')
.from('#circle', {
    rotate: '90deg',
    opacity: 0,
    ease: 'Expo.easeInOut',
    duration: 2,
}, '-=2')
// .from('#smcircle', {
//     rotate: '-90deg',
//     opacity: 0,
//     ease: 'Expo.easeInOut',
//     duration: 2,
// }, '-=1.5')
.from('#vsmcircle', {
    rotate: '-90deg',
    opacity: 0,
    ease: 'Expo.easeInOut',
    duration: 2,
}, '-=1.5')
.from('#vsmcircle i',{
opacity: 0,
duration: 1,
ease: 'Expo.easeInOut',
scale: .6,
}, '-=.5')
.from('#circle img',{
    // opacity: 0,
    ease: 'Expo.easeInOut',
    y: '800',
    deuration: 1.5,
}, '-=1')
.from('.rtem', {
    opacity: 0,
    duration: 3,
     stagger: .2,
     y: 60,
     ease:'Expo.easeInOut',
}, '-=3')