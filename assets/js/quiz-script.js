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
  var score = 0;
  var questionsIndex = 0;
  let userAnswer;
  let rightAnswer;
  var isendQuiz = false;
  //var tempbtn = $("#choices");

  $(document).ready(function() {
    $("#startbutton").on("click", function() {

      // start timer
      startTimer();

      // clear start button
      $('#choices').empty();

      // start quiz
      startQuestion();

    });

     // submit score to localstorage
     $("#submit").on("click", function(){
      console.log("here");
    })

    $("button").click(function(){
      window.location.replace("highscores.html");
    });

    //Get users answer
    $(document).on("click",".choicebuttons", answerClicked)

    // go to highscores clicked
    $(".mylinkbtn").on("click", function(){
      window.location.replace("highscores.html");
    })

  });


  function startQuestion(){
    //clear info
    $('#info').text(" ");

    //Show question
    $('#title').text(questions[questionsIndex].title);

    // Show all choices to the question
    questions[questionsIndex].choices.forEach(showChoices);
    rightAnswer = questions[questionsIndex].answer;

  }


  function showChoices(choice, index, questions) {
    choiceBtn[index] = $("#choices");
    choiceBtn[index].attr("data-choice", choice);
    choiceBtn[index].append('<li id="choice"><button data-choice='+ choice +' type="button" class="btn btn-primary choicebuttons">'+ choice +'</button></li>');

  }

  function startTimer(){
    val = setInterval(function(){
      if(totalTime < 0){
        $("#timer").text(" Time : 0 ");
        endQuiz();
        clearInterval(val);
      }
      else{
        if(isendQuiz != true){
          totalTime--;
        }
        else{
          clearInterval(val);
        }
      }

      // Display time to 
      if(totalTime < 0){
        $("#timer").text(" Time : 0 ");
      }else{
        $("#timer").text(" Time : "+ totalTime);
      }

    }, 1000);


  };

  function answerClicked(){
    userAnswer = $(this).attr("data-choice");
    if(userAnswer === rightAnswer){
      correct += 1;
      $("#grade").text(" Correct ! ");
    }else{
      totalTime -= 15;
      $("#grade").text(" Incorrect :( ");
    }

    // wait for user to see result
    setTimeout(1000);

    // clear previous data
    $("#choices").empty();
    $("#grade").empty();

    if (questionsIndex < questions.length -1){
      questionsIndex += 1;
      // Display Next Question
      startQuestion();
    }
    else{
      endQuiz();
    }

  }
  


  function endQuiz(){
    isendQuiz = true;
    // clear data
    $("#choices").empty();
    $("#grade").empty();
    $("#timer").empty();
    $('#title').text(" All Done ! ");

    // calculate Score
    var x = 100 / questions.length;
    score = x * correct;


    //Show Score
    $('#info').text(" Your Score : " + score + " % ");

    // Show score form
    $("#choices").append('<label for="exampleInputEmail1">Your Initals</label><input type="initals" class="col-6" aria-describedby="emailHelp" placeholder="Example- KC "></div><button class="btn btn-primary" onclick ="submit()"> Submit </button>');
  }


  function submit(){
    var userInitial = [0];
    var userScore = [0];

    //Retieve users Ininitals array from local storage
    var retrievedData = localStorage.getItem("myuserInitials");

    userInitial = JSON.parse(retrievedData);

    //Retrieve Users Scores array from local storage

    var retrievedData = localStorage.getItem("myUserScores");

    allScores = JSON.parse(retrievedData);


    userInitial.push($('input').val());
    //Push Users name onto all users name array
    allScores.push(score);
    
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    localStorage.setItem("myuserInitials", JSON.stringify(userInitial));
    localStorage.setItem("score", score);
    
  } else {
    // Sorry! No Web Storage support..
  }

   window.location.replace("highscores.html");

  }