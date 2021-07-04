function setup(){
    canvas = createCanvas(250,250);
    canvas.position(500,250);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2AnxV0YoR/model.json", modelLoaded);
}
function modelLoaded() {
    console.log("model loaded");
}
function draw(){
    image(video, 0,0,300,300);
    classifier.classify(video,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("resultObjectName").innerHTML=results[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
