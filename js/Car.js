const GROUNDSPEED_DECAY_MULT = 0.99; 
const DRIVE_POWER = 0.3; 
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.05;
const MIN_SPEED_TO_TURN = 0.2; 

function carClass() {
  this.x = 75;
  this.y = 75;
  this.ang = 0;
  this.speed = 0;
  this.myCarPic; // which car pic to use 
	this.name = "Untitled Car";

  this.keyHeld_Gas = false;
  this.keyHeld_Reverse = false;
  this.keyHeld_TrunLeft = false;
  this.keyHeld_TurnRight = false;
  
  this.controlKeyUp;
  this.controlKeyRight;
  this.controlKeyDown;
  this.controlKeyLeft;

  this.setupInput = function(upKey, rightKey, downKey, leftKey) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
  }

  this.reset = function(whichImage, carName) {
    this.name = carName; 
    this.myCarPic = whichImage; 
    this.speed = 0; 

    for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
      for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
        if(trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
          trackGrid[arrayIndex] = TRACK_ROAD;
          this.ang =  -Math.PI/2;
          this.x = eachCol * TRACK_W + TRACK_W/2;
          this.y = eachRow * TRACK_H + TRACK_H/2;
          return;
        }
      }
    }
    console.log("No Player Start Found!!!")
  } // car starting placment
  
  this.move = function() {
    this.speed *= GROUNDSPEED_DECAY_MULT; //slows the car down overtime 
  
    if(this.keyHeld_Gas){
      this.speed += DRIVE_POWER;
    }
    if(this.keyHeld_Reverse){
      this.speed -= REVERSE_POWER;
    }
    if(Math.abs(this.speed) > MIN_SPEED_TO_TURN){
      if(this.keyHeld_TrunLeft){
        this.ang -= TURN_RATE;
      }
      if(this.keyHeld_TurnRight){
        this.ang += TURN_RATE;
      }
    }
    this.x += Math.cos(this.ang) * this.speed; //Cos used for the X axis the car in angled direction
    this.y += Math.sin(this.ang) * this.speed; //Sin used for the Y axis the car in angled direction 
    carTrackHandling(this);
  } 
  this.draw = function(){
      drawBitmapCenteredWithRotation(this.myCarPic, this.x,this.y, this.ang);
  }
}
