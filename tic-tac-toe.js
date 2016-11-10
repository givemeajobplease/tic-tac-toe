// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var currentShape = "circle"
function topone(){
 var canvas = document.getElementById("game-board")
 var toponeclick = "noclick"
 if (toponeclick == "noclick") {
 var topleftO = document.createElementNS(namespace, "circle")
 topleftO.setAttribute("cx", "47")
 topleftO.setAttribute("cy", "50")
 topleftO.setAttribute("r", "25")
 topleftO.setAttribute("fill", "white")
 topleftO.setAttribute("stroke-width", "10")
 topleftO.setAttribute("stroke", "blue")
 canvas.appendChild(topleftO)
 toponeclick = "click"
 }
 else if (toponeclick == "noclick"){
  //  var topleftX = document.createElementNS(namespace, "rect")
  //  topleftX.setAttribute("x", "32")
  //  topleftX.setAttribute("y", "35")
  //  topleftX.setAttribute("width", "30")
  //  topleftX.setAttribute("height", "30")
  //  topleftX.setAttribute("fill", "white")
  //  topleftX.setAttribute("stroke-width", "10")
  //  topleftX.setAttribute("stroke", "red")
  //  canvas.appendChild(topleftX)
  //  toponeclick = "click"
 }
}
