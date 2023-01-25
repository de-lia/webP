const scoreEl = document.querySelector("#score");

const gameBoardEl = document.querySelector(".game-board");

const messageElement = document.querySelector(".message");

const minedSquare = Math.floor(Math.random() * 25) + 1;

console.log("Bad square is ==>", minedSquare);


let score = 0;
let squaresLeft = 25;

function checkMine(e, squareNumber){
    console.log("Clicked square is ==>", squareNumber);

    if(squareNumber === minedSquare && squaresLeft === 1){
        //Won!
        e.target.classList.add("mined");
        messageElement.textContent = "You win!";
        messageElement.getElementsByClassName.display = "block";

        score += 1;

        scoreEl.textContent = score.toString();
    } else if(squareNumber === minedSquare && squaresLeft > 1){
        //Lost
        e.target.classList.add("mined");
        messageElement.textContent = "You lose!"
        messageElement.style.display = "block";
    } else{
        e.target.classList.add("safe");
    }

    squaresLeft -= 1;
}

for(let i=1; i<= 25; i++){
    gameBoardEl.innerHTML += `<button id="square${i}" class="square" onclick="checkMine(event,${i})">${i}</button>`;
}
function resetGame(){
    window.location.reload("Reset");
}