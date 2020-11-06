let canvas = document.getElementById("myCanvas");
context = canvas.getContext('2d');
var h2 = document.getElementsByClassName("h2")[0];

let img = new Image();
img.src = "image/bg.jpg";
let img_w = new Image();
img_w.src = "image/w.png"
let img_b = new Image();
img_b.src = "image/b.png"

let boxPx = 50;
let radius = 25;
let lineNum = 15;

// let chess = 0;//black or white
let chess_rec = []; //record 
let isBlack = true;
let isOver = false;
