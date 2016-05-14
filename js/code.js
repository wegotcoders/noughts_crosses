// Recognise the user's voice
var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.onresult = function (event) {
  // Run this code everytime some speech is recognised
  var bubble = document.getElementById("speech");
  bubble.innerHTML = "";
  for(var i = 0; i < event.results.length; i++) {
    for(var j = 0; j < event.results[i].length; j++) {
      bubble.innerHTML +=  event.results[i][j].transcript;
    }
  }
  log(event);
}
function log(event) {
  // Display useful information in the console
  console.log(event)
}

var board = [
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
];

console.log(board);

console.log("Please choose your co-ordinates")

var move = 0;
var player = "X";
for (move=0; move<10; move++){
	if (move % 2 == 0){
		player = "X";}
	else {player = "O"}

	function markBoard(input) {
		if (input=="A1") {
			board[0][0]=player;
			console.log(board);
		}
		else if (input=="A2") {
			board[0][1]=player;
			console.log(board);
		}
		else if (input=="A3") {
			board[0][2]=player;
			console.log(board);
		}
		else if (input=="B1") {
			board[1][0]=player;
			console.log(board);
		}
		else if (input=="B2") {
			board[1][1]=player;
			console.log(board);
		}
		else if (input=="B3") {
			board[1][2]=player;
			console.log(board);
		}
		else if (input=="C1") {
			board[2][0]=player;
			console.log(board);
		}
		else if (input=="C2") {
			board[2][1]=player;
			console.log(board);
		}
		else if (input=="C3") {
			board[2][2]=player;
			console.log(board);
		}
		else {
			console.log("Stop being silly")
		}
	}

	if (board[0][0]==board[0][1]==board[0][2] ||
		board[1][0]==board[1][1]==board[1][2] ||
		board[2][0]==board[2][1]==board[2][2] ||
		board[0][0]==board[1][0]==board[2][0] ||
		board[0][1]==board[1][1]==board[2][1] ||
		board[0][2]==board[1][2]==board[2][2] ||
		board[0][0]==board[1][1]==board[2][2] ||
		board[0][2]==board[1][1]==board[2][0]){break;}
}



markBoard("A2");
markBoard("A1");
markBoard("A3");
