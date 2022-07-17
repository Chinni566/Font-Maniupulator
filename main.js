noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWrsitX = 0;


function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    
     canvas= createCanvas(500,500);
     canvas.position(560,130);
    
     poseNet= ml5.poseNet(video,modelLoaded);
     poseNet.on('pose', gotPoses);
    }
    
    function gotPoses(results) {
        if (results.length > 0) {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX = " + noseX + "noseY = " + noseY);
    
            leftWrsitX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWrsitX - rightWristX);
        }
    }
    
    function draw() {
        background('black');
        fill('red');
        stroke('red');
        textSize(difference);
        text('Neeraj', noseX, noseY);
    }
     
    function modelLoaded(){
        console.log('PoseNet is initialized');
    
    }