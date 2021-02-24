(function(){
    "use strict";

    const startGame = document.getElementById('startgame');             //variable "startGame" is set to the div with ID: startGame
    const gameControl = document.getElementById('gamecontrol');         //variable "gameControl" is set to the div with ID: gameControl
    let game = document.getElementById('game');                         //set a variable that holds the game
    let score = document.getElementById('score');                       //set a variable to keep track of score
    let actionArea = document.getElementById('actions');                //set a variable for the area where the buttons to take action are
    /* const overlybtn = document.querySelector("#overlay button") */
    let p1Score = document.getElementById('p1');
    let p2Score = document.getElementById('p2');

    document.querySelector(".close").addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById("overlay").className = "hidden";
        document.getElementById("gamecontrol").className = "open";
    });

    let gameData = {                                                    //holds the changing variables
        dice: ['player1.png', '2die.jpg', '3die.jpg', //dice
                '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['player 1', 'player 2'],  //array for total players
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,           //keeps track of which player you are on (changes from 1 to 0)
        gameEnd: 29
    };

    startGame.addEventListener("click", function(){
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = `<h2>Not having fun?</h2>`;
        gameControl.innerHTML += `<button id="quit"> Quit Game</button>`;


        document.getElementById("quit").addEventListener("click", function(){
            location.reload();
        });

        console.log(gameData.index);
        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;        //gets the player (either index 0 or 1)
        actionArea.innerHTML = `<button id="roll">Roll the Dice</button>`;
        document.getElementById("roll").addEventListener("click", function(){

            throwDice();
        });
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;  //don't use ceil because could result in a zero
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        /* game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`; */
        /* game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> */
        game.innerHTML = `<img src="${gameData.dice[gameData.roll1-1]}">
                            <img src="${gameData.dice[gameData.roll2-1]}">`;
        game.innerHTML += `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData);

        if(gameData.rollSum === 2){
            game.innerHTML += `<p>Snake eyes!</p>`;
            gameData.score[gameData.index] = 0;     //zero out the score b/c snake eyes
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);       //if its a 1 its "true" so it turns to 0, if its a zero its false and turns to 1
            showCurrentScore();                                                //"?" asks "is it true?"
            setTimeout(setUpTurn, 2000);
        }
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to 
                                ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        }
        else{
            //if neither die is a 1
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;     //updates score depending on which player rolled
            actionArea.innerHTML = `<button id="rollagain">Roll again</button> or <button
            id="pass">Pass</button>`;

            document.getElementById("rollagain").addEventListener("click", function (){     //roll again button
                throwDice();
            });

            document.getElementById("pass").addEventListener("click", function (){          //pass button
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);               //swap player
                setUpTurn();
            });
            
            checkWinningCondition();
        }
        
    }

    function checkWinningCondition(){
        if (gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]}
            wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTMl = "";
            document.getElementById("quit").innerHTML = "Start New Game";
        }
        else{
            showCurrentScore();
        }
    }

    function showCurrentScore(){
/*         score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}
        ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}
        ${gameData.score[1]}</strong></p>`; */

        p1Score.innerHTML = `<p>${gameData.score[0]}</p>`;
        p2Score.innerHTML = `<p>${gameData.score[1]}</p>`;
    }

}());