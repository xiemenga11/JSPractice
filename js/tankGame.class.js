var t;//tank
var a;
window.onload = game;
function game(){
	t = tank();
	a = ammo(t.getGun());
	t.body();
	gameloop();
}

function gameloop(){
	setInterval(function(){
		t.move();
	},20)
}

document.onkeydown = function(ev){
	var ev = ev ||event;
	var key = ev.keyCode;
	switch(key){
		case 37:
			t.direction = "left";
			break;
		case 38:
			t.direction = "up";
			break;
		case 39:
			t.direction = "right";
			break;
		case 40:
			t.direction = "down";
	}
	if(ev.keyCode>=37&&ev.keyCode<=40){
		t.startMove = true;
	}



}
document.onkeyup = function(){
	t.startMove = false;
}