window.onload=function(){
	x();
};
function x(){
var img1 =document.getElementById('start');
img1.addEventListener('mouseup', function(event){
document.getElementById('start').src="img/s2_btn1.png";
console.log('up');

window.location.assign("default2.html");

// var btnX = document.getElementById('scene2').offsetLeft;
// console.log(btnX);
},false);
img1.addEventListener('mousedown', function(event){
document.getElementById('start').src="img/s2_btn2.png";
console.log('down');
},false);};
