(function(){
    "use strict";

    var startGame = document.getElementById('startgame');
    var gameControl = document.getElementById('gamecontrol');
    var game = document.getElementById('game');
    var score = document.getElementById('score');
    var actionArea = document.getElementById('actions');

    var gameData = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg', 
                '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,           //keeps track of which player you are on (changes from 1 to 0)
        gameEnd: 29
    };

    startGame.addEventListener("click", function(){
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = `<h2>The Game Has Started</h2>`;
        gameControl.innerHTML += `<button id="quit"> Wanna Quit?</button>`;

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
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
                            <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData);

        if(gameData.rollSum === 2){
            game.innerHTML += `<p>Oh snap! Snake eyes!</p>`;
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

            actionArea.innderHTMl = "";
            document.getElementById("quit").innerHTML = "Start New Game";
        }
        else{
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}
        ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}
        ${gameData.score[1]}</strong></p>`;
    }

}());