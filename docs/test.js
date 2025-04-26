let classifier;
let img;
let label = "slow async...";
let confidence;

function preload() {
    classifier = ml5.imageClassifier("MobileNet");
    img = loadImage("images/5.jpg")
}

function gotResults(results){
    console.log(results);
    label = results[0].label;
    confidence = results[0].confidence;
}

function setup() {
    createCanvas(400,400);
    classifier.classify(img, gotResults);
}

function draw() {
    background(220);
    image(img, 0, 0, width, height);

    rectMode(CENTER);
    fill(0);
    rect(200, 200, 400, 50);
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    noStroke();
    text(label, 200, 200);
    text(confidence, 200, 200);


}