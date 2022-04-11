// import interact from "https://cdn.interactjs.io/v1.10.11/interactjs/index.js"
// import { Button, hideUI, showUI, toggleUI, Text, NewLine } from "./jsui.js"

import { log, iOS, isInstalledAsPWA, beep } from "./zutils.js";

console.log("+-> (3) 😍 app started !");

///////////////////////////////////////////////////////
//                                                  //
// code a n'utiliser que si app non installée pour
//   que le calcul de la hauteur du viewport
//   correct sur les iphones à notche notemment
//
if (!isInstalledAsPWA()) {
  function resize() {
    let frame = document.getElementById("frame");
    if (window.innerWidth < window.innerHeight) {
      // portrait :
      document.body.style.height = "-webkit-fill-available";
      frame.style.height = "-webkit-fill-available";
      frame.style.backgroundColor = "yellow";
      document.body.style.backgroundColor = "orange";
    } else {
      // landscape :
      document.body.style.height = "100vh";
      frame.style.height = "calc( 50vh - 40px )";
      frame.style.backgroundColor = "blue";
      document.body.style.backgroundColor = "darkBlue";
    }
  }

  document.body.onresize = resize;
  resize();
}
//
// code....
//                                                   \\
///////////////////////////////////////////////////////



///////////////////////////////////////////////////////
//                                                  //
// disable two fingers toubletap zoom on a element
//
document.getElementById("view").addEventListener("touchstart", tapHandler);

document.getElementById("editor").addEventListener("touchstart", tapHandler);

var tapedTwice = false;

function tapHandler(event) {
  if (!tapedTwice) {
    tapedTwice = true;
    setTimeout(function () {
      tapedTwice = false;
    }, 500);
    return false;
  }
  event.preventDefault();
  //action on double tap goes below
  //alert("You tapped me Twice !!!");
}
//                                                   \\
///////////////////////////////////////////////////////


///////////////////////////////////////////////////////
//                                                  //
// experiments
//
// DATAs
let view = document.getElementById('view')
let editor = document.getElementById('editor')

function toggleColor(element,color1,color2) {
  if (element.style.backgroundColor === color1)
    element.style.backgroundColor = color2
  else
    element.style.backgroundColor = color1
}


view.addEventListener('click', (event)=> {
  toggleColor(view,'white','purple')
})
view.addEventListener('touchbegan', (event)=> {
  toggleColor(view,'white','purple')
})

function print(txt) {
  view.innerHTML += txt
}
print('Hello world !<br>')
print('Hello world !<br>')
view.style.backgroundColor = 'purple'
print('->' + view.style.backgroundColor + '<-' )
//                                                   \\
///////////////////////////////////////////////////////