function mostFrequent(input){    
	var count = {};  
	var c = 0;  
	var d;   
	for(var e in input) {
        count[input[e]]=(count[input[e]] || 0)+1; 
        if(count[input[e]] > c) { 
                c = count[input[e]];  
                d = input[e];     
        }
	}
	return d + " ( " + c + " times )";
}

mostFrequent("Maaaark Keeeeeelvin");