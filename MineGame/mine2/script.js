const scoreEl = document.querySelector("#score");   // returns the first element (#score in this case) that matches a CSS selector.

const gameBoardEl = document.querySelector(".game-board");

const messageElement = document.querySelector(".message");

const minedSquare = Math.floor(Math.random() * 25) + 1;     //Math.random() creates a number between 0-0.9
                                                            /* * 25 is multiplying random number by 25, which creates a number between 0-24. Math.floor() takes a decimal number and converts it to integer e.g 2.4 becomes 2. +1 is added to increase the range from 0-24 to 0-25 */
console.log("Bad square is ==>", minedSquare);


let score = 0;
let squaresLeft = 25;

function checkMine(e, squareNumber){
    console.log("Clicked square is ==>", squareNumber);

    if(squareNumber === minedSquare && squaresLeft === 1){      // if the clicked square has been mined and it is the last,
        //Won!
        e.target.classList.add("mined");        // adds class mined to the list
        messageElement.textContent = "You win!";       // displays a message to the screen
        messageElement.style.display = "block";

        //increment score 
        score += 1;

        scoreEl.textContent = score.toString();
    } else if(squareNumber === minedSquare && squaresLeft > 1){     // else if the clicked square has been mined but there are more than 1 squares to be mined,
        //Lost
        e.target.classList.add("mined");
        messageElement.textContent = "You lose!"
        messageElement.style.display = "block";
    } else{         // continue mining
        e.target.classList.add("safe");
    }

    squaresLeft -= 1;       //reduces the number of mined squares by 1
}

for(let i=1; i<= 25; i++){
    gameBoardEl.innerHTML += `<button id="square${i}" class="square" onclick="checkMine(event,${i})">${i}</button>`;    //display from 1-25 the values of the squares
}

function resetGame(){   // refreshes the window when clicked
    window.location.reload("Reset");
}