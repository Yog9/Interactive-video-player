# Front End Web Development Project 6: Interactive Video Player

In this project, you'll build an HTML5 video player using JavaScript and the HTML5 Video API. Using the supplied mockups, video files, and transcript, you'll build an interactive video player that synchronizes the video and the transcript. The transcript should be placed below the video, and should highlight as the video progresses. When a user clicks any part of the transcript it should take them to the appropriate place in the video.

### Before You Start
Download the project files. We've supplied the following files for you to use:
* mockup files for different screen sizes
* a transcript of the audio for the video with time stamps on it (captions.txt)
* 2 video files: one in MP4 format and the other in OGG format.

### Project Instructions
Build the basic layout based on the mockups.

Implement a media player.
* We recommend using the mediaelement.js library.
* You can either download the files and link to them locally
* Or use the CDN links on the mediaelement.js site. This method is usually preferable as it will keep your project updated with any new fixes and updates to the library.
* You will also need to include the jQuery library in your project.
* You can also implement your own custom media player using the Video API, or use an alternative media library, as long as it can perform the same as functions as described below.

Embed the two video formats using HTML.
* Check that the video works in at least three modern browsers. Please use Chrome and Firefox, Internet Explorer if you have a PC, and Safari if you have a Mac.
* Ensure that all controls work as expected in each browser you test. Check the following:
  * Play and pause functionality
  * Full screen mode
  * Volume controls
  * Progress bar
  
Add the transcript below the video (as shown in the mockup file).
* The text you'll use is located in the captions.txt file. Use appropriate <p> and/or <span> tags around the text when adding it to your project.
* As the media playback time changes, sentences in the transcript should highlight. Use JavaScript to listen for those changes and apply a highlight to the appropriate sentence. You can use the captions.txt file to see the times at which the words are spoken in the video.

Mobile first
* Make sure the HTML file includes the viewport meta tag in the head of the document.
* Use a mobile-first approach by writing your media queries using the min-width property in your CSS.
* Add a breakpoint for tablet and desktop sized screens at 768px and larger.

Style the page to roughly match the mockups for mobile and tablet-desktop as guides.
* Match the design as it should look on:
  * mobile screen sizes.
  * a tablet or desktop that is 768px wide using the desktop-form.png mockup.
  
### Extra Credit
When the user clicks on any sentence in the transcript the video player jumps to the appropriate time in the video.

Customize the media player skin.
* At a minimum change the color of the controls panel.
* NOTE: In Nick’s Create a Custom Skin video he targets the selectors using the class he added to the video player and the class that targets the different parts of the player. Since this video was published, the way to target parts of the player has changed. Eg:
.mejs_treehouse .mejs_controls {}
Would now be:
.mejs_treehouse .mejs__controls {}

* Use Inspect Elements in the Dev tools to see the classes associated to the different player elements.

### Project Resources
* http://www.mediaelementjs.com/
* https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
* http://blog.teamtreehouse.com/getting-started-with-html5-video
* http://blog.teamtreehouse.com/building-custom-controls-for-html5-videos
* https://www.w3schools.com/TAGS/av_prop_currenttime.asp
* http://jshint.com/
