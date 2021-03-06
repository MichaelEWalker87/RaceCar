var carPic = document.createElement("img");
var carPic2 = document.createElement("img");
var trackPicks = [];

var picsToLoad = 0; //set auto by load images 

function countLoadImagesAndLaunchIfReady(){
  picsToLoad--; 
  //console.log(picsToLoad)
  if(picsToLoad == 0){
    ImageLoadingDoneSoStartGame()
  }
};

function beginLoadingImage(imgVar, fileName){
  imgVar.onload = countLoadImagesAndLaunchIfReady; 
  imgVar.src = "images/"+fileName;
}

function loadImageForTrackCode(trackCode, fileName) {
  trackPicks[trackCode] = document.createElement("img")
  beginLoadingImage(trackPicks[trackCode], fileName);
}

function loadImages() {
  var imageList = [
    {varName: carPic, theFile: "X-wing.png"}, 
    {varName: carPic2, theFile: "Y-wing.png"}, 
    {trackType: TRACK_WALL, theFile: "WallPic.png"}, 
    {trackType: TRACK_WALL2, theFile: "WallPic_Two.png"}, 
    {trackType: TRACK_WALL3, theFile: "WallPic_Three.png"}, 
    {trackType: TRACK_WALL4, theFile: "WallPic_Four.png"},
    {trackType: TRACK_ROAD, theFile: "RoadPic.png"}, 
    {trackType: TRACK_ROAD2, theFile: "RoadPic_Two.png"}, 
    {trackType: TRACK_ROAD3, theFile: "RoadPic_Three.png"}, 
    {trackType: TRACK_ROAD4, theFile: "RoadPic_Four.png"}, 
    {trackType: TRACK_GOAL, theFile: "Track_Goal.png"},
  ];

  picsToLoad = imageList.length

  for(var i=0; i<imageList.length; i++){
    if( imageList[i].varName != undefined){
      beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    } else {
      loadImageForTrackCode( imageList[i].trackType, imageList[i].theFile)
    }
  }
}