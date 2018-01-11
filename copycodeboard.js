// create an array of Words
const word = ['loki', 'hulk', 'thor', 'cable', 'spider-man', 'magneto', 'mystique', 'rogue' ]
//choose word randomly
var randNum = Math.floor(Math.random() * word.length);
var rightWord = [];
var wrongWord = [];
// var choosenWord = word[randNum];
var underScore = [];
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess= document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
var wrongCount = 0;
var MAX_WRONG_ALLOWED = 5;

// function chooseWord(){
// 	randNum = Math.floor(Math.random() * word.length);
// 	choosenWord = word[randNum];
// }

//take a randomly choosen word and generates an underscore for each letter

//create underscores based on the length of the array
	var generateUnderscore = function(){
		var choosenWord = word[Math.floor(Math.random() * word.length)];
		for(var i = 0; i < choosenWord.length; i++){
			underScore.push('_');
			console.log(choosenWord);
		}
		return underScore;
	}

docUnderScore[0].innerHTML = generateUnderscore().join(' ');

// // // Get users guess from pressing the key

// document.addEventListener('keypress', guess);

		document.addEventListener('keypress', (event) => {
				var keyword = event.key
				console.log("Letter " + event.key + " was pressed");
				
				if(choosenWord.indexOf(keyword) > -1){
				
				underScore[choosenWord.indexOf(keyword)] = keyword;
				docUnderScore[0].innerHTML = underScore.join(' ');
				if(underScore.join('') == choosenWord){
				swal("You Win!");
				}
			}
		})};
		return underScore;


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
			swal("You Win!");
			win();
			//seperate into a win function that removes the event listener
			//will call win function here 
		}	
	}else {
		wrongWord.push(keyword);
		wrongCount++
		if(wrongCount > MAX_WRONG_ALLOWED){
			swal("You lose!")
			//lose function that asks if you would like to play again.
		}
//pushes letter to wrong word array		
		docWrongGuess[0].innerHTML = wrongWord
		console.log(wrongWord);
		}
	};
// // document.addEventListener('keypress', guess);

// // function win(){
// // 	document.removeEventListener('keypress', guess);

// // }

// // //add event listeners .onload function

// // function startGame(){
// // 	underScore.length = 0;
// // 	docUnderScore[0].innerHTML = generateUnderscore().join(' ');
// // 	document.addEventListener('keypress', guess);
// // 	console.log("Hello");
// // }	

// // startGame();

// // document.getElementById('playAgain').addEventListener('click', startGame);



