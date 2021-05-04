const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;
var trackGrid = [ 3, 4, 5, 1, 3, 1, 3, 4, 1, 5, 1, 3, 3, 4, 5, 4, 1, 3, 1, 5,
                  1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
                  5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
                  1, 0, 0, 0, 0, 1, 3, 1, 5, 4, 3, 1, 4, 1, 3, 1, 0, 0, 0, 1,
                  4, 0, 0, 0, 1, 1, 1, 4, 1, 3, 1, 4, 1, 5, 1, 3, 1, 0, 0, 3,
                  3, 0, 0, 1, 1, 0, 0, 1, 4, 5, 3, 1, 0, 0, 0, 0, 4, 0, 0, 1,
                  1, 0, 0, 4, 0, 0, 0, 0, 4, 3, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5,
                  4, 0, 0, 1, 0, 0, 0, 0, 0, 5, 4, 0, 0, 3, 0, 0, 5, 0, 0, 1,
                  5, 0, 0, 5, 0, 0, 1, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1, 0, 0, 4,
                  1, 0, 0, 4, 0, 0, 4, 4, 0, 0, 4, 0, 0, 1, 0, 0, 4, 0, 0, 1,
                  3, 0, 2, 3, 0, 0, 1, 3, 0, 0, 0, 0, 0, 4, 0, 0, 3, 0, 0, 3,
                  1, 1, 3, 4, 0, 0, 5, 4, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 5,
                  5, 0, 0, 0, 0, 0, 1, 5, 1, 0, 0, 0, 1, 4, 0, 0, 0, 0, 0, 3,
                  1, 0, 0, 0, 0, 0, 4, 3, 3, 5, 1, 4, 1, 1, 1, 0, 0, 0, 4, 5,
                  4, 1, 3, 4, 5, 1, 1, 4, 1, 4, 3, 1, 5, 1, 3, 1, 4, 3, 1, 3];
const TRACK_ROAD = 0;
const TRACK_ROAD2 = 6;
const TRACK_ROAD3 = 7;
const TRACK_ROAD4 = 8;
const TRACK_WALL = 1;
const TRACK_WALL2 = 3;
const TRACK_WALL3 = 4;
const TRACK_WALL4 = 5;
const TRACK_PLAYERSTART = 2;


function isObstacleAtColRow(col, row) {
  if(col >= 0 && col < TRACK_COLS &&
    row >= 0 && row < TRACK_ROWS) {
    var trackIndexUnderCoord = rowColToArrayIndex(col, row);
    return (trackGrid[trackIndexUnderCoord] != TRACK_ROAD);
  } else {
    return false;
  }
}

function carTrackHandling() {
  var carTrackCol = Math.floor(carX / TRACK_W);
  var carTrackRow = Math.floor(carY / TRACK_H);
  var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

  if(carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
    carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {

    if(isObstacleAtColRow( carTrackCol,carTrackRow )) {
      carX -= Math.cos(carAng) * carSpeed; //fixes bug to make walls more soild helps stop jams
      carY -= Math.sin(carAng) * carSpeed;

      carSpeed *= -0.5;
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
    drawTileX = 0;
    drawTileY += TRACK_H
  } // end of for each row
} // end of drawTracks func