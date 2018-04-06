var i = "rows";
var k = "spaces";
var j = "stars";

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
drawTree(6);