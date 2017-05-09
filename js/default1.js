window.onload=function(){
	x();
	y();
};
function x(){
var img1 =document.getElementById('start');
img1.addEventListener('mouseup', function(event){
document.getElementById('start').src="img/s2_btn1.png";
console.log('up');

window.location.assign("frame.html");

// var btnX = document.getElementById('scene2').offsetLeft;
// console.log(btnX);
},false);
img1.addEventListener('mousedown', function(event){
document.getElementById('start').src="img/s2_btn2.png";
console.log('down');
},false);};


function y(){
var img1 =document.getElementById('start');
img1.addEventListener('touchend', function(event){
document.getElementById('start').src="img/s2_btn1.png";

window.location.assign("frame.html");
},false);
var img1 =document.getElementById('start');
img1.addEventListener('touchstart', function(event){
document.getElementById('start').src="img/s2_btn2.png";
},false);};