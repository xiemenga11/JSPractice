var FM = new FoodManage()
var man = new Man(data)
var mainLoop,
	farmLoop
//controles
l("#sleep").click(function(){
	man.sleep()
	refresh()
})
l("#house").click(function(){
	FM.showFoodAmount()
})
l("#getSource").click(function(){
	FM.getSource()
	refresh()
	// addFoodBtn()
})
l("#showFarm").click(function(){
	hideToggle("#farm")
})
l("#eat").click(function(){
	hideToggle("#eatFood")
})
mainLoop = setInterval(function(){
	man.property.spirit --
	man.property.hungry --
	refresh()
},30000)

farmLoop = setInterval(function(){
	farmSource.apple += Math.ceil(l.randomNum(7))
	farmSource.meat += Math.ceil(l.randomNum(5))
	farmSource.beef += Math.ceil(l.randomNum(3))
},60000)

function addFoodBtn(){
	FM.food.each(function(i){
		l(l("#eatFood").addElement("button"))
		.html(food[i].name)
		.attr({className:"ui-btn-blue col-span-12 mar-bottom"})
		.click(function(){
			if(FM.reduce(i,1)){
				man.eat(food[i])
			}
			refresh()
		})
	})
}
addFoodBtn()

function refresh(){
	l.view(man.property)
	l.view(farmSource)
}
refresh()

function hideToggle(dom){
	var display
	if(l(dom).css("display") == "none"){
		display = "block"
	}else{
		display = "none"
	}
	l(dom).css({display:display})
}