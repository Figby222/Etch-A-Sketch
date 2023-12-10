let button = document.querySelector(`#changeSize`);
let flexContainer = document.querySelector(`.flexContainer`);

// create column of rows of squares
for (let i = 0; i < 16; i++) {
    let squareLine = document.createElement(`div`);
    squareLine.classList.add(`squareLine`);
    for (let i = 0; i < 16; i++) {
        let square = document.createElement(`div`);
        square.classList.add(`square`);

        squareLine.appendChild(square);

        square.addEventListener(`mouseover`, function () {
            square.style.backgroundColor = `gold`;
        });
    }
    // newSquare.style.border = `2px solid gray`;

    flexContainer.appendChild(squareLine);
    
}

button.addEventListener(`click`, function () {
    let userInput = Math.round(parseInt(prompt(`How many squares do you want on each row?`)));
    if (userInput > 100 || isNaN(userInput)) {
        alert(`Please enter a valid number between 1 and 100`);
    } else {
        // delete square divs
        flexContainer.textContent = ``;
        
        // create squares based off user input
        for (let i = 0; i < userInput; i++) {
            let squareLine = document.createElement(`div`);
            squareLine.classList.add(`squareLine`);
            for (let i = 0; i < userInput; i++) {
                let square = document.createElement(`div`);
                square.classList.add(`square`);
        
                squareLine.appendChild(square);
        
                square.addEventListener(`mouseover`, function () {
                    square.style.backgroundColor = `gold`;
                });
            }
            // newSquare.style.border = `2px solid gray`;
        
            flexContainer.appendChild(squareLine);
            
        }
    }
});

