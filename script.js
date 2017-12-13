// create an array of Words
const word = ['Superhero', 'Hulk', 'Thor', 'Captain_America' ]
//choose word randomly
var randNum = Math.floor(Math.random() * word.length);


var choosenWord = word[randNum];
var underScore = [];
console.log(choosenWord);
//create underscores based on the length of the array
	var generateUnderscore = function(){
		for(var i = 0; i < choosenWord.length; i++){
			underScore.push('_');
		}
		return underScore;
	}


console.log(generateUnderscore());


// Get users guess from pressing the key
document.addEventListener('keypress', function(){
	console.log(event.keyCode);
});

//check each letter guess to see if it is right

//if right push to right box (store in array??)

//if wrong push to wrong box (? store in an array)

// for two players create score system ??
// or change color of text for player 
//when text is pushed to a box