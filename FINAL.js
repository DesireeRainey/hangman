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
		for(var i = 0; i < choosenWord.length; i++){
			underScore.push('_');
		}
		return underScore;
	}

function renderUnderscore(){
	document.addEventListener('keypress', guess);
	underScore.length = 0;
	let docUnderScore = document.getElementsByClassName('underscore');
	docUnderScore[0].innerHTML = generateUnderscore().join(' ');
};

console.log(choosenWord);


// Get users guess from pressing the key
//if users guess is right

	var guess = function(){
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
			win();
			swal("You Win!");

		}	
	}else {
		wrongWord.push(keyword);
		wrongCount++
		if(wrongCount > MAX_WRONG_ALLOWED){
			swal("You lose!");
		}
//pushes letter to wrong word array		
		docWrongGuess[0].innerHTML = wrongWord
		console.log(wrongWord);
		}
	};

function win(){
	document.removeEventListener('keypress', guess);
}

// renderUnderscore();
// document.addEventListener('keypress', guess);
// docUnderScore[0].innerHTML = generateUnderscore().join(' ');

document.getElementById('playAgain').addEventListener('click', renderUnderscore, choosenWord);


