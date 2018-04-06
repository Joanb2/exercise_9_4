function drawTree(height) {
	for (var i = 1 ; i <= height ; i++) {
		var star ="";

		for (var k = i ; k <= height ; k++){
			star +=" ";
		}
		for (var j = 0 ; j < (i*2) -1 ; j++){
			star += "*";
		}
		console.log(star);
	}
}
drawTree(6);