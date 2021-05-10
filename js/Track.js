const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;
var levelOne = [ 3, 4, 5, 1, 3, 1, 3, 4, 1, 5, 1, 3, 3, 4, 5, 4, 1, 3, 1, 5,
                  1, 3, 1, 0, 9, 0, 8, 0, 0, 0, 7, 0, 0, 0, 8, 0, 0, 0, 3, 1,
                  5, 5, 0, 0, 8, 0, 0, 0, 7, 0, 0, 0, 9, 0, 0, 0, 0, 7, 0, 4,
                  1, 8, 7, 0, 0, 1, 3, 1, 5, 4, 3, 1, 4, 1, 3, 1, 0, 0, 0, 1,
                  4, 0, 0, 8, 1, 5, 1, 4, 1, 3, 1, 4, 1, 5, 1, 3, 1, 0, 9, 3,
                  3, 8, 0, 1, 4, 0, 7, 1, 4, 5, 3, 1, 0, 0, 0, 0, 4, 0, 0, 1,
                  1, 0, 0, 4, 0, 0, 0, 0, 4, 3, 1, 0, 9, 0, 0, 0, 1, 8, 0, 5,
                  4, 7, 0, 1, 8, 0, 9, 0, 0, 5, 4, 0, 0, 3, 0, 0, 5, 0, 0, 1,
                  5, 0, 7, 5, 7, 0, 1, 0, 0, 0, 1, 8, 0, 5, 8, 0, 1, 7, 0, 4,
                  1, 0, 0, 3, 0, 0, 4, 4, 8, 0, 4, 0, 0, 1, 0, 0, 4, 0, 0, 1,
                  3, 2, 2, 4, 9, 0, 1, 3, 0, 7, 0, 9, 0, 4, 0, 0, 3, 0, 0, 3,
                  1, 1, 3, 4, 0, 0, 5, 4, 0, 0, 7, 8, 0, 1, 7, 0, 0, 9, 0, 5,
                  9, 6, 7, 0, 8, 0, 1, 5, 1, 0, 0, 0, 1, 4, 9, 0, 0, 0, 0, 3,
                  0, 6, 0, 7, 0, 0, 4, 3, 3, 5, 1, 4, 1, 1, 1, 0, 7, 0, 4, 5,
                  4, 1, 3, 4, 5, 1, 1, 4, 1, 4, 3, 1, 5, 1, 3, 1, 4, 3, 1, 3];

var trackGrid = [];
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_WALL2 = 3;
const TRACK_WALL3 = 4;
const TRACK_WALL4 = 5;
const TRACK_GOAL = 6;
const TRACK_ROAD2 = 7;
const TRACK_ROAD3 = 8;
const TRACK_ROAD4 = 9;
var winner; 

function returnTileTypeAtColRow(col, row) {
  if(col >= 0 && col < TRACK_COLS &&
    row >= 0 && row < TRACK_ROWS) {
    var trackIndexUnderCoord = rowColToArrayIndex(col, row);
    return trackGrid[trackIndexUnderCoord];
  } else {
    return TRACK_WALL;
  }
}

function carTrackHandling(whichCar) {

  var carTrackCol = Math.floor(whichCar.x / TRACK_W);
  var carTrackRow = Math.floor(whichCar.y / TRACK_H);
  var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);
  
  if(carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
    carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
    var tileHere = returnTileTypeAtColRow( carTrackCol,carTrackRow );
    
    if(tileHere == TRACK_GOAL) {
			winner = whichCar.name + " Wins!";  
      win=true;
      setTimeout(function(){ loadLevel(levelOne); }, 1000);
      //loadLevel(levelOne);
		} else if(tileHere != TRACK_ROAD && tileHere != TRACK_ROAD2 && tileHere != TRACK_ROAD3 && tileHere != TRACK_ROAD4) {
      whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed; //fixes bug to make walls more soild helps stop jams
      whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;

      whichCar.speed *= -0.5;
    } // end of track found
  } // end of valid col and row
} // end of carTrackHandling func

function rowColToArrayIndex(col, row) {
  return col + TRACK_COLS * row;
}

function drawTracks() {

  var arrayIndex = 0;
  var drawTileX = 0;
  var drawTileY = 0;
  for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
    for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
      var tileKindHere = trackGrid[arrayIndex];
      var useImg = trackPicks[tileKindHere]; 
      canvasContext.drawImage(useImg, drawTileX, drawTileY);
      drawTileX += TRACK_W
      arrayIndex++;
    } // end of for each track
    drawTileY += TRACK_H;
    drawTileX = 0;
  } // end of for each row
} // end of drawTracks func