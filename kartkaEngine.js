/**
 * @author X870
 */

var backgroundsTab = ['tlo.jpg', 'tlo2.jpg', 'tlo3.jpg', 'tlo4.jpg', 'tlo5.jpg', 'tlo6.jpg', 'tlo7.jpg', 'tlo8.jpg', 'tlo9.jpg', 'tlo10.jpg', 'tlo11.jpg', 'tlo12.jpg'];

var letters = [' ', 'S', 'e', 'r', 'd', 'e', 'c', 'z', 'n', 'e', ' ', 'ż', 'y', 'c', 'z', 'e', 'n', 'i', 'a', ' ', 'ś', 'w', 'i', 'ą', 't', 'e', 'c', 'z', 'n', 'o', '-', 'n', 'o', 'w', 'o', 'r',
				'o', 'c', 'z', 'n', 'e', ' ', 'p', 'r', 'z', 'e', 's', 'y', 'ł', 'a', ' ', 'J', 'e', 'r', 'z', 'y', ' ', 'M', '.', ':', ')'];
				
var colours = ['white', 'red', 'green', 'white', 'red', 'black', 'brown', 'black', 'blue', 'grey', 'white', 'red'];

var backgroundCounter = 1;

var lettersCounter = 0;

var colourCounter = 0;

function changeBackground(){
	var body = document.getElementsByTagName("body")[0];
	body.style.backgroundImage = 'url('+backgroundsTab[backgroundCounter]+')';
	backgroundCounter++;
	if(backgroundCounter==backgroundsTab.length){
		backgroundCounter = 0;
	}
	var destination = document.getElementById("output");
	destination.style.color = colours[colourCounter];
	colourCounter++;
	if(colourCounter==colours.length){
		colourCounter= 0;
	}
	console.log(backgroundCounter);
};

function addLetter(){
	var destination = document.getElementById("output");
	if (output.textContent !== undefined) {
		if(lettersCounter==0){
			destination.textContent = "";
		}
		else{
			destination.textContent+=letters[lettersCounter];
		}
	} else {
		if(lettersCounter==0){
			destination.innerText = "";
		}
		else{
			destination.innerText+=letters[lettersCounter];
		}
	}
	console.log(destination.innerText);
	console.log(destination.textContent);
	lettersCounter++;
	if(lettersCounter==letters.length){
		lettersCounter = 0;
	}
};

window.onload = function(){
	setInterval(changeBackground, 3000);
	setInterval(addLetter,250);
};
