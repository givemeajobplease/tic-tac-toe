// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
// for circles cx = 47 135 223 squares x = 22 110
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
    turn = "player1"
  }
  toptwoclick = "true"
 }

 var topthreeclick = "false"
function topthree(){
 var canvas = document.getElementById("game-board")
 if (topthreeclick == "false") {
 var topthreeO = document.createElementNS(namespace, "circle")
 topthreeO.setAttribute("cx", "223")
 topthreeO.setAttribute("cy", "50")
 topthreeO.setAttribute("r", "25")
 topthreeO.setAttribute("fill", "white")
 topthreeO.setAttribute("stroke-width", "10")
 topthreeO.setAttribute("stroke", "blue")
 canvas.appendChild(topthreeO)
 topthreeclick = "true"
  }
 }
