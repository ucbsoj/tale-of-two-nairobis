

/*Lazy load animated SVGs*/
const svgObserver = new IntersectionObserver((entries) => { 

  entries.forEach(entry => {

    // strangely, intersection observer gets called on first load. this makes sure we only trigger when el enters viewport
    if (entry.intersectionRatio > 0) {

      let svg = entry.target;
      svg.src = svg.dataset.src;
      
    }

  }); 
}); 

let svgElems = document.querySelectorAll(".animated-svg");

svgElems.forEach(e => {
  svgObserver.observe(e);
})



/*Fade WhatsApp messages on and off screen*/

//BANNER
const bannerBubbleObserver = new IntersectionObserver((entries) => { 

  if (entries[0].intersectionRatio > 0) {

    let index = 1
    let speechBubble = document.getElementById(`chat-${index}`); // this is hacky, but I want the first message to load immediately
    speechBubble.classList.add("fade-in");

    var interval = setInterval(function(){
      index += 1;

      if (index == 5) {
        clearInterval(interval);
      }

      let speechBubble = document.getElementById(`chat-${index}`);
      speechBubble.classList.add("fade-in");

    }, 3000);
  }
  
}); 

let bannerElem = document.getElementsByClassName("yellow-banner");

bannerBubbleObserver.observe(bannerElem[0]); // TO-DO remove observer after all chats have been loaded onto page

//EMBEDDED IN TEXT
const embedBubbleObserver = new IntersectionObserver((entries) => { 

  if (entries[0].intersectionRatio > 0) {

    let index = 6
    let speechBubble = document.getElementById(`chat-${index}`); // this is hacky, but I want the first message to load immediately
    speechBubble.classList.add("fade-in");

    var interval = setInterval(function(){
      index += 1;

      if (index == 10) {
        clearInterval(interval);
      }

      let speechBubble = document.getElementById(`chat-${index}`);
      speechBubble.classList.add("fade-in");

    }, 2000); //faster than banner
  }
  
}); 

let embedElem = document.getElementsByClassName("chat-container-embed");

embedBubbleObserver.observe(embedElem[0]); // TO-DO remove observer after all chats have been loaded onto page







/* attempt at handling browsers without Intersection Observer */

// document.addEventListener("DOMContentLoaded", function() {
//   var lazyloadObjects;    

//   if ("IntersectionObserver" in window) {
//     lazyloadImages = document.querySelectorAll(".lazy");
//     const ioConfiguration = {
//       rootMargin: '-50% 0% -50% 0%',
//       threshold: 0
//     };

//     const centeredOnScreen = (entries, o) => {
//       entries.forEach(function(entry) {
//         if (entry.isIntersecting) {
//           var image = entry.target;
//           image.src = image.dataset.src;
//         }
//       });
//     }

//     var imageObserver = new IntersectionObserver(centeredOnScreen, ioConfiguration)   

//     lazyloadImages.forEach(function(image) {
//       imageObserver.observe(image);
//     });


//   } else {  
//     var lazyloadThrottleTimeout;
//     lazyloadImages = document.querySelectorAll(".lazy");
    
//     function lazyload () {
//       if(lazyloadThrottleTimeout) {
//         clearTimeout(lazyloadThrottleTimeout);
//       }    

//       lazyloadThrottleTimeout = setTimeout(function() {
//         var scrollTop = window.pageYOffset;
//         lazyloadImages.forEach(function(img) {
//             if(img.offsetTop < (window.innerHeight + scrollTop)) {
//               img.src = img.dataset.src;
//               img.classList.remove('lazy');
//             }
//         });
//         if(lazyloadImages.length == 0) { 
//           document.removeEventListener("scroll", lazyload);
//           window.removeEventListener("resize", lazyload);
//           window.removeEventListener("orientationChange", lazyload);
//         }
//       }, 20);
//     }

//     document.addEventListener("scroll", lazyload);
//     window.addEventListener("resize", lazyload);
//     window.addEventListener("orientationChange", lazyload);
//   }
// })


















