// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
// for circles cx = 47 135 223 squares x = 22 110
// reset: refresh page
var namespace = "http://www.w3.org/2000/svg"
 var turn = "player1"
 var toponeclick = "false"
function topone(){
 var canvas = document.getElementById("game-board")
 if (toponeclick == "false") {
 if (turn == "player1") {
 var toponeO = document.createElementNS(namespace, "circle")
 toponeO.setAttribute("cx", "47")
 toponeO.setAttribute("cy", "50")
 toponeO.setAttribute("r", "25")
 toponeO.setAttribute("fill", "white")
 toponeO.setAttribute("stroke-width", "10")
 toponeO.setAttribute("stroke", "blue")
 canvas.appendChild(toponeO)

 document.getElementById("paragraph1")
 paragraph1.setAttribute("style", "display: none;")

 document.getElementById("paragraph2")
 paragraph2.setAttribute("style", "display: block;")

 turn = "player2"


 }
 else if (turn == "player2"){
   var toponeX = document.createElementNS(namespace, "rect")
   toponeX.setAttribute("x", "22")
   toponeX.setAttribute("y", "25")
   toponeX.setAttribute("width", "50")
   toponeX.setAttribute("height", "50")
   toponeX.setAttribute("fill", "white")
   toponeX.setAttribute("stroke-width", "10")
   toponeX.setAttribute("stroke", "red")
   canvas.appendChild(toponeX)

   document.getElementById("paragraph1")
   paragraph1.setAttribute("style", "display: block;")

   document.getElementById("paragraph2")
   paragraph2.setAttribute("style", "display: none;")

   turn = "player1"
 }
 toponeclick = "true"
 }
 }


 var toptwoclick = "false"
function toptwo(){
 var canvas = document.getElementById("game-board")
 if (toptwoclick == "false") {
 if (turn == "player1"){
 var toptwoO = document.createElementNS(namespace, "circle")
 toptwoO.setAttribute("cx", "135")
 toptwoO.setAttribute("cy", "50")
 toptwoO.setAttribute("r", "25")
 toptwoO.setAttribute("fill", "white")
 toptwoO.setAttribute("stroke-width", "10")
 toptwoO.setAttribute("stroke", "blue")
 canvas.appendChild(toptwoO)

  document.getElementById("paragraph1")
  paragraph1.setAttribute("style", "display: none;")

  document.getElementById("paragraph2")
  paragraph2.setAttribute("style", "display: block;")

 turn = "player2"
  }
}
  else if (turn == "player2"){
    var toptwoX = document.createElementNS(namespace, "rect")
    toptwoX.setAttribute("x", "110")
    toptwoX.setAttribute("y", "25")
    toptwoX.setAttribute("width", "50")
    toptwoX.setAttribute("height", "50")
    toptwoX.setAttribute("fill", "white")
    toptwoX.setAttribute("stroke-width", "10")
    toptwoX.setAttribute("stroke", "red")
    canvas.appendChild(toptwoX)

     document.getElementById("paragraph1")
     paragraph1.setAttribute("style", "display: block;")

     document.getElementById("paragraph2")
     paragraph2.setAttribute("style", "display: none;")

    turn = "player1"
  }
  toptwoclick = "true"
 }

 var topthreeclick = "false"
function topthree(){
 var canvas = document.getElementById("game-board")
 if (topthreeclick == "false") {
 if (turn == "player1") {
 var topthreeO = document.createElementNS(namespace, "circle")
 topthreeO.setAttribute("cx", "223")
 topthreeO.setAttribute("cy", "50")
 topthreeO.setAttribute("r", "25")
 topthreeO.setAttribute("fill", "white")
 topthreeO.setAttribute("stroke-width", "10")
 topthreeO.setAttribute("stroke", "blue")
 canvas.appendChild(topthreeO)

 document.getElementById("paragraph1")
 paragraph1.setAttribute("style", "display: none;")

 document.getElementById("paragraph2")
 paragraph2.setAttribute("style", "display: block;")

 turn = "player2"
  } else if (turn == "player2"){
    var topthreeX = document.createElementNS(namespace, "rect")
    topthreeX.setAttribute("x", "200")
    topthreeX.setAttribute("y", "25")
    topthreeX.setAttribute("width", "50")
    topthreeX.setAttribute("height", "50")
    topthreeX.setAttribute("fill", "white")
    topthreeX.setAttribute("stroke-width", "10")
    topthreeX.setAttribute("stroke", "red")
    canvas.appendChild(topthreeX)

    document.getElementById("paragraph1")
    paragraph1.setAttribute("style", "display: block;")

    document.getElementById("paragraph2")
    paragraph2.setAttribute("style", "display: none;")

    turn = "player1"
  }
  topthreeclick = "true"
}
}


