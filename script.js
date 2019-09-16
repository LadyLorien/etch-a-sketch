const container = document.querySelector(".container");

function createSketch(x) {
    for(let i = 0; i< x * x; i++) {
        let drawSpace = document.createElement("div");
        drawSpace.classList.add("squares");
        drawSpace.addEventListener("mouseover", hover)
        container.appendChild(drawSpace);
        document.documentElement.style.setProperty("--colNum", x);
        
        function hover() {
            drawSpace.classList.add("hover");
        }       
};
}

function removeGrid() {
    let gridCount = container.childElementCount;
    for(let i = 0; i < gridCount; i++) {
    container.removeChild(container.children[0]);
    };
}

function sizeChoice() {
    let newSize = prompt("How many squares per side should the grid be? 100 max.");
    if(!Number.isInteger(+newSize) | newSize > 100 | isNaN(newSize)) {
        alert("Please enter a whole number between 1 - 100");
        sizeChoice();
    } else if(newSize == null) {
        return;
    } else {
    removeGrid();
    createSketch(newSize);
};
}

function clearGrid() {
    let clearSquares = document.querySelectorAll(".container div");
    clearSquares.forEach((clearSquares) => {
        clearSquares.classList.remove("hover");
    });
   
}

function invertGrid() {
    let invertSquares = document.querySelectorAll(".container div");
    invertSquares.forEach((invertSquares) => {
        invertSquares.classList.toggle("hover");
    });
   
}

function colorSelect() {
    let squares = document.querySelectorAll(".container div");
    const style = getComputedStyle(document.body);
    document.querySelector("#colorMenu").classList.toggle("show");
// Color choices
    let random = document.querySelector("#random");
    random.addEventListener("click", () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        squares.forEach((squares) => {
            squares.addEventListener("mouseover", () => {
                document.documentElement.style.setProperty("--hoverColor", ("#" + randomColor));
                document.documentElement.style.setProperty("--squareColor", ("#" + randomColor));
            });
        });
        document.querySelector("#colorMenu").classList.remove("show");
    });
    let grey = document.querySelector("#grey");
    grey.addEventListener("click", () => {
        squares.forEach((squares) => {
            squares.addEventListener("mouseover", () => {
                document.documentElement.style.setProperty("--hoverColor", "#808080");
                document.documentElement.style.setProperty("--squareColor", "#808080");
            });
        });
        document.querySelector("#colorMenu").classList.remove("show");
    });
    let red = document.querySelector("#red");
    red.addEventListener("click", () => {
        squares.forEach((squares) => {
            squares.addEventListener("mouseover", () => {
                document.documentElement.style.setProperty("--hoverColor", "#BC3C3C");
                document.documentElement.style.setProperty("--squareColor", "#BC3C3C");
            });
        });
        document.querySelector("#colorMenu").classList.remove("show");
    });
    let blue = document.querySelector("#blue");
    blue.addEventListener("click", () => {
        squares.forEach((squares) => {
            squares.addEventListener("mouseover", () => {
                document.documentElement.style.setProperty("--hoverColor", "#4777AA");
                document.documentElement.style.setProperty("--squareColor", "#4777AA");
            });
        });
        document.querySelector("#colorMenu").classList.remove("show");
    });
    let green = document.querySelector("#green");
    green.addEventListener("click", () => {
        squares.forEach((squares) => {
            squares.addEventListener("mouseover", () => {
                document.documentElement.style.setProperty("--hoverColor", "#8CB369");
                document.documentElement.style.setProperty("--squareColor", "#8CB369");
            });
        });
        document.querySelector("#colorMenu").classList.remove("show");
    });
    let yellow = document.querySelector("#yellow");
    yellow.addEventListener("click", () => {
        squares.forEach((squares) => {
            squares.addEventListener("mouseover", () => {
                document.documentElement.style.setProperty("--hoverColor", "#fff284");
                document.documentElement.style.setProperty("--squareColor", "#fff284");
            });
        });
        document.querySelector("#colorMenu").classList.remove("show");
    });
    let orange = document.querySelector("#orange");
    orange.addEventListener("click", () => {
        squares.forEach((squares) => {
            squares.addEventListener("mouseover", () => {
                document.documentElement.style.setProperty("--hoverColor", "#F4A259");
                document.documentElement.style.setProperty("--squareColor", "#F4A259");
            });
        });
        document.querySelector("#colorMenu").classList.remove("show");
    });
    let purple = document.querySelector("#purple");
    purple.addEventListener("click", () => {
        squares.forEach((squares) => {
            squares.addEventListener("mouseover", () => {
                document.documentElement.style.setProperty("--hoverColor", "#8D82AF");
                document.documentElement.style.setProperty("--squareColor", "#8D82AF");
            });
        });
        document.querySelector("#colorMenu").classList.remove("show");
    });
}

// Add functionality to buttons
let invert = document.querySelector("#invert");
    invert.addEventListener("click", invertGrid);
let clear = document.querySelector("#clear");
    clear.addEventListener("click", clearGrid);
let size = document.querySelector("#size");
    size.addEventListener("click", sizeChoice);
let color = document.querySelector("#color");
    color.addEventListener("click", colorSelect);

createSketch(16);

