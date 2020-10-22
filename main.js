noseX=0;
noseY=0;
function preload(){
  ImageMoustache=loadImage('https://postimg.cc/bsV5tR30');
 
 
}
function setup(){
  canvas=createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  posenet=ml5.poseNet(video, Modelloaded);
  posenet.on('pose',gotPoses);


}
function gotPoses(results){
  if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
  }
}
function Modelloaded(){
  console.log('Posenet has loaded now ');
}
function draw(){
image(video, 0, 0, 300, 300);
image(ImageMoustache, noseX, noseY, 30, 30);


}
  function snapshot(){
      save('NoseFilterImage.jfif');
  }