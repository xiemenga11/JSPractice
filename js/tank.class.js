function tank(){
	return {
		//属性
		startMove:false,
		paint:C("can"),
		position:[500,250],
		direction:"up",
		//方法
		//坦克身体
		body:tankBody,
		//改变位置
		setPosition:function(position){
			this.position = position;
			this.clear();
		},
		clear:function(){
			this.paint
			.clear({
				start:[0,0],
				size:[this.paint.width,this.paint.height]
			})
		},
		//组合方法
		move:function(){
			var py;
			var px;
			if(!this.startMove){
				return;
			}
			switch(this.direction){
				case "up":
					py = this.position[1]-=2;
					px = this.position[0];
					break;
				case "left":
					py = this.position[1];
					px = this.position[0]-=2;
					break;
				case "right":
					py = this.position[1];
					px = this.position[0]+=2;
					break;
				case "down":
					py = this.position[1]+=2;
					px = this.position[0];
					break;
			}
			// this.clear();
			this.setPosition([px,py]);
			this.body();
		},
		getGun:function(){
			var GunPos = [];
			GunPos[0] = this.position[0];
			GunPos[1] = this.position[1]-20;
			return GunPos;
		}
	}


	function tankBody(){
		C("can")
		.save()
		.translate(this.position[0],this.position[1])
		switch(this.direction){
			case "up":
				C("can").spin(0);
				break;
			case "right":
				C("can").spin(90);
				break;
			case "down":
				C("can").spin(180);
				break;
			case "left":
				C("can").spin(270);
				break;
		}
		//body
		C("can").begin()
		.arc({
			r:10,
			center:[0,0]
		})
		.fill()
		//wheel
		.begin()
		.config({
			style:{
				fill:"#aaa"
			}
		})
		.frec({
			start:[-18,-14],
			size:[8,28]
		})
		.frec({
			start:[10,-14],
			size:[8,28]
		})
		//gun
		.begin()
		.frec({
			start:[-2,-20],
			size:[4,20]
		})
		.init()
	}
}