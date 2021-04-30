var carPic = document.createElement("img");
var carPicLoaded = false; 
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

function carImageLoad(){
  carPic.onload = function(){
    carPicLoaded = true;
  };
  carPic.src= "X-wing.png";
}

function trackLoadImages(){
  roadPic.src= "RoadPic.png";
  wallPic.src= "WallPic.png";
}

function loadImages() {
  carImageLoad();
  trackLoadImages();
}