var countBs = function (temp){
	var count = temp.match(/B/g); 
	console.log(count.length);
};
 
countBs("BBBlahbla");