var middleoneclick = "false"
function middleone(){
var canvas = document.getElementById("game-board")
if (middleoneclick == "false") {
if (turn == "player1") {
var middleoneO = document.createElementNS(namespace, "circle")
middleoneO.setAttribute("cx", "47")
middleoneO.setAttribute("cy", "140")
middleoneO.setAttribute("r", "25")
middleoneO.setAttribute("fill", "white")
middleoneO.setAttribute("stroke-width", "10")
middleoneO.setAttribute("stroke", "blue")
canvas.appendChild(middleoneO)

document.getElementById("paragraph1")
paragraph1.setAttribute("style", "display: none;")

document.getElementById("paragraph2")
paragraph2.setAttribute("style", "display: block;")

turn = "player2"
}
else if (turn == "player2"){
  var middleoneX = document.createElementNS(namespace, "rect")
  middleoneX.setAttribute("x", "22")
  middleoneX.setAttribute("y", "116")
  middleoneX.setAttribute("width", "50")
  middleoneX.setAttribute("height", "50")
  middleoneX.setAttribute("fill", "white")
  middleoneX.setAttribute("stroke-width", "10")
  middleoneX.setAttribute("stroke", "red")
  canvas.appendChild(middleoneX)

  document.getElementById("paragraph1")
  paragraph1.setAttribute("style", "display: block;")

  document.getElementById("paragraph2")
  paragraph2.setAttribute("style", "display: none;")

  turn = "player1"
}
middleoneclick = "true"
}
}

var middletwoclick = "false"
function middletwo(){
var canvas = document.getElementById("game-board")
if (middletwoclick == "false") {
if (turn == "player1") {
var middletwoO = document.createElementNS(namespace, "circle")
middletwoO.setAttribute("cx", "134")
middletwoO.setAttribute("cy", "140")
middletwoO.setAttribute("r", "25")
middletwoO.setAttribute("fill", "white")
middletwoO.setAttribute("stroke-width", "10")
middletwoO.setAttribute("stroke", "blue")
canvas.appendChild(middletwoO)

document.getElementById("paragraph1")
paragraph1.setAttribute("style", "display: none;")

document.getElementById("paragraph2")
paragraph2.setAttribute("style", "display: block;")

turn = "player2"
}
else if (turn == "player2"){
  var middletwoX = document.createElementNS(namespace, "rect")
  middletwoX.setAttribute("x", "110")
  middletwoX.setAttribute("y", "116")
  middletwoX.setAttribute("width", "50")
  middletwoX.setAttribute("height", "50")
  middletwoX.setAttribute("fill", "white")
  middletwoX.setAttribute("stroke-width", "10")
  middletwoX.setAttribute("stroke", "red")
  canvas.appendChild(middletwoX)

  document.getElementById("paragraph1")
  paragraph1.setAttribute("style", "display: block;")

  document.getElementById("paragraph2")
  paragraph2.setAttribute("style", "display: none;")

  turn = "player1"
}
middletwoclick = "true"
}
}

var middlethreeclick = "false"
function middlethree(){
var canvas = document.getElementById("game-board")
if (middlethreeclick == "false") {
if (turn == "player1") {
var middlethreeO = document.createElementNS(namespace, "circle")
middlethreeO.setAttribute("cx", "223")
middlethreeO.setAttribute("cy", "140")
middlethreeO.setAttribute("r", "25")
middlethreeO.setAttribute("fill", "white")
middlethreeO.setAttribute("stroke-width", "10")
middlethreeO.setAttribute("stroke", "blue")
canvas.appendChild(middlethreeO)

document.getElementById("paragraph1")
paragraph1.setAttribute("style", "display: none;")

document.getElementById("paragraph2")
paragraph2.setAttribute("style", "display: block;")

turn = "player2"
}
else if (turn == "player2"){
  var middlethreeX = document.createElementNS(namespace, "rect")
  middlethreeX.setAttribute("x", "200")
  middlethreeX.setAttribute("y", "116")
  middlethreeX.setAttribute("width", "50")
  middlethreeX.setAttribute("height", "50")
  middlethreeX.setAttribute("fill", "white")
  middlethreeX.setAttribute("stroke-width", "10")
  middlethreeX.setAttribute("stroke", "red")
  canvas.appendChild(middlethreeX)

  document.getElementById("paragraph1")
  paragraph1.setAttribute("style", "display: block;")

  document.getElementById("paragraph2")
  paragraph2.setAttribute("style", "display: none;")

  turn = "player1"
}
middlethreeclick = "true"
}
}

