function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  canvas.position(575,425);
  video = createCapture(VIDEO);
  video.hide();
  myModel=ml5.imageClassifier("MobileNet",modelLoaded);
}

function modelLoaded(){
  console.log("your model is ready to use");
}

function draw(){
  image(video,0,0,300,300)
  myModel.classify(video,result);
}

function result(error,answer){
  if(error){
    console.error(error);
  }
  else{
    console.log(answer);
    accuracy=answer[0].confidence.toFixed(2);
    accuracy_percent=accuracy*100;
    fixed=accuracy_percent.toFixed(2);
    document.getElementById("object").innerHTML=answer[0].label;
    document.getElementById("accuracy").innerHTML=fixed+"%";
  }
}