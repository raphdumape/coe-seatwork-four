function joinArray(a,b){
	var check = "";
	for(var d in a){
		check += (a[d] + b);
	}
		return check;
}
var color = ["blue", "red", "green"]

joinArray(color, "+");