function preload(){

}

function setup(){
    canvas = createCanvas(600,600);

    canvas.position(350,200);

    video=createCapture(VIDEO);

video.hide();


  
}

function draw(){
  image(video,200,200,200,200);
  circle1= circle(70,70,70);
    circle2= circle(530,530,70);
   circle3=  circle(530,70,70);
    circle4= circle(70,530,70);
     rect1 = rect(105,60,390,20);
    rect2= rect(60,105,20,390);
     rect3 = rect(520,105,20,390);
    rect4= rect(105,520,390,20);

    circle1.fill('yellow');
    
    
}


function take_snapshot(){
save("selfie.png");
}