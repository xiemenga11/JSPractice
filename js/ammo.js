function ammo(ammoPos){
	return {
		can:C("can"),
		position:ammoPos,
		shot:shot
	}
}
function shot(){
	var apx = this.position[0];
	var apy = this.position[1]-=2;
	this.can
	.save()
	.begin()
	.arc({
		r:2,
		center:[apx,apy]
	})
	.fill()
	.init()
}