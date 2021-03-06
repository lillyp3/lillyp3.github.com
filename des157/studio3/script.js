(function(){
    "use strict";

    const startGame = document.getElementById('startgame');             //variable "startGame" is set to the div with ID: startGame
    const gameControl = document.getElementById('gamecontrol');         //variable "gameControl" is set to the div with ID: gameControl
    let game = document.getElementById('game');                         //set a variable that holds the game
    let score = document.getElementById('score');                       //set a variable to keep track of score
    let actionArea = document.getElementById('actions');                //set a variable for the area where the buttons to take action are
    let p1Score = document.getElementById('p1');                        //variable for player 1's score
    let p2Score = document.getElementById('p2');                        // variable for player 2's score
    const btnSound = new Audio('media/bubble4.mp3');                    //button sound
    const diceSound = new Audio('media/Timer2.mp3');                    // dice roll sound
    let win = document.getElementById("win");                           


    let gameData = {                                                    //holds the changing variables
        dice: ['images/die1.png', 'images/die2.png', 'images/die3.png', //dice
                'images/die4.png', 'images/die5.png', 'images/die6.png'],
        players: ['Player 1', 'Player 2'],  //array for total players
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,           //keeps track of which player you are on (changes from 1 to 0)
        gameEnd: 29         //minimum score for game to end
    };

    document.querySelector(".close").addEventListener("click", function(event){         
        event.preventDefault();
        btnSound.play();                                                            //plays sound when button is clicked
        document.getElementById("overlay").className = "hidden";                    //hides overlay of instuctions when click start button
        document.getElementById("gamecontrol").className = "open";                  //when overlay closes, gamecocntrol div shows
    });

    startGame.addEventListener("click", function(){     //click start game button
        btnSound.play();                                
        gameData.index = Math.round(Math.random());                                 //randomly chooses player
        gameControl.innerHTML = `<h2>Not having fun?</h2>`;             
        gameControl.innerHTML += `<button id="quit"> Quit Game</button>`;           //adds a quit game button below

        document.getElementById("quit").addEventListener("click", function(){       //click Quit Game button and the page reloads
            location.reload();                                                      //refreshes page to start over
        });

        console.log(gameData.index);
        setUpTurn();                                                                //calls function for new player to roll
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice ${gameData.players[gameData.index]}</p>`;        //gets the player (either index 0 or 1)
        actionArea.innerHTML = `<button id="roll">Roll the Dice</button>`;
        document.getElementById("roll").addEventListener("click", function(){
            diceSound.play();
            throwDice();                                                                    //calls throwDice function when roll button is clicked
        });
    }

    function throwDice(){
        diceSound.play();
        actionArea.innerHTML = '';                            //hides the roll and pass action buttons
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;  //don't use ceil because could result in a zero
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        game.innerHTML = `<img src="${gameData.dice[gameData.roll1-1]}">                
                            <img src="${gameData.dice[gameData.roll2-1]}">`;
        game.innerHTML += `<p>${gameData.players[gameData.index]}'s turn</p>`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;                         //adds new score to previous score
        console.log(gameData);

        if(gameData.rollSum === 2){                                             //if both dice add up to 2 (both are a one)
            game.innerHTML += `<p>Snake eyes!</p>`;
            gameData.score[gameData.index] = 0;     //zero out the score b/c snake eyes
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);       //if its a 1 its "true" so it turns to 0, if its a zero its false and turns to 1
            showCurrentScore();                                                //"?" asks "is it true?"
            setTimeout(setUpTurn, 3500);                                       //calls setUpTurn function after a 3.5 second delay
        }
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){                  //if either dice is a one
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);       //changes player
            game.innerHTML += `<p>You rolled a one, switching to 
                                ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 3500);            
        }
        else{
            //if neither die is a 1
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;     //updates score depending on which player rolled
            actionArea.innerHTML = `<button id="rollagain">Roll Again</button> or <button
            id="pass">Pass</button>`;

            document.getElementById("rollagain").addEventListener("click", function (){     //roll again button is clicked and calls throwDice function
                throwDice();
            });

            document.getElementById("pass").addEventListener("click", function (){          //pass button
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);               //swap player
                setUpTurn();                                                                //calls setUpTurn function because new player is starting
            });
            
            checkWinningCondition();                                                        //after their turn, checks if winning score is met
        }
        
    }

    function checkWinningCondition(){                       
        if (gameData.score[gameData.index] > gameData.gameEnd){                             //checks if player's score is greater than minimum score to win
            win.className = "open";                                                         //shows the winning message
            win.innerHTML = `<h2>${gameData.players[gameData.index]}
            wins with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = '';                                                      //hides the action buttons
            document.getElementById("quit").innerHTML = "Start New Game";                   
            game.className = "hidden";                                                      //hides game content
            actionArea.className = "hidden";

            
        }
        else{
            showCurrentScore();                        //if winning condition is not met, showCurrentScore function is called
        }
    }

    function showCurrentScore(){                                //display current score of each player
        p1Score.innerHTML = `<p>${gameData.score[0]}</p>`;
        p2Score.innerHTML = `<p>${gameData.score[1]}</p>`;
    }

}());