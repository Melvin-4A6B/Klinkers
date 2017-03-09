function codeer() {
    var string = document.getElementById("letters").value;
    	var klinker = {
		   a:"!",
		   e:"@",
		   o:"#",
		   u:"$",
		   i:"%"
		};
		string = string.replace(/a|e|o|u|i/gi, function(matched){
		  return klinker[matched];
		});
    document.getElementById("content").innerHTML = string;
}