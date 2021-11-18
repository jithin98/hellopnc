//  use control + F find the section  //
//   --------------------------------


// code1--open fullscreen
// code2--Close fullscreen

// code3--chat pop up sound
// code4--open and close full screen sound

// code5--- open and close chat pop up form on header 



// code1--open fullscreen//

var elem = document.documentElement;
    function openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }
    
    // code2--Close fullscreen//

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
        
// code4--open and close full screen sound//

var x = document.getElementById("fullscreenAudio"); 
              
function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.play(); 
} 

// code3--chat pop up sound//

var x2 = document.getElementById("popchat"); 

function playAudio2() { 
  x2.play(); 
} 

function pauseAudio2() { 
  x2.play(); 
} 

// code5--- open and close chat pop up form on header 

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
