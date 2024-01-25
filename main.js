music=""
music2="";
music1_status=""
music2_status="";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;

function preload(){
 music = loadSound("music.mp3");
 music2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 600, 500);//image(fonte da imagem, posição x e y, larg, alt)
    
    music1_status = music.isPlaying();
    music2_status = music2.isPlaying();
    fill("#FF0000");
    stroke("#FF0000");
if(scoreLeftWrist > 0.2){
circle(rightWristX,rightWristY,20);
music2.stop();

if(music1_status == false){
music1.play();
document.getElementById("music1").innerHTML = "Tocando: tema de Harry Potter";
}
if(music2_status == false){
    music2.play();
    document.getElementById("music2").innerHTML = "Tocando: tema de Peter Pan";
    }
}}
music_status
if(){


}

function modelLoaded(){
    console.log("PoseNet foi inicializado!");
}
function gotPoses(results){
if(results.length > 0){
console.log(results);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = "+ rightWristX +"rightWristY = "+rightWristY);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = "+ leftWristX +"leftWristY = "+leftWristY);
scoreRightWrist = results[0].pose.keypoints[10].score;
scoreLeftWrist = results[0].pose.keypoints[9].score;
}}
function play(){
music.play();
music.setVolume();
music.rate();
}