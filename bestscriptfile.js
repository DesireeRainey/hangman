// create an array of Words
const word = ['superman', 'hawkgirl', 'supergirl', 'robin', 'batgirl', 'loki', 'hulk', 'thor', 'cable', 'spider-man', 'magneto', 'mystique', 'rogue' ];
var rightWord = [];
var wrongWord = [];
var underScore = [];
var docRightGuess= document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
var wrongCount = 0;
var MAX_WRONG_ALLOWED = 5;
// var choosenWord = word[Math.floor(Math.random() * word.length)];


//chooses random word from the const word array
//pushes underscores for each letter
function generateUnderscore(){
		var choosenWord = word[Math.floor(Math.random() * word.length)];
		console.log(choosenWord)
		for(var i = 0; i < choosenWord.length; i++){
			underScore.push('_');
		}
		return underScore;
	}

//clears board 
//grabs html class and pushes generateUnderscore to the html side
function renderUnderscore(){
	underScore.length = 0;
	let docUnderScore = document.getElementsByClassName('underscore');
	docUnderScore[0].innerHTML = generateUnderscore().join(' ');
};

//starts game on refresh
renderUnderscore();


function guess(){
	document.addEventListener('keypress', (event) => {
	var keyword = event.key;
	console.log("Letter " + event.key + " was pressed");
	});
};

guess();

//enables playAgain button that triggers renderUnderscore and generate underscore
document.getElementById('playAgain').addEventListener('click', renderUnderscore);

