var c = C("can");
function car(){
	this.center = [500,250];
	this.wheelDeg = 0;
	this.config = {
		fwy:0,
		awy:0
	}
}
car.prototype = {
	body:function(){
		c
		.save()
		.translate(this.center[0],this.center[1])
		.begin()
		.moveTo(0,0)
		.lineTo(-200,0)
		.lineTo(-200,-20)
		.lineTo(-180,-25)
		.bezierTo(-90,-50,[-140,-50])
		.lineTo(-60,-30)
		.bezierTo(10,-20,[0,-30])
		.close()
		.fill()
		.init()
	},
	frontWheel:function(deg,y){
		var y = y || 0;
		var deg = deg || 0;
		wheel(this.center,-20,y,deg)
	},
	afterWheel:function(deg,y){
		var y = y || 0;
		var deg = deg || 0;
		wheel(this.center,-160,y,deg)
	},
	show:function(){
		this.body()
		this.frontWheel(this.wheelDeg,this.config.fwy)
		this.afterWheel(this.wheelDeg,this.config.awy)
	},
	setWheelDeg:function(deg){
		this.wheelDeg = deg;
	}
}
function clearAll(){
	c.clear({
		start:[0,0],
		size:[1000,500]
	})
}
function wheel(posi,x,y,deg){
		c
		.save()
		.begin()
		.config({
			style:{
				fill:"white"
			}
		})
		.translate(posi[0]+x,posi[1]+y)
		.spin(deg)
		.begin()
		.arc({
			center:[0,0],
			r:15
		})
		.fill()
		.config({
			style:{
				fill:"black"
			}
		})
		.begin()
		.arc({
			center:[0,0],
			r:14
		})
		.fill()
		.config({
			style:{
				fill:"white"
			}
		})
		.begin()
		.arc({
			center:[0,0],
			r:5
		})
		.fill()
		.begin()
		.arc({
			center:[6,0],
			r:1
		})
		.fill()
		.begin()
		.arc({
			center:[-6,0],
			r:1
		})
		.fill()
		.begin()
		.arc({
			center:[0,6],
			r:1
		})
		.fill()
		.begin()
		.arc({
			center:[0,-6],
			r:1
		})
		.fill()
		.init()
	}

//bg
function bg(){
	this.center = [0,263];
	this.horizone = this.center[1];
}
bg.prototype = {
	drawHor:function(){
		c
		.moveTo(this.center[0],this.center[1])
		.lineTo(1000,this.horizone)
		.stroke()
	}
}

//construction
function construction(){
	this.size = [Math.random()*100,Math.random()*-200];
	this.start = [1000,263];
	this.color = [parseInt(Math.random()*255),parseInt(Math.random()*255),parseInt(Math.random()*255)];
	this.speed = 5+Math.random()*5;
}
construction.prototype = {
	draw:function(){
		c
		.save()
		.config({
			style:{
				fill:"rgb("+this.color.join()+")"
			}
		})
		.begin()
		.frec({
			start:this.start,
			size:this.size
		})
		.init()
	}
}