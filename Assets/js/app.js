


//Referencias html
opponentEnergy = 3;
turnRound = 1;

let buttonLose = document.getElementById ("lose-Btn")
buttonLose.addEventListener("click", energyReduce)

let buttonGain = document.getElementById ("gain-Btn")
buttonGain.addEventListener("click", energyGain)

let endturnBtn = document.getElementById ("end-turn-Btn")
endturnBtn.addEventListener("click", endTurn)

let buttonReset = document.getElementById("reset-game-Btn")
buttonReset.addEventListener("click", resetGame)

document.getElementById ("energy-Count").innerHTML = opponentEnergy + "/" + "10";
document.getElementById("round-Txt").innerHTML = "Round : " + turnRound;



function energyReduce () {
    opponentEnergy = opponentEnergy - 1;
    document.getElementById ("energy-Count").innerHTML = opponentEnergy + "/" + "10";
    
}


function energyGain () {
    opponentEnergy = opponentEnergy + 1;
    document.getElementById ("energy-Count").innerHTML = opponentEnergy + "/" + "10";
}

function endTurn () {
    opponentEnergy = opponentEnergy + 2;
    turnRound = turnRound + 1;
    document.getElementById ("energy-Count").innerHTML = opponentEnergy + "/" + "10";
    document.getElementById ("round-Txt").innerHTML = "Round : " + turnRound
}

function resetGame () {
    opponentEnergy = 3;
    turnRound = 1;
    document.getElementById ("energy-Count").innerHTML = opponentEnergy + "/" + "10";
    document.getElementById("round-Txt").innerHTML = "Round : " + turnRound;
    
}
