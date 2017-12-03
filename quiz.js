
function Question(text, choices, answer) {
	this.text=text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}	




function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
	if(this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}

	this.questionIndex++;
}




function populate() {
	if(quiz.isEnded()) {
		showScores();
	}

	else {
		// show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
	
		// show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i] 
			guess("btn" + i, choices[i]);
		}

		showProgress();

	}

};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function () {
		quiz.guess(guess);
		populate();
	}
};

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
		gameOverHtml = "<a href='splash.html' style='position: relative; top: 250px;' >Start Over</a>";
		gameOverHtml += "<h2 id='score'>Your score: " + quiz.score + " out of 10 Correct " + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
};


var questions = [
	new Question("Who won the NBA finals in 2017?", ["Spurs", "Cavs", "Golden State Warriors", "Boston Celtics"], "Golden State Warriors"),
	new Question("Who won the MLB World Series in 2017?", ["Yankees", "Dodgers", "Astros", "Cubs"], "Astros"),
	new Question("Which team won the College football National Champtionship in 2017?", ["Alabama", "Michigan", "UCLA", "Clemson"], "Clemson"),
	new Question("Which team won the NCAA March Madness Tournament in 2017?", ["North Carolina Tar Heels", "Gonzaga", "Duke", "Wisconsin"], "North Carolina Tar Heels"),
	new Question("Which player has appeared in the most World Series?", ["A-rod", "Yogi Berra", "Joe DiMaggio", "Babe Ruth"], "Yogi Berra"),
	new Question("Who was the shortest player ever to play in the NBA?", ["Earl Boykins", "Muggsy Bogues", "Spud Webb", "Nate Robinson"], "Muggsy Bogues"),
	new Question("What male tennis player has won the most Grand Slam titles?", ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"], "Roger Federer"),
	new Question("Who is the only athlete ever to play in a Super Bowl and a World Series?", ["Peyton Manning", "Tom Brady ", "Deion Sanders ", "Kyler Murray"], "Deion Sanders "),
	new Question("Brazil was eliminated in the 2014 world cup by what team?", ["Spain", "Mexico", "USA", "Germany"], "Germany"),
	new Question("The Heisman Trophy is presented in which sport?", ["College Football", "Baseball", "Golf", "Rugby"], "College Football")

];

var quiz = new Quiz(questions); 

populate();