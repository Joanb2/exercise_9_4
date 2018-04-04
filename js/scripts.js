function drawTree(height) {
	for (i = 1 ; i <= height ; i++) {
		var star ="";

		for (k = i ; k <= height ; k++){
			star +=" ";
		}
		for (j = 0 ; j < (i*2) -1 ; j++){
			star += "*";
		}
		console.log(star);
	}
}
console.log(drawTree(6));