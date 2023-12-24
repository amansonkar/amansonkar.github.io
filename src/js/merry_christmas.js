// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Snow Fall with snowfall.js

let defaultParams = {
  count: "100", // number of snowflakes
  minRadius: "10", // minimum radius of a snowflake in pixels
  maxRadius: "30", // maximum radius of a snowflake in pixels
  minSpeed: "3", // minimum speed of a snowflake in pixels per frame
  maxSpeed: "10", // maximum speed of a snowflake in pixels per frame
  text: "❄", // text for a snowflake (can be any symbol or text)
  color: "#99ccff", // color of a snowflake in HEX format
  zIndex: "1000" // z-index for the snowflakes canvas
};

let snowfall = new Snowfall();

// Snow Fall with CSS only

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LLWL5N9CSM');
