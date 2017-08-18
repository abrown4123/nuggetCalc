$('#button').click(function(){
	var money = $('#money').val();
	var nuggets = nuggetMath(money);
	$('p').text(nuggets + ' nuggets');
	nuggetPic(nuggets);
	console.log(nuggets);
});

function nuggetMath(num){
	return (num/2.5)*10;
}

function nuggetPic(nug) {
	var imgDiv = $('#imgCont');
	$(imgDiv).html('');
	for (i=0; i<nug; i++) {
		var img = $('<img src = "assets/images/nugget.png"/>');
		img.appendTo(imgDiv);
	}
}