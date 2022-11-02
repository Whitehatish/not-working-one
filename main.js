moustacheX = 0;
moustacheY = 0;

function preload(){
    moustache = loadImage("https://i.postimg.cc/jqQHp1GG/moustache-image-proper.webp");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        moustacheX = results[0].poses.nose.x;
        moustacheY = results[0].poses.nose.y;
        console.log("Moustache X = " + moustacheX);
        console.log("Moustache Y = " + moustacheY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache, moustacheX, moustacheY, 70, 70);
}

function take_snapshot(){
    save("random.png");
}