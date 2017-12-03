function populate() {
	if(quiz.isEnded()) {
		//showScores();
	}

	else {
		// show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
	
		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i< choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTLM = choices[i];
		}
	}

}


var questions = [
	new Question("Who won the NBA finals in 2017?", ["Spurs", "Cavs", "Golden State Warriors", "Boston Celtics"], "Golden State Warriors"),
	new Question("Who won the MLB World Series in 2017?", ["Yankees", "Dodgers", "Astros", "Cubs"], "Astros"),
	new Question("Which team won the College football National Champtionship in 2017?", ["Alabama", "Michigan", "UCLA", "Clemson"], "Clemson"),
	new Question("Which team won the NCAA March Madness Tournament?", ["North Carolina Tar Heels", "Gonzaga", "Duke", "Wisconsin"], "North Carolina Tar Heels"),
	new Question("Which player has appeared in the most World Series?", ["A-rod", "Yogi Berra", "Joe DiMaggio", "Babe Ruth"], "Yogi Berra")
];

var quiz = new Quiz(questions); 

populate();