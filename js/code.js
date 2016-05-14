var board = [
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
];

console.log(board);

console.log("Please choose your co-ordinates")

markBoard("A2");
markBoard("B1");
markBoard("C2");

var move = 0;
var player = "X";
for (move=0; move<10; move++){
	if (move % 2 == 0){
		player = "X";}
	else {player = "O"}
}

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
