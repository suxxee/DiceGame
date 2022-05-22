var diceDom = document.querySelector(".dice");
var activePlayer;
var roundScore;
var scores;
var isGameOver;

newGame();

function newGame()
{
    // Toglogchiin eelj
    activePlayer = 0;

    //Toglogchiin tsugluulsan onoo
    scores = [0, 0];

    //Toglogchiin tuhain eeljind tsugluulah onoo
    roundScore = 0;

    //Dice-iin ali talaar buusniig hadgalah 
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //Togloom ehlehed beldeh
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    // player 1, 2 iig butsaaj gargah
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";

    document.querySelector('.player-0-panel').classList.remove("active");
    document.querySelector('.player-1-panel').classList.remove("active");

    document.querySelector('.player-0-panel').classList.add("active");


    diceDom.style.display = "none";

}


//******************      ROLL DICE  **********************************

// Shoog shideh event
document.querySelector(".btn-roll").addEventListener("click", function (){
    // Random toog gargah
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //Shoonii zurag gargah
    diceDom.style.display = "block";
    
    //Random toond hargalzah shoog uzuuleh
    diceDom.src = "dice-" + diceNumber + ".png";

    //Player-iin eeljiin onoog oorchlono(1 ees ylgatai bol onoog nemne)
    if(diceNumber !==1)
    {
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore; 
    }
    else
    //Eeljiig solino
    {
        //Tuhain playeriin onoog 0 bolgono
        switchToNextPlayer();
    
    }

    
});

// ***********************    HOLD     **************************

// Onoog hadgalah HOLD
document.querySelector('.btn-hold').addEventListener("click", function()
{
    //Tuhain player iin tsugluulsan onoog global onoon deer nemeh
    scores[activePlayer] = scores[activePlayer] + roundScore;

    //Delgets deerh onoog oorchlono
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    //Ali neg player 100 onoo hurvel hojino
    if(scores[activePlayer] >= 10)
    {
        document.getElementById('name-' + activePlayer).textContent = "WINNER";
    }
    else
    {
        switchToNextPlayer();
    }
    


    //Eeljiin onoog 0 bolgono

    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = '0';

});



function switchToNextPlayer()
{
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    //Ulaan tseg solih
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");

    //Eelj soligdohod shoog alga bolgono

    diceDom.style.display = "none";

}

//*********************      NEW GAME      *********************/

//Togloomiig shineer ehluuleh event NEW GAME
document.querySelector('.btn-new').addEventListener("click", newGame);
