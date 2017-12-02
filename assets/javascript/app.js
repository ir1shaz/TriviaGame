//Created by Andy Sargent - UofA/Trilogy fullStack bootcamp// 
//Psudeo coding...
//create a "start" button
//Create questions with multiple answers uing an array with object
//Create a timer for each question "20 seconds" or so
//Create function to load random question
//Create function to check each answer if correct or wrong
  //gotta create one for each option available so ... (4)
  //use local functions to push answer 
//Add points to players score if correct
//if correct, push the score to total
//Timer to start the next question for the player
//10 questions than total score 
//button to start new game 




// establish the global variables for the trivia game ... 
var gameTimer = 20;
var score = 0;
var questionNumber = 0;
//--------------------------------------------------------------------------
// "trivia" Array with each question as an object including the correctAnswer function and postAnswer function 
var trivia = [
    {
        question: "What is the yellow sign Irish Football players hit, before running onto the field?",
       	answerOption1: "Play Like A Champion Today",
      	answerOption2: "Go Fight Win",
      	answerOption3: "The House That Rockne Built",
      	answerOption4: "Win One For the Gipper",
      	correctAnswer: function(){return this.answerOption1},
        postAnswer: function(){
          $('#answersArea').html('<h4>The term "Play like a Champion Today" has been used by Notre Dame since at least 1986</h4>'+ '<img class="img-thumbnail" src="assets/images/playlikeachamp.gif" />');
        $('imageArea').html('<img src="assets/images/playlikeachamp.gif" />')
        }
      },

    {
        question: "How did Notre Dame's famous coach Knute Rockne die?",
       	answerOption1: "Heart Attack",
      	answerOption2: "Old Age",
      	answerOption3: "Car Accident",
      	answerOption4: "Airplane Crash",
      	correctAnswer: function(){return this.answerOption4},
        postAnswer: function(){
          $('#answersArea').html('<h4>Notre Dame coach Knute Rockne died in the crash of TWA Flight 599 on March 31, 1931</h4>'+ '<br>' + '<img src="assets/images/plane.gif"/>');
        }
      },

    {
        question: "In what city is the University of Notre Dame located?",
       	answerOption1: "South Bend, In",
      	answerOption2: "Chicago, Il",
      	answerOption3: "Burbank, Ca",
      	answerOption4: "Gilbert, Az",
      	correctAnswer: function(){return this.answerOption1},
        postAnswer: function(){
          $('#answersArea').html('<h4>South Bend is a city on the St. Joseph River in Indiana. The city is known ffor being the home of the University of Notre Dame, with its gold-domed main building.</h4>'+ '<br>' + '<img src="assets/images/dome.jpg" />');
        }
      },

    {
        question: "When was the last time The Fighting Irish won a National Championship?",
       	answerOption1: "1999",
      	answerOption2: "1988",
      	answerOption3: "1980",
      	answerOption4: "1975",
      	correctAnswer: function(){return this.answerOption2},
        postAnswer: function(){
          $('#answersArea').html('<h4>In 1988, The Irish, coached by Lou Holtz, ended the season with 12 wins and no losses, winning the national championship.</h4>'+'<img src="assets/images/lou.jpg" />');
        }
      },

    {
        question: "What year did Notre Dame hold it's first football game?",
       	answerOption1: "1914",
      	answerOption2: "1887",
      	answerOption3: "1901",
      	answerOption4: "1921",
      	correctAnswer: function(){return this.answerOption2},
        postAnswer: function(){
          $('#answersArea').html('<h4>In 1887, The University of Notre Dame held their inaugural football game on November 23</h4>'+ '<br>' +'<img src="assets/images/first.jpg" />');

        }
      },
  ];
    
//------------------------------------------------------------------
// function to end the game "endGame"
function endGame (){
  //use Jquery stop method
  stop();
    //players total score 
    $('#answersArea').html("<h4>Final Score: " + score + "/5" + "</h4>");


    //Try again? 
    $("#answersArea").append("<div class='row'>"+
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='start'>"+"Try Again"+"</button>"+
        "</div>");
    
}
//------------------------------------------------------------------
// if else function to determine if game is over or onto next question 
//function "nextQuestion"
function nextQuestion (){
  clearInterval(showQuestion)
   if (questionNumber==5){
    endGame();
  }  
  else {
  //selects next question from trivia array 
  $("#question").html("<h3>" + trivia[questionNumber].question + "</h3>");
  //insert the answer buttons 
  $("#answersArea").html(
        
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer1'>" + trivia[questionNumber].answerOption1 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer2'>" + trivia[questionNumber].answerOption2 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer3'>" + trivia[questionNumber].answerOption3 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer'id='answer4'>" + trivia[questionNumber].answerOption4 + "</button></div>"
        );
  run();
  };
}
//-------------------------------------------------------------------

function afterAnswer (){
  //setInterval to set amount of time before "nextQuestion" 
    //define showQuestion ... interval + nextQuestion
  showQuestion = setInterval(nextQuestion, 5000);
  questionNumber++;
}

function stop(){
  //clearInterval to "stop" timer
  clearInterval(counter);
    }

//--------------------------------------------------------------------
// if else function to check if players answer is correct for each question 
var checkAnswer1 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption1 == trivia[questionNumber].correctAnswer()) {
    score= score + 1;
    document.getElementById('score').innerHTML = (score)
  }else{
  }

  afterAnswer();

}

var checkAnswer2 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption2 == trivia[questionNumber].correctAnswer()) {
    score= score + 1;
    document.getElementById('score').innerHTML = (score)
  }else{
  }
  afterAnswer();

}

var checkAnswer3 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption3 == trivia[questionNumber].correctAnswer()) {
    score= score + 1;
    document.getElementById('score').innerHTML = (score)
  }else{
  }
  afterAnswer();

}

var checkAnswer4 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption4 == trivia[questionNumber].correctAnswer()) {
    score= score + 1;
    document.getElementById('score').innerHTML = (score)
    
  }else{
  }
  afterAnswer();

}
// ----------------------------------------------------------------
// creating the timer functions

function run(){
  //setInterval to set amount of time for "gameTimer" 
    gameTimer=20;
      counter = setInterval(increment, 1000);
    }
function increment(){
    gameTimer--
    document.getElementById('timer').innerHTML = ('<h6>' + gameTimer + '</h6>')
      if (gameTimer === 0){
        stop();
        afterAnswer();
        trivia[questionNumber].postAnswer();
      }
    }

//----------------------------------------------------------------
//Gets the game started function "startGame"
var startGame = function(){
      score = 0;
      questionNumber = 0;
      run();

   $("#question").html("<h3>" + trivia[questionNumber].question + "</h3>");
  $("#answersArea").html(
    

        
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer1'>" + trivia[questionNumber].answerOption1 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer2'>" + trivia[questionNumber].answerOption2 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer3'>" + trivia[questionNumber].answerOption3 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer'id='answer4'>" + trivia[questionNumber].answerOption4 + "</button></div>"
        ); 
}

//------------------------------------------------------
//On clicks 

//on click run function startGame 
$(document).on('click', '#start', function(){
  startGame();
  })

// on click run function checkAnswer for each 
$(document).on('click','#answer1', function(){
  checkAnswer1();
  })

$(document).on('click','#answer2', function(){
  checkAnswer2();
  })

$(document).on('click','#answer3', function(){
  checkAnswer3();
  })

$(document).on('click','#answer4', function(){
  checkAnswer4();
  })

