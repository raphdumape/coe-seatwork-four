var A = prompt ("Enter first argument: ");
var B = prompt ("Enter second argument: ");
var C = parseInt(A);
var D = parseInt(B);

var min = function (C, D){
	if (C < D){
		return C;
			}else if (C > D){ return D;}
};

console.log(min(C,D));