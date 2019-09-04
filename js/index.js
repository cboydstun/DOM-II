// Your code goes here

//mouseover
mainNav.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "blue";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

//keydown
document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

//click
const logo = document.querySelector('.logo-heading');
logo.addEventListener('click', () => { 
  const horn = new Audio('http://soundbible.com/mp3/Ahooga%20Car%20Horn-SoundBible.com-1499602683.mp3');
  horn.play();
  
  horn.addEventListener('ended', () => {
    console.log(horn.currentSrc);
  })
})

//double click
const topImg = document.querySelector('.top-image');
topImg.addEventListener('dblclick', () => { 
  const horn = new Audio('http://soundbible.com/mp3/van-sliding-door-daniel_simon.mp3');
  horn.play();
  
  horn.addEventListener('ended', () => { 
    console.log(horn.currentSrc);
  })
})

//wheel zoom

let scale = 1;
let content = document.querySelectorAll('.text-content');

content.forEach(item=>{
    item.onwheel = zoom;
})

function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    event.target.style.transform = `scale(${scale})`;
};

//scroll
window.addEventListener('scroll', function(e) {
    console.log(e.timeStamp);
})

//resize blur

const bodyContent = document.querySelector("body");

window.addEventListener("resize", blurBackground);

const blurBackground = () => {
	bodyContent.style.filter = "blur(8px)";
	setTimeout(() => {
		bodyContent.style.filter = "";
	}, 1000);
};

//mouse move
site.addEventListener('mousemove', () => { 
    site.style.opacity = "1";
    site.style.background = "white";
});

//Button Questionnaire

const button = document.querySelectorAll(".btn");
const buttonArr = Array.from(button);

var destination = "";
var activities = "";

buttonArr[0].addEventListener('click', () => {
	destination = prompt("What is your dream Island to visit?");
});

buttonArr[1].addEventListener('click', () => {
	activities = prompt("What activities would you like to do?");
});

buttonArr[2].addEventListener('click', () => {
	alert("We're going to book you a trip to " + destination + " where you'll do " + activities + ". Enjoy your trip!");
})
