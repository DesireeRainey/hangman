// create an array of Words
const word = ['loki', 'hulk', 'thor', 'cable', 'spider-man', 'magneto', 'mystique', 'rogue' ]
//choose word randomly
var randNum = Math.floor(Math.random() * word.length);
var rightWord = [];
var wrongWord = [];
var choosenWord = word[randNum];
var underScore = [];
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess= document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
var wrongCount = 0;
var MAX_WRONG_ALLOWED = 5;


console.log(choosenWord);
//create underscores based on the length of the array
	var generateUnderscore = function(){
		console.log("guess")
		for(var i = 0; i < choosenWord.length; i++){
			underScore.push('_');
		}
		return underScore;
	}

console.log(choosenWord);

// Get users guess from pressing the key


	function guess(){
	var keyword = String.fromCharCode(event.keyCode);
//takes generated words index from event starting fom 0 
		if(choosenWord.indexOf(keyword) > -1){
			rightWord.push(keyword);
			// replaces underscore with right letter
			underScore[choosenWord.indexOf(keyword)] = keyword;
			docUnderScore[0].innerHTML = underScore.join(' ');
			//pushes letter to right word array		
			docRightGuess[0].innerHTML = rightWord;
		if(underScore.join('') == choosenWord){
			// swal("You Win!");
			win();
			//seperate into a win function that removes the event listener
			//will call win function here 
		}	
	}else {
		wrongWord.push(keyword);
		wrongCount++
		if(wrongCount > MAX_WRONG_ALLOWED){
			swal("You lose!");
			//lose function that asks if you would like to play again.
		}
//pushes letter to wrong word array		
		docWrongGuess[0].innerHTML = wrongWord
		console.log(wrongWord);
		}
	};

function win(){
	swal("You Win!");
	document.removeEventListener('keypress', guess);
}

//add event listeners .onload function
document.addEventListener('keypress', guess);

function startGame(){
	docUnderScore[0].innerHTML = generateUnderscore().join(' ');
}

startGame();

document.getElementById('playAgain').addEventListener('click', startGame);



