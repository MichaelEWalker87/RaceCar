var carPic = document.createElement("img");
var carPicLoaded = false; 

var carX = 75;
var carY = 75;
var carAng = 0;
var carSpeed = 0;

const GROUNDSPEED_DECAY_MULT = 0.99; 
const DRIVE_POWER = 0.4; 
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.05;

function carImageLoad(){
  carPic.onload = function(){
    carPicLoaded = true;
  };
  carPic.src= "X-wing.png";
}

function carReset() {
  for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
    for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
      var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
      if(trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
        trackGrid[arrayIndex] = TRACK_ROAD;
        carAng =  -Math.PI/2;
        carX = eachCol * TRACK_W + TRACK_W/2;
        carY = eachRow * TRACK_H + TRACK_H/2;
      }
    }
  }
} // car starting placment

function carMove() {
  carSpeed *= GROUNDSPEED_DECAY_MULT; //slows the car down overtime 

  if(keyHeld_Gas){
    carSpeed += DRIVE_POWER;
  }
  if(keyHeld_Reverse){
    carSpeed -= REVERSE_POWER;
  }
  if(keyHeld_TrunLeft){
    carAng -= TURN_RATE;
  }
  if(keyHeld_TurnRight){
    carAng += TURN_RATE;
  }
  carX += Math.cos(carAng) * carSpeed; //Cos used for the X axis the car in angled direction
  carY += Math.sin(carAng) * carSpeed; //Sin used for the Y axis the car in angled direction 
}

function carDraw(){
  if(carPicLoaded) {
    drawBitmapCenteredWithRotation(carPic, carX,carY, carAng);
  }
}