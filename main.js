function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    
     canvas= createCanvas(500,500);
     canvas.position(560,130);
    
     poseNet= ml5.poseNet(video,modelLoaded);
     poseNet.on('pose', gotPoses);
    }
    
    function gotPoses(){
        if(results.length > 0);
        {
       console.log(results);
        }
    }
    
    function draw(){
        background('#000000')
    }
     
    function modelLoaded(){
        console.log('PoseNet is initialized');
    
    }