var bottomoneclick = "false"
function bottomone(){
var canvas = document.getElementById("game-board")
if (bottomoneclick == "false") {
if (turn == "player1") {
var bottomoneO = document.createElementNS(namespace, "circle")
bottomoneO.setAttribute("cx", "47")
bottomoneO.setAttribute("cy", "230")
bottomoneO.setAttribute("r", "25")
bottomoneO.setAttribute("fill", "white")
bottomoneO.setAttribute("stroke-width", "10")
bottomoneO.setAttribute("stroke", "blue")
canvas.appendChild(bottomoneO)

document.getElementById("paragraph1")
paragraph1.setAttribute("style", "display: none;")

document.getElementById("paragraph2")
paragraph2.setAttribute("style", "display: block;")

turn = "player2"
}
else if (turn == "player2"){
  var bottomoneX = document.createElementNS(namespace, "rect")
  bottomoneX.setAttribute("x", "22")
  bottomoneX.setAttribute("y", "205")
  bottomoneX.setAttribute("width", "50")
  bottomoneX.setAttribute("height", "50")
  bottomoneX.setAttribute("fill", "white")
  bottomoneX.setAttribute("stroke-width", "10")
  bottomoneX.setAttribute("stroke", "red")
  canvas.appendChild(bottomoneX)

  document.getElementById("paragraph1")
  paragraph1.setAttribute("style", "display: block;")

  document.getElementById("paragraph2")
  paragraph2.setAttribute("style", "display: none;")

  turn = "player1"
}
bottomoneclick = "true"
}
}

var bottomtwoclick = "false"
function bottomtwo(){
var canvas = document.getElementById("game-board")
if (bottomtwoclick == "false") {
if (turn == "player1") {
var bottomtwoO = document.createElementNS(namespace, "circle")
bottomtwoO.setAttribute("cx", "135")
bottomtwoO.setAttribute("cy", "230")
bottomtwoO.setAttribute("r", "25")
bottomtwoO.setAttribute("fill", "white")
bottomtwoO.setAttribute("stroke-width", "10")
bottomtwoO.setAttribute("stroke", "blue")
canvas.appendChild(bottomtwoO)

document.getElementById("paragraph1")
paragraph1.setAttribute("style", "display: none;")

document.getElementById("paragraph2")
paragraph2.setAttribute("style", "display: block;")

turn = "player2"
}
else if (turn == "player2"){
  var bottomtwoX = document.createElementNS(namespace, "rect")
  bottomtwoX.setAttribute("x", "110")
  bottomtwoX.setAttribute("y", "205")
  bottomtwoX.setAttribute("width", "50")
  bottomtwoX.setAttribute("height", "50")
  bottomtwoX.setAttribute("fill", "white")
  bottomtwoX.setAttribute("stroke-width", "10")
  bottomtwoX.setAttribute("stroke", "red")
  canvas.appendChild(bottomtwoX)

  document.getElementById("paragraph1")
  paragraph1.setAttribute("style", "display: block;")

  document.getElementById("paragraph2")
  paragraph2.setAttribute("style", "display: none;")

  turn = "player1"
}
bottomtwoclick = "true"
}
}

var bottomthreeclick = "false"
function bottomthree(){
var canvas = document.getElementById("game-board")
if (bottomthreeclick == "false") {
if (turn == "player1") {
var bottomthreeO = document.createElementNS(namespace, "circle")
bottomthreeO.setAttribute("cx", "223")
bottomthreeO.setAttribute("cy", "230")
bottomthreeO.setAttribute("r", "25")
bottomthreeO.setAttribute("fill", "white")
bottomthreeO.setAttribute("stroke-width", "10")
bottomthreeO.setAttribute("stroke", "blue")
canvas.appendChild(bottomthreeO)

document.getElementById("paragraph1")
paragraph1.setAttribute("style", "display: none;")

document.getElementById("paragraph2")
paragraph2.setAttribute("style", "display: block;")

turn = "player2"
}
else if (turn == "player2"){
  var bottomthreeX = document.createElementNS(namespace, "rect")
  bottomthreeX.setAttribute("x", "200")
  bottomthreeX.setAttribute("y", "205")
  bottomthreeX.setAttribute("width", "50")
  bottomthreeX.setAttribute("height", "50")
  bottomthreeX.setAttribute("fill", "white")
  bottomthreeX.setAttribute("stroke-width", "10")
  bottomthreeX.setAttribute("stroke", "red")
  canvas.appendChild(bottomthreeX)

  document.getElementById("paragraph1")
  paragraph1.setAttribute("style", "display: block;")

  document.getElementById("paragraph2")
  paragraph2.setAttribute("style", "display: none;")

  turn = "player1"
}
bottomthreeclick = "true"
}
}
function resetboard(){
  location.reload();
}
