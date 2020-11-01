var canvas = document.getElementById("myCanvas");
    context = canvas.getContext('2d');

var boxPx = 50;
var radius = 25;
var lineNum = 15;

var chess = 0;
var chess_rec = [];

var Gomoku = [
    { name: 'black', color: '#000000' },
    { name: 'white', color: '#ffffff' },
];