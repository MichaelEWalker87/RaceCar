const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

var keyHeld_Gas = false;
var keyHeld_Reverse = false;
var keyHeld_TrunLeft = false;
var keyHeld_TurnRight = false;

var mouseX = 0;
var mouseY = 0;

function setupInput(){
  canvas.addEventListener('mousemove', updateMousePos);

  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);

}

function updateMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;

  // cheat / hack to test car in any position
  /*carX = mouseX;
  carY = mouseY;
  carSpeedX = 4;
  carSpeedY = -4;*/
}

function keyPressed(evt) {
  if(evt.keyCode == KEY_LEFT_ARROW){
    keyHeld_TrunLeft = true;
  }
  if(evt.keyCode == KEY_RIGHT_ARROW){
    keyHeld_TurnRight = true;
  }
  if(evt.keyCode == KEY_UP_ARROW){
    keyHeld_Gas = true;
  }
  if(evt.keyCode == KEY_DOWN_ARROW){
    keyHeld_Reverse = true;
  }
}

function keyReleased(evt) {
  //console.log("key released: "+evt.keyCode) // allow me to see the key value when pressed
  if(evt.keyCode == KEY_LEFT_ARROW){
    keyHeld_TrunLeft = false;
  }
  if(evt.keyCode == KEY_RIGHT_ARROW){
    keyHeld_TurnRight = false;
  }
  if(evt.keyCode == KEY_UP_ARROW){
    keyHeld_Gas = false;
  }
  if(evt.keyCode == KEY_DOWN_ARROW){
    keyHeld_Reverse = false;
  }
}