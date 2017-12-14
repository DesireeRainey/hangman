// create an array of Words
const word = ['loki', 'hulk', 'thor', 'ant-man', 'spider-man' ]
//choose word randomly
var randNum = Math.floor(Math.random() * word.length);
var rightWord = [];
var wrongWord = [];
var choosenWord = word[randNum];
var underScore = [];
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess= document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess')

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
document.addEventListener('keypress', function(){
	var keyword = String.fromCharCode(event.keyCode);
	
	if(choosenWord.indexOf(keyword) > -1){
		rightWord.push(keyword);
//replaces underscore 
		underScore[choosenWord.indexOf(keyword)] = keyword;
		docUnderScore[0].innerHTML = underScore.join(' ');
		docRightGuess[0].innerHTML = rightWord;

		if(underScore.join('') == choosenWord){
			alert('You Win');
		}
	}else {
		wrongWord.push(keyword);
		docWrongGuess[0].innerHTML = wrongWord
		console.log(wrongWord);
	}
});

docUnderScore[0].innerHTML = generateUnderscore().join(' ');

//check each letter guess to see if it is right

//if right push to right box (store in array??)

//if wrong push to wrong box (? store in an array)

// for two players create score system ??
// or change color of text for player 
//when text is pushed to a box