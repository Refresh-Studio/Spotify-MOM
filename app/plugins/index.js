import { CSSPlugin } from './CSSPlugin.js';
import {
  Back,
  Bounce,
  Circ,
  Cubic,
  Elastic,
  Expo,
  Linear,
  Power0,
  Power1,
  Power2,
  Power3,
  Power4,
  Quad,
  Quart,
  Quint,
  Sine,
  SteppedEase,
  Strong,
  TimelineLite,
  TimelineMax,
  TweenLite,
  gsap
} from './gsap-core.js';

const gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap, // to protect from tree shaking
  TweenMaxWithCSS = gsapWithCSS.core.Tween;

export {
  gsapWithCSS as gsap,
  gsapWithCSS as default,
  CSSPlugin,
  TweenMaxWithCSS as TweenMax,
  TweenLite,
  TimelineMax,
  TimelineLite,
  Power0,
  Power1,
  Power2,
  Power3,
  Power4,
  Linear,
  Quad,
  Cubic,
  Quart,
  Quint,
  Strong,
  Elastic,
  Back,
  SteppedEase,
  Bounce,
  Sine,
  Expo,
  Circ
};
