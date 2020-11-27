var string1;
var string2;
var arr1;
var arr2;
var v;
var p;
function getstring(){
string1 = document.getElementById("userInput").value;
string2 = document.getElementById("userInput2").value;

arr1=string1.split("");
temp=arr1;
arr2=string2.split("")

console.log(arr1);
console.log(arr2);
v=isEqual();
if(v==false){
	document.getElementById("Output1").innerHTML="The values are not the same";
}
else{
	document.getElementById("Output1").innerHTML="The values are the same"
}
p= isPalindrome();
if(p==false){
	document.getElementById("Output2").innerHTML="The values are not palindromes";
}
else{
	document.getElementById("Output2").innerHTML="The values are palindromes";
}
}

function isEqual(){
	if(arr1.length!=arr2.length) 
   	return(false)
  	else
  { 
   for(var i=0;i<arr1.length;i++) 
   if(arr1[i]!=arr2[i]) 
   return(false)
   return(true)
  } 
}

function isPalindrome(){
	if(arr1.length != arr2.length){
		return(false)
	}else{
		var temp= arr1.reverse();
	for(var i=0; i<temp.length; i++){
		if(temp[i]!=arr2[i]) 
		return(false);
		return(true);
	}
	
	}
}


