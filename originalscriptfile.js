
//choose word randomly
var randNum;
var wrongWord = [];
var choosenWord;
var underScore = [];
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess= document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
var wrongCount = 0;
var MAX_WRONG_ALLOWED = 5;

function randomize(){
	var word = ['loki', 'hulk', 'thor', 'cable', 'spider-man', 'magneto', 'mystique', 'rogue' ]
	randNum = Math.floor(Math.random() * word.length);
	choosenWord = word[randNum];
	console.log(choosenWord);
	return choosenWord;
};



//create underscores based on the length of the array
function generateUnderscore(){
	
	for(var i = 0; i < choosenWord.length; i++){
		underScore.push('_');
	}
		return underScore;
};

function renderUnderscore(){
	randomize();
	document.addEventListener('keypress', guess);
	underScore.length = 0;
	let docUnderScore = document.getElementsByClassName('underscore');
	docUnderScore[0].innerHTML = generateUnderscore().join(' ');
};




// Get users guess from pressing the key
//if users guess is right
function guess(){
	var keyword = String.fromCharCode(event.keyCode);
//takes generated words index from event starting fom 0 
		if(choosenWord.indexOf(keyword) > -1){
			// replaces underscore with right letter
			underScore[choosenWord.indexOf(keyword)] = keyword;
			docUnderScore[0].innerHTML = underScore.join(' ');
		if(underScore.join('') == choosenWord){
			win();

		}	
	}else {
		wrongWord.push(keyword);
		wrongCount++
		if(wrongCount > MAX_WRONG_ALLOWED){
			lose();
		}
//pushes letter to wrong word array		
		docWrongGuess[0].innerHTML = wrongWord
		console.log(wrongWord);
		}
	};



function lose(){
	swal("You lose!");
	document.removeEventListener('keypress', guess);
	clearArrs();
}	

function win(){
	clearArrs();
	swal("You Win!");
	document.removeEventListener('keypress', guess);
	
};

function clearArrs(){
	wrongWord.length = 0;
	docWrongGuess[0].innerHTML = [];
	console.log('Clear!');
};

renderUnderscore();
// document.addEventListener('keypress', guess);
// docUnderScore[0].innerHTML = generateUnderscore().join(' ');

document.getElementById('playAgain').addEventListener('click', renderUnderscore);


