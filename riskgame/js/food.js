var FoodManage = function(){
	this.food = {
		apple:0,
		meat:0,
		beef:0
	}
}
FoodManage.prototype = {
	add:function(foodName,amount){
		this.food[foodName] = this.food[foodName] ? this.food[foodName] += amount : amount
	},
	reduce:function(foodName,amount){
		if(this.food[foodName] > 0 && this.food[foodName] - amount >= 0){
			this.food[foodName] -= amount
			return true
		}else{
			alert(food[foodName].name + "不够")
			return false
		}
	},
	getSource:function(){
		for(var i in this.food){
			if(i == "each") continue
			this.food[i] += farmSource[i]
		}
		farmSource.each(function(i){
			farmSource[i] = 0
		})
	},
	showFoodAmount:function(){
		var FA = ""
		this.food.each(function(i){
			FA += food[i].name + ":" + this + "\n"
		})
		FA.alt()
	}
}