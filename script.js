// create an array of Words
const word = ['hello'] //, 'loki', 'hulk', 'thor', 'cable', 'spider-man', 'magneto', 'mystique', 'rogue' ]
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
		for(var i = 0; i < choosenWord.length; i++){
			underScore.push('_');
		}
		return underScore;
	}

console.log(choosenWord);


// Get users guess from pressing the key
//if users guess is right

	var guess = function(){
	var keyword = String.fromCharCode(event.keyCode);
//takes generated words index from event starting fom 0 
	
	for(var i = 0; i < choosenWord.length; i++){
		// if(i > choosenWord.length) break;
		if(choosenWord.indexOf(keyword) > i){

		rightWord.push(keyword);
// replaces underscore with right letter
		underScore[choosenWord.indexOf(keyword)] = keyword;


		docUnderScore[0].innerHTML = underScore.join(' ');
//pushes letter to right word array		
		docRightGuess[0].innerHTML = rightWord;
	}
//need for loop that runs through then whole index and doesnt stop
		if(underScore.join('') == choosenWord){
			swal("You Win!");
			
	}else {
		wrongWord.push(keyword);
		wrongCount++
		if(wrongCount > MAX_WRONG_ALLOWED){
			swal("You lose!");
			//do lose condition/game over stuff here
		}
//pushes letter to wrong word array		
		docWrongGuess[0].innerHTML = wrongWord
		console.log(wrongWord);
		}
	}
};

document.addEventListener('keypress', guess);
docUnderScore[0].innerHTML = generateUnderscore().join(' ');


function reloadGame() {
  location.reload()
}
// for two players create score system ??
// or change color of text for player 
//when text is pushed to a box