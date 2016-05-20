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
    	var spokenWords = event.results[i][j].transcript;
      bubble.innerHTML += spokenWords
    }
  }
	var eachWord = bubble.innerHTML.split(" ");
	var lastWord = eachWord[eachWord.length - 1];
	markBoard(lastWord);
}

function log(event) {
  // Display useful information in the console
  console.log(event)
}
recognition.start()
var board = [
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
];

console.log(board);

console.log("Please choose your co-ordinates")

// var move = 0;
var player = "X";
// for (move=0; move<10; move++){
// 	if (move % 2 == 0){
// 		player = "X";}
// 	else {player = "O"}


// }

function markBoard(input) {
  console.log(input);
  if (input=="A1") {
    if(board[0][0] == '.') {
      board[0][0]=player;
      setSquare(input);
      checkWinner();
      switchPlayers();
    }
  }
  else if (input=="A2") {
    if(board[0][1] == '.') {
      board[0][1]=player;
      setSquare(input);
      checkWinner();
      switchPlayers();
    }
  }
  else if (input=="A3") {
    if(board[0][2] == '.') {
      board[0][2]=player;
      setSquare(input);
      checkWinner();
      switchPlayers();
    }
  }
  else if (input=="B1") {
    if(board[1][0] == '.') {
      board[1][0]=player;
      setSquare(input);
      checkWinner();
      switchPlayers();
    }
  }
  else if (input=="B2") {
    if(board[1][1] == '.') {
      board[1][1]=player;
      setSquare(input);
      checkWinner();
      switchPlayers();
    }
  }
  else if (input=="B3") {
    if(board[1][2] == '.') {
      board[1][2]=player;
      setSquare(input);
      checkWinner();
      switchPlayers();
    }
  }
  else if (input=="C1") {
    if(board[2][0] == '.') {
      board[2][0]=player;
      setSquare(input);
      checkWinner();
      switchPlayers();
    }
  }
  else if (input=="C2") {
    if(board[2][1] == '.') {
      board[2][1]=player;
      setSquare(input);
      checkWinner();
      switchPlayers();
    }
  }
  else if (input=="C3") {
    if(board[2][2] == '.') {
      board[2][2]=player;
      setSquare(input);
      checkWinner();
      switchPlayers();
    }
  }
  else {
    console.log("Stop being silly")
  }
}

function setSquare(input) {
  var square = document.getElementById(input);
  if(square) square.innerHTML = player;
  console.log(board);
}

function switchPlayers() {
  if(player == 'X') {
    player = 'O'
  } else {
    player = 'X'
  }
}

function checkWinner() {
  var result = document.getElementById("result");
  var winningMove = player + player + player;

  if (board[0][0] + board[0][1] + board[0][2] == winningMove ||
    board[1][0] + board[1][1] + board[1][2] == winningMove ||
    board[2][0] + board[2][1] + board[2][2] == winningMove ||
    board[0][0] + board[1][0] + board[2][0] == winningMove ||
    board[0][1] + board[1][1] + board[2][1] == winningMove ||
    board[0][2] + board[1][2] + board[2][2] == winningMove ||
    board[0][0] + board[1][1] + board[2][2] == winningMove ||
    board[0][2] + board[1][1] + board[2][0] == winningMove) {
    result.innerHTML = player + " has won!!!";
    console.log(player + " has won!!!");
    recognition.stop();
  }
}
// markBoard("A2");
// markBoard("A1");
// markBoard("A3");
