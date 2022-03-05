let firstMode = document.getElementById('first-container');
let secondMode = document.getElementById('second-container');
let resultScreen = document.getElementById('result-container');
let loose = document.getElementById('loose-container');
let display = document.getElementById('inputvalue');
let display_number = document.getElementsByClassName('EnterNumber');
let display_attempt = document.getElementsByClassName('Noattempt');
let notice = document.getElementById('notice');
//Generate random value
let value = Math.floor((Math.random()*20)+1);
console.log(value);
let Easy_attempt=0;
let Hard_attempt=0;
let game_Level;
function easymode(){
	firstMode.style.display = "none";
	secondMode.style.display = "block";
	game_Level = 1;
}
function hardmode(){
	firstMode.style.display = "none";
	secondMode.style.display = "block";
	game_Level = 0;
}
function resultscreen(){
	let newValue = Math.floor((Math.random()*20)+1);
	value = newValue;
	console.log("Your New Value is :" + value);
	display_number[0].innerHTML = "";
	display_attempt[0].innerHTML = "";
	display.value = "";
	notice.innerHTML = "";
		secondMode.style.display = "none";
		loose.style.display = "none";
		resultScreen.style.display = "block";
}
function newGamePage(){
	firstMode.style.display = "block";
	resultScreen.style.display = "none";
	loose.style.display = "none";
}
function loseGame(){
	let newValue1 = Math.floor((Math.random()*20)+1);
	value = newValue1;
	console.log("Your New Value is :" + value);
	display_number[0].innerHTML = "";
	display_attempt[0].innerHTML = "";
	display.value = "";
	notice.innerHTML = "";
	Easy_attempt = 0;
	Hard_attempt = 0;
		secondMode.style.display = "none";
		loose.style.display = "block";
}
function submit(){
	if(game_Level==1)
	{
		Easy_attempt++;
		display_number[0].innerHTML = display.value;
		display_attempt[0].innerHTML = Easy_attempt;
		console.log(Easy_attempt);
		if(Easy_attempt<=10){
			if(display.value == value){	
				resultscreen();
			}
			else if(display.value>value)
			{
				notice.innerHTML = "Your Guess Is High &#128561";
			}
			else if(display.value<value)
			{	
				notice.innerHTML = "Your Guess Is Low &#128543";
			}
			else{
				notice.innerHTML = "error";
			}
		}
		else{
			loseGame();
		}
	}
	else if(game_Level==0)
	{
		Hard_attempt++;
		console.log(Hard_attempt);
		display_number[0].innerHTML = display.value;
		display_attempt[0].innerHTML = Hard_attempt;
		if(Hard_attempt<=5)
		{
			if(display.value == value)
			{
				resultscreen();
			}
			else if(display.value>value)
			{
				notice.innerHTML = "Your Guess Is High &#128561";
			}
			else if(display.value<value)
			{
				notice.innerHTML = "Your Guess Is Low &#128543";
			}
			else{
				notice.innerHTML = "error";
			}
		}
		else{
			loseGame();
		}
	}
}