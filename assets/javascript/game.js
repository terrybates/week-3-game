


// Variables for tracking our wins, losses, and guess left 

    var wins =0;
    var losses = 0;
    var guessLeft = 9;
      
    var guessedLetters = [];
    // This array is all possible computer choices.
    var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var reset = function() {
      
      guessLeft = 9;
      guessedLetters = [];
      var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
      console.log(computerGuess); 
      }
      // Sets the computerGuess variable equal to a random choice from the computerChoice array.
        
       var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    
    // When the user presses a key, it will run the following function and determin which key was pressed.
        document.onkeyup = function(event) { 

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        guessedLetters.push(userGuess);

        document.getElementById("userGuess").innerHTML = "our Guesses so far: " + guessedLetters.join(', '); 
      
        // this is the first computer guess.
        console.log(computerGuess);    

        
           
        // If the user presses same key as computer gemerates run the game logic.
        if (userGuess === computerGuess) {
             wins ++;
             reset();
        }
        // If the user and computer choicese are not the same one of the following will occur.
        else if (guessLeft > 0)

        {
          guessLeft --;
                                  
          }
        else   {
            losses ++
            reset();
            
            
          }
         
       
          
        
  // Here we create the HTML that will be injected into our div and displayed on the page.
          document.getElementById("wins").innerHTML = wins;
          document.getElementById("losses").innerHTML = losses;
          document.getElementById("guessLeft").innerHTML = guessLeft;
          
  } ;       

