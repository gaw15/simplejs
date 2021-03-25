function getRandomInt(max){

	return Math.floor(Math.random() * Math.floor(max));
}
function mainFun(){
	
	var newArr = ["Some", "Yes", "No", "Maybe", "Why"];
	var ansv = getRandomInt(5);
	document.getElementById('mainId').innerHTML = newArr[ansv];
}