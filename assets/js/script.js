var c = document.getElementById( "icecream" );
var ctx = c.getContext("2d");


// le hublot
ctx.beginPath();
ctx.strokeStyle = "#FFFFFF";
ctx.fillStyle = "#FFFFFF";
ctx.moveTo(150,150);
ctx.bezierCurveTo(175,30,215,30,235,150);
ctx.closePath();
ctx.stroke();
ctx.fill();
// la soucoupe
ctx.beginPath();
ctx.strokeStyle = "#E0E1F3";
ctx.fillStyle = "#E0E1F3";
ctx.moveTo(75,175);
ctx.bezierCurveTo(150,100,235,100,325,175);
ctx.closePath();
ctx.stroke();
ctx.fill();
// lumières
ctx.beginPath();
ctx.strokeStyle = "#FFFFFF";
ctx.fillStyle="yellow";
ctx.arc(190,155,15,0,Math.PI*2);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(140,155,15,0,Math.PI*2);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(240,155,15,0,Math.PI*2);
ctx.stroke();
ctx.fill();
// abductor3000
ctx.beginPath();
ctx.strokeStyle = "#FFFFFF";
ctx.fillStyle = "yellow";
ctx.moveTo(235,175);
ctx.bezierCurveTo()
