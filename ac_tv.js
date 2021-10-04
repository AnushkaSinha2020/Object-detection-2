status="";

function back(){
    window.location= "index.html";
}

function preload(){
    img= loadImage("at.png");
}

function draw(){
    image(img, 0, 0, 640, 420);
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.position(450, 190);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status= true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result){
    if (error){
        console.error(error);
    }
    else {
        console.log(result);
    }
}