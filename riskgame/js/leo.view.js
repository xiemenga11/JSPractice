l.fn.view = function(data){
	for(var i in data){
		this.html(this.html().replace("{{"+ i +"}}",data[i]))
	}
}
l.view = function(data){
	data.each(function(i){
		l("#" + i).html( data[i] )
	})
}