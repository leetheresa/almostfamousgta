import $ from 'jquery'
window.$ = window.jQuery = $;
import enterView from 'enter-view';
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"

// Handle enter-view animation
var addInViewElements = $('.add-in-view-on-view')

if(addInViewElements){
    enterView({
        selector: document.querySelectorAll('.add-in-view-on-view'),
        enter: function(el) {
            el.classList.add('in-view')
        },
        once: true,
        offset: 0
    });
}

//**EXAMPLE of FOR TINY SLIDER USAGE**//
// var _slider = $('.slider');
// if(_slider.length > 0){
//     var slider3 = tns({
//         container: '.slider',
//         items: 1,
//         mode:'gallery',
//         slideBy: 'page',
//         autoplay: true,
//         controls: true,
//         animateDelay: 2000,
//         speed: 1500,
//         nav:false,
//         autoplayButton: false
//     });
// }