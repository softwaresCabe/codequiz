var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      title: "The condition in an if / else statement is enclosed within ______.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
    },

    {
        title: "Arrays in javascript can be used to store ________.",
        choices: ["String & Numbers", "Other Arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },

    {
      title: "String Values Must be stored inside of what character",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "quotes"
    },

    {
      title: "A very useful tool in web development is the debuggers console. How would you write the string \"Sale\" to the console?",
      choices: ["console.log.sale", "console.log().sale", "console.log(sale)", "console.log(\"sale\")"],
      answer: "console.log(\"sale\")"
    },
  ];

  var choiceBtn = [];
  var totalTime = questions.length * 15;
  var correct = 0;

  $(document).ready(function() {
    var questionsIndex = 0;
    let userAnswer;
    let rightAnswer;
    var totalTime = questions.length * 15;
    var val;
    var questionValue;

    
    //Get users answer
    $(document).on("click",".choicebuttons", answerClicked);
      if(questionsIndex < questionsIndex.length){
        //Start Quiz
        $("#startbutton").on("click", function() {

          // clear start button
          $('#choices').empty();

          // start quiz
          startQuiz(questionsIndex);

        });


        $("#startbutton").on("click", function() {
          // clear start button
          $('#choices').empty();
      
          // start quiz
          startQuiz(questionsIndex);

          answerClicked();
          });
      }
  });

  function startQuiz(index){
    //clear info
    $('#info').text(" ");

    //Show question
    $('#title').text(questions[index].title);

    // Show all choices to the question
    questions[index].choices.forEach(showChoices);
    rightAnswer = questions[index].answer;

    // start timer
    startTime();

  }


  function showChoices(choice, index, questions) {
    choiceBtn[index] = $("#choices");
    choiceBtn[index].attr("data-choice", choice);
    choiceBtn[index].append('<li id="choice"><button data-choice='+ choice +' type="button" class="btn btn-primary choicebuttons">'+ choice +'</button></li>');

  }

  function startTime(){

    val = setInterval(function(){
      if(totalTime < 0){
        clearInterval(val);
      }

      else{
        totalTime--;
        // console.log(totalTime);
      }

      $("#timer").text(totalTime);
    }, 1000);

  };

  function answerClicked(){
    userAnswer = $(this).attr("data-choice");

    if(userAnswer === rightAnswer){
      correct += 1;
      console.log(correct);
      $("#grade").text("Correct! ");
    }else{
      totalTime -= 15;
      $("#grade").text("Incorrect :(");
    }
    
  }

  