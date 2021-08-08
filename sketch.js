var btn_red;
var btn_green;
var btn_blue;
var btn_yellow;
var btn_purple;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

 btn_red = createButton("Red");
 btn_red.position(100,50);
 btn_red.mousePressed(red_bg);

 btn_green = createButton("Green");
 btn_green.position(300,50);
 btn_green.mousePressed(green_bg);

 btn_blue = createButton("Blue");
 btn_blue.position(200,200);
 btn_blue.mousePressed(blue_bg);

 btn_yellow = createButton("Yellow");
 btn_yellow.position(100,350);
 btn_yellow.mousePressed(yellow_bg);

 btn_purple = createButton("Pink");
 btn_purple.position(300,350);
 btn_purple.mousePressed(purple_bg);
}

function draw() {
  background(r,g,b);
}


function red_bg()
{
 r = 255;
 g = 0;
 b = 0;
}

function green_bg()
{
  r = 0;
  g = 255;
  b = 0;
}

function blue_bg()
{
 r = 0;
 g = 0;
 b = 255;
}

function yellow_bg()
{
  r = 255;
  g = 255;
  b = 0;
}

function purple_bg()
{
  r = 255;
  g = 0;
  b = 255;
}