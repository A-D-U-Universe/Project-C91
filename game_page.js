player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("Player1_name").innerHTML = player1_name + " : ";
document.getElementById("Player2_name").innerHTML = player2_name + " : ";

document.getElementById("Player1_score").innerHTML = player1_score ;
document.getElementById("Player2_score").innerHTML = player2_score ;

document.getElementById("Question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("Answer").innerHTML = "Answer Turn - " + player2_name ;

function send(){
	number1 = document.getElementById("number_input_1").value;
	number2 = document.getElementById("number_input_2").value;
	getAnswer = parseInt(number1)*parseInt(number2);
	console.log("number1 = "+ number1);
	console.log("number2 = "+ number2);
	console.log("answer = "+ getAnswer);
	questionNumber = "<h4>" + number1 + " X " + number2 + "</h4>";
	input_box = "<br>Answer:<input type='number' id='input_checkbox'>";
	check_button = "<br><br><button class='btn btn-check' onclick='check()'>Check</button>";
	row = questionNumber + input_box + check_button;
	document.getElementById("output").innerHTML = row;
	document.getElementById("number_input_1").value = "";
	document.getElementById("number_input_2").value = "";
}

