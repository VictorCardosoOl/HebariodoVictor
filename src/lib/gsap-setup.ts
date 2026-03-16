import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.defaults({
  duration: 1.2,
  ease: 'expo.out',
});

export { gsap, ScrollTrigger, TextPlugin };
