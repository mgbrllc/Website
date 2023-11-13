$(document).ready(function() {
      let words = ["hello world", "variable assignment", "conditional statements", "looping constructs", "function declaration", "object oriented programming", "data types",
      "algorithm design", "debugging code","version control","code optimization","code review","syntax error","runtime error","exception handling","code refactoring","api",
      "framework development","front end development","back end development","full stack development","open source software","code repository","git and github","integrated development environment",
      "agile development","scrum methodology","devops","continuous integration","continuous deployment","unit testing","user interface","user experience","responsive design","cross platform development",
      "mobile app development","web development","server side scripting","client side scripting","database management","sql","nosql databases","cloud computing","microservices architecture","docker containers",
      "restful apis","json","xml","scalability","security vulnerabilities","code documentation"];

      // initialize the variables
      var randomizer = 0;
      var score = 0;
      var timerInterval;
      var timeLeft = 30;

      // display the random word
      function randomWord() {
        randomizer = Math.floor(Math.random() * words.length);
        var currentWord = words[randomizer];
        $("#currentWord").text(currentWord);
      }

      function startTimer() {
        timerInterval = setInterval(function() {
          timeLeft--;
          // remaining time
          $("#timer").text("Time left: " + timeLeft);

          if (timeLeft <= 0) {
            $("#timer").text("Time: 0");
            clearInterval(timerInterval);

            // disable user input
            $("#input").prop("disabled", true);
            $("#score").text("Final score: " + score)
                       .css({"font-weight": "bold",
                             "font-size": "20px",
                             "padding": "10px"});
            $("#currentWord").hide();
            $("#timer").hide();
            $("#tryAgain").show();

            
          }
        }, 1000);
      }

      // event handler
      $("#input").on("input", function() {
        var userInput = $(this).val();
        var currentWord = words[randomizer];

        if (userInput === currentWord) {
          // updates the score
          score++;
          $("#score").text("Score: " + score);
          randomWord();

          // clears the input field after typing the correct answer
          $("#input").val("");
        }
      });

      $("#tryAgain").on("click", function() {
          location.reload(true);
      });

          randomWord();
          startTimer();
      });