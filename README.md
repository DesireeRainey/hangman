# hangman
A game of guess the Superhero. Press any key to guess letters of the displayed underscore superhero game. Six wrong guesses and you lose. Guess every letter and you become the winner! 

This game was built with HTML, CSS, Javascript and Sweet Alert pop up messages. 

Hosted on GitHub Pages.  

Approach Taken:

Started by building the basic game structure. 
	Places for right and wrong answers to live along with the choosen word div. 

Next I worked on setting up a funtion that choose a random word from a preselected array of superheroes. 

From here the generateUnderscore function was created to take the length of the choosen word and generate underscores based on that length in the console log. 

The next function handles the users guess by checking the key pressed against the underscores in the choosen word array. If it is correct the letter is pushed to the underscore and the right letter array. If it is incorrect the letter is counted and pushed to the wrong letter array. 

If there are 6 wrong guesses before the word is completed the user will lose the game. If all of the letters in the choosen word are guessed correctly the user can play again after dismissing the sweet alert pop up. 

Issues: 

Max wrong number of allowed guess triggering lose alert.  
Event Listener keypress functions. 

Resources Used: 

Font: https://fonts.google.com/?utm_source=google&utm_medium=cpc&utm_campaign=1001467+|+Material.IO+|+Global+|+en+|+Hybrid+|+Text+|+BKWS&utm_term=%7Bkeyword%7D&gclid=CjwKCAiA693RBRAwEiwALCc3u3U0FW4_05v6Ko_deT6a31WaPD9tKrtBtkKoUwUoYmwrlN9CJtrDBBoCVFMQAvD_BwE&selection.family=Bungee
Sweet Alert: https://sweetalert.js.org/guides/
Backgroud: https://wallpaper.wiki/marvel-backgrounds-free-download.html/marvel-wallpaper-pictures-images
