var canvas, canvasContext;

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
  carReset(); 
}


function updateAll() {
  moveAll();
  drawAll();
}

function moveAll() {
  carMove();
  carTrackHandling();
}

function drawAll() {
  drawTracks();
  carDraw();
}

