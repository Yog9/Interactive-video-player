$( document ).ready(function() {

  // Video
  var video = document.querySelector(".player");

  // Buttons
  var playbutton = document.querySelector(".play-svg");
  var pauseButton=document.querySelector(".pause-svg");
  var speakeron = document.querySelector(".vol-svg");
  var fullScreenButton= document.querySelector(".svg-screen");
  var centerplayButton= document.querySelector(".playpause");
  // Sliders
  var seekBar = document.getElementById("progress-bar");
  var volumeBar = document.getElementById("volume-bar");
//span elements curtime and durationtime
	var curtimetext= document.querySelector("#curtimetext");
	var durtimetext= document.querySelector("#durtimetext");
	var  textSec=document.querySelectorAll(".textSec");
	//caption 
	var captionsBtn= document.querySelector(".cc-svg");

//
var videoTranscript =document.querySelector(".textHighlight");
// Event listener for the play/pause button
playbutton.addEventListener("click", function() {
	console.log("play button clicked");
  if (video.paused == true) {
    // Play the video
    video.play();
    centerplayButton.style.display="none";
    // Update the button to 'Pause'
    playbutton.src = "images/plyr-pause.svg";
    playbutton.classList.add("pause-svg");

  } else {
    // Pause the video
    video.pause();
    centerplayButton.style.display="block";
    // Update the button to 'Play'
    playbutton.src = "images/plyr-play.svg";
    playbutton.classList.add("play-svg");
  }
});

//
 function centerplaypause() {
	console.log("play button clicked");
if (video.paused == true) {
    // Play the video
    video.play();
       centerplayButton.style.display="none";
  
  // Update the button to 'Pause'
    playbutton.src = "images/plyr-pause.svg";
    playbutton.classList.add("pause-svg");
  
}
else{
    // Pause the video
    video.pause();
   centerplayButton.style.display="block";
  
  // Update the button to 'Play'
    playbutton.src = "images/plyr-play.svg";
    playbutton.classList.add("play-svg");

}
}
video.addEventListener("click",centerplaypause);
centerplayButton.addEventListener("click",centerplaypause);
// Event listener for the mute button
speakeron.addEventListener("click", function() {
  if (video.muted == false) {
    // Mute the video
    video.muted = true;
   
    volumeBar.value=0; // if video is mute set the volume control to 0
    // Update the button to speakeroff
    speakeron.src = "images/plyr-muted.svg";
    speakeron.classList.add("pause-svg");
  } else {
    // Unmute the video
    video.muted = false;
     volumeBar.value=1; // if video is unmute set the volume control to 1

    // Update the button to speakeron
    speakeron.src = "images/plyr-volume.svg";
    speakeron.classList.add("vol-svg");
  }
});






// Event listener for the full-screen button
fullScreenButton.addEventListener("click", function() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
});



// Event listener for the seek bar
seekBar.addEventListener("click", function(e) {

            var barClick = e.offsetX / this.offsetWidth;
            video.currentTime = barClick * video.duration;// Update the video time
            seekBar.value = barClick / 100;
            centerplaypause();
  
});
// Event listener for the volume bar
volumeBar.addEventListener("click", function(e) {
	if(volumeBar.value==0)
	{
		  // Update the button to speakeroff
    
    speakeron.src = "images/plyr-muted.svg";
    speakeron.classList.add("pause-svg");

	}
	else
{
	  // Update the button to speakeron
    speakeron.src = "images/plyr-volume.svg";
    speakeron.classList.add("vol-svg");

}
	});

// Update the seek bar as the video plays
video.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video.duration) * video.currentTime;

  // Update the slider value
  seekBar.value = value;
  if(video.ended)
  {
  	 // Update the button to 'Play'
    playbutton.src = "images/plyr-play.svg";
    playbutton.classList.add("play-svg");
  }
  //time in span tag
  var curmins=Math.floor(video.currentTime/60);
  var cursecs=Math.floor(video.currentTime - curmins*60);
 
  if(cursecs<10)
  {
  	cursecs="0"+cursecs;
  }

  if(curmins<10)
  {
  	curmins="0"+curmins;
  }

  curtimetext.innerHTML=curmins +":"+cursecs;
 
//As video plays - current section highlights
for(let i=0;i<textSec.length;i++)
{
	var starttime=textSec[i].getAttribute('data-start');
	var endtime =textSec[i].getAttribute('data-end');
	if(video.currentTime>starttime && video.currentTime<endtime)
		textSec[i].style.color="red";
	else
		textSec[i].style.color="black";

}
});
//When clicking on any sentence in the transcript, the video player jumps to the appropriate time in the video.
videoTranscript.addEventListener('click', (e) => {
   let target = e.target;
   let jumpToTime = target.getAttribute('data-start');
   if (target) {
     video.currentTime = jumpToTime;
     video.play();
      centerplayButton.style.display="none";
     // Update the button to 'Pause'
    playbutton.src = "images/plyr-pause.svg";
    playbutton.classList.add("pause-svg")
   }

  
   //centerplaypause(); 
});

// Pause the video when the slider handle is being dragged
seekBar.addEventListener("mousedown", function() {
  video.pause();
   playbutton.src = "images/plyr-play.svg";
    playbutton.classList.add("play-svg");
});

// Play the video when the slider handle is dropped
seekBar.addEventListener("mouseup", function() {
  video.play();
   playbutton.src = "images/plyr-pause.svg";
    playbutton.classList.add("pause-svg");
});

// Event listener for the volume bar
volumeBar.addEventListener("change", function() {
  // Update the video volume
  video.volume = volumeBar.value;
});



 

    //  TURN OFF CAPTIONS IN CASE BROWSER TURNS 'ON' BY DEFUALT
    //video.textTracks[0].mode = "hidden";

    captionsBtn.addEventListener('click', function () {
    	console.log("clicked cc");
        if (video.textTracks[0].mode === "hidden") {
            captionsBtn.src = "images/cc-icon-on.svg";
            captionsBtn.classList.add("cc-svg");
            video.textTracks[0].mode = "showing";
        } else {
            video.textTracks[0].mode = "hidden";
           captionsBtn.src = "images/cc-icon-off.svg";
            captionsBtn.classList.add("cc-svg");
        }
    });
});//document