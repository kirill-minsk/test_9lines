import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
// import scrollToAnchor from './modules/scrollToAnchor';
import backToTop from './modules/backToTop';
import LocomotiveScroll from 'locomotive-scroll';
// import html2canvas from 'html2canvas';
import './components/share';
import './components/preloader';
import './components/progress_scroll';


const scroll = new LocomotiveScroll();
const target = document.querySelector('.js-to-anchor');
scroll.scrollTo(target);



ieFix();
vhFix();
actualYear();
// scrollToAnchor.init();

header.init();
lazyLoading.init();
backToTop.init();
