var Man = function(data){
	this.property = {}
	for(var i in data){
		if(i == "each") continue
		this.property[i] = data[i]
	}
	this.status = null
}

Man.prototype = {
	eat:function(food){
		for(var i in food.buff){
			if(i == "each") continue
			this.property[i] += food.buff[i]
		}
	},
	sleep:function(){
		this.property.spirit < 100 ? this.property.spirit += 10 : "我已经睡够了".alt()
	}
}