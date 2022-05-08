

/*Lazy loader*/
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadObjects;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    const ioConfiguration = {
      rootMargin: '-50% 0% -50% 0%',
      threshold: 0
    };

    const centeredOnScreen = (entries, o) => {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
        }
      });
    }

    var imageObserver = new IntersectionObserver(centeredOnScreen, ioConfiguration)   

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });


  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})



/*Fade WhatsApp messages on and off screen*/
let index = 0
  var interval = setInterval(function(){

      if (index < 5) {
        index += 1;
      } else {
        index = 1;
      }

      let speechBubble = document.getElementById(`chat-${index}`);
      speechBubble.classList.add("fade-in");

  }, 3000);














