var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");

contexto.fillStyle = "#000000";
contexto.fillRect(0,0,2000,2000);

contexto.fillStyle = "#E84DA1";
contexto.fillRect(10,10,310,310);

contexto.fillStyle = "#F5BE73";
contexto.fillRect(330,10,330,500);

contexto.beginPath();
contexto.strokeStyle = "#FFFFFF";
contexto.lineWidth = 5;
contexto.arc(780, 110, 100, 0, 2 * Math.PI);
contexto.stroke();