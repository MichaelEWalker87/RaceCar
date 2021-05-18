var canvas, canvasContext;

var p1 = new carClass();
var p2 = new carClass();
var win = false;

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  colorRect(0,0, canvas.clientWidth,canvas.clientHeight, 'black');
  colorText("Loading", canvas.width/2, canvas.height/2, "red"); 
  
  loadImages()
}

function ImageLoadingDoneSoStartGame() {
  var framesPerSecond = 30;
  setInterval(updateAll, 1000/framesPerSecond);

  setupInput();
  loadLevel(levelOne);
}

function loadLevel(whichLevel){
  trackGrid = whichLevel.slice();
  p2.reset(carPic2, "Y-Wing"); 
  p1.reset(carPic, "X-Wing"); 
  win = false; 
  winner = "No Winner Yet"
}

function updateAll() {
  if(win){
    colorRect(0,0, canvas.clientWidth,canvas.clientHeight, 'black');
    colorText(winner, canvas.width/2, canvas.height/2, "#FFE81F");
  }else{
    moveAll();
    drawAll();
  }
}

function moveAll() {
  p2.move();
  p1.move();
}

function drawAll() {
  drawTracks();
  p2.draw();
  p1.draw();
}

