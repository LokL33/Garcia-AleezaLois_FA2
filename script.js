function Add(one,two){
	var result=document.getElementById("text").innerHTML="The sum of "+one+" and "+
	two+" is "+(one+two)+".";

	document.getElementById("text").innerHTML=result;
}

function Sub(one,two){
	var result=document.getElementById("text").innerHTML="The difference of "+one+" and "+
	two+" is "+(one-two)+".";

	document.getElementById("text").innerHTML=result;
}

function Mul(one,two){
	var result=document.getElementById("text").innerHTML="The product of "+one+" and "+
	two+" is "+(one*two)+".";

	document.getElementById("text").innerHTML=result;
}

function Div(one,two){
	var result=document.getElementById("text").innerHTML="The quotient of "+one+" and "+
	two+" is "+(one/two)+".";

	document.getElementById("text").innerHTML=result;
}

function Mod(one,two){
	var result=document.getElementById("text").innerHTML="The remainder of "+one+" and "+
	two+" is "+(one%two)+".";

	document.getElementById("text").innerHTML=result;
}