


/*Fade WhatsApp messages on and off screen*/
let index = 0
  var interval = setInterval(function(){
      // if (index > 0) {
      //   let lastBubble = document.getElementById(`chat-${index}`);
      //   lastBubble.classList.remove("fade-in");
      // }

      if (index < 2) {
        index += 1;
      } else {
        index = 1;
      }

      let speechBubble = document.getElementById(`chat-${index}`);
      speechBubble.classList.add("fade-in");

      
  }, 3000);














