


document.getElementById("demo").onmouseover = function() {mouseOver()};
document.getElementById("demo").onmouseout = function() {mouseOut()};
function mouseOver() {
  document.getElementById("demo").style.color = "red";
  alert("Hi! I am an alert box created by Luke's first time writing Javascript code!!!");
}
function mouseOut() {
  document.getElementById("demo").style.color = "black";
}



document.getElementById("bkgdColorGreen").onclick = function() {bkgdColorGreen()};
function bkgdColorGreen() {
   
    document.body.style.backgroundColor = 'green';
  } 
document.getElementById("bkgdColorRed").onclick = function() {bkgdColorRed()};
function bkgdColorRed() {
    document.body.style.backgroundColor = 'red';
    } 
document.getElementById("bkgdColorYellow").onclick = function() {bkgdColorYelloW()};
function bkgdColorYellow() {
    document.body.style.backgroundColor = 'yellow';
      }
document.getElementById("bkgdColorPink").onclick = function() {bkgdColorPink()};
function bkgdColorPink() {
    document.body.style.backgroundColor = 'pink';
    x = 0
        }
 

alert("Hello world! ARE YOU READY TO RRRRRRRUMBBBBBLEEEEE!");
    function myUserAlert(message){
        console.log("New message: " + message);
    }
    myUserAlert("This is for developers only!");
