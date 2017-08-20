$('#button').click(function(){
	var money = $('#money').val();
	if (money > 10000){
		$('p').text('Any value over $10,000 will potentially crash your browser.');
		nuggetPic(0);
	} else if (money > 0 && money <= 10000){
			var nuggets = Math.floor(money * 4);
			$('p').text("You Can Buy " + nuggets + ' Nuggets');
			nuggetPic(nuggets);
	} else {
			$('p').text('Please Enter a Valid Dollar Amount');
			nuggetPic(0);
		}
});

function nuggetPic(nug) {
	var imgDiv = $('#imgCont');
	imgDiv.html('');
	for (i=0; i<nug; i++) {
		imgDiv.append('<img src = "assets/images/nugget.png"/>');
	}
}