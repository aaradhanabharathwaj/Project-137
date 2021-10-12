objects=[];
status="";
var search=document.getElementById("name").value;
function setup(){
    canvas=createCanvas(370,300);
    canvas.center();
    canvas.position(580,380);
    video=createCapture(VIDEO);
    video.size(370,300);
    video.hide();
}
function draw(){
    image(video, 0, 0, 370, 300);
    if(status !=""){
        objectDetector.detect(gotResult);
        document.getElementById("status").innerHTML="Object mentioned Found";
        speak();
        fill("#ffffff");
      percent=floor(objects[i].confidence*100);
      text(objects[i].label+""+percent+"%",objects[i].x+15, objects[i].y+15);
noFill();
stroke("#ffffff");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
function start(){
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded.");
status=true;
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
function speak(){
    var synth=window.speechSynthesis;
   speak_data1=status+"Found";
    var utterThis=new SpeechSynthesisUtterance(speak_data1);
    utterThis.rate=0.5;
    synth.speak(utterThis);
}