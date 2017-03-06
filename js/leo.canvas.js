(function(w){
	function _C(obj){
		var can=document.getElementById(obj);
		this.can=can.getContext("2d");
		return this;
	}
	_C.prototype={
		fillStyle:function(color){
			this.can.fillStyle=color;
			return this;
		},
		strokeStyle:function(color){
			this.can.strokeStyle=color;
			return this;
		},
		shadow:function(config){
			this.can.save();
			var con={
				color:"black",
				blur:0,
				x:0,
				y:0
			}
			if(config){
				for(var i in config){
					con[i]=config[i];
				}
			}
			this.can.shadowBlur=con.blur;
			this.can.shadowOffsetX=con.x;
			this.can.shadowOffsetY=con.y;
			this.can.shadowColor=con.color;
			return this;
		},
		restore:function(){
			this.can.restore();
			return this;
		},
		rec:function(config){
			var fill=config.fill?config.fill:"fill";
			if(config.color){
				this.can.fillStyle=config.color;
			}
			if(config.fill=="stroke"){
				this.can.strokeStyle=config.color;
			}
			this.can[fill+"Rect"](config.start[0],config.start[1],config.size[0],config.size[1]);
			return this;
		},
		clear:function(config){
			this.can.clearRect(config.start[0],config.start[1],config.size[0],config.size[1]);
			return this;
		},
		line:function(config){
			this.can.beginPath();
			//线颜色
			if(config.color){
				this.can.strokeStyle=config.color;
			}
			//线转角
			//miter:尖角转角
			//bevel:方形转角
			//round:圆角
			if(config.join){
				this.can.lineJoin=config.join;
			}else{
				this.can.lineJoin="miter";
			}
			//线宽
			if(config.width){
				this.can.lineWidth=config.width;
			}else{
				this.can.lineWidth=1;
			}
			//端点样式
			//butt:方形
			//round:圆形
			//squar:方形线帽
			if(config.head){
				this.can.lineCap=config.head;
			}else{
				this.can.lineCap="butt";
			}
			this.can.moveTo(config.start[0],config.start[1]);
			for(var i = 0; i<config.path.length; i++){
				this.can.lineTo(config.path[i][0],config.path[i][1]);
			}
			//闭合路径
			if(config.close==true){
				this.can.closePath();
			}
			this.can.stroke();
			return this;
		},
		gradient:function(config){
			var gra=this.can.createLinearGradient(config.size[0],config.size[1],config.size[2],config.size[3]);
			for(var i = 0; i<config.stop.length; i++){
				gra.addColorStop(config.stop[i][0],config.stop[i][1]);
			}
			return gra;
		},
		arc:function(config){
			var con={
				start:0,
				end:2,
				desc:false,
				close:false,
				fill:false
			}
			for(var i in config){
				con[i] = config[i];
			}
			this.can.beginPath();
			if(con.color){
				this.can.strokeStyle=con.color;
			}
			this.can.arc(con.center[0],con.center[1],con.r,con.start*Math.PI,con.end*Math.PI,con.desc);
			if(con.close){
				this.can.closePath();
			}
			if(con.width){
				this.can.lineWidth=con.width;
			}
			if(con.head){
				this.can.lineCap=con.head;
			}
			if(con.fill){
				this.can.fillStyle=con.color;
				this.can.fill();
			}else{
				this.can.stroke();
			}
		}
	}
	
	var C=window.C=function(obj){
		return new _C(obj);
	};
}(window))
function gradient(obj,config){
	var style=config.style||"Linear";//线性还是放射性；Linear||Radial;首字母必须大写
	var gra=obj["create"+style+"Gradient"](config.size[0],config.size[1],config.size[2],config.size[3]);
	for(var i = 0; i<config.stop.length; i++){
		gra.addColorStop(config.stop[i][0],config.stop[i][1]);
	}
	return gra;
	// return this;
}