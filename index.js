const gridContainer = document.querySelector("#grid-container");

// function that builds a grid in the "gridContainer"
function createGrid(x) 
{
    let size = (x * x);
    for (let rows = 0; rows < size; rows++) 
    {
        const gridItem = document.createElement("div");
        gridItem.classList.toggle("grid-item");
        for (let columns = 0; columns < size; columns++) 
        {
            gridContainer.append(gridItem);
        }
        gridItem.setAttribute("style", `width: ${720/x}px; height: ${720/x}px`);
    }
};


createGrid(16);

let colour = "purple";

//this creates the event by hovering over the grid-item
gridContainer.addEventListener("mouseover", (event) =>
{
    //target the background colour (note, this had to be written in camelCase)
    event.target.style.backgroundColor = colour;
    event.target.style.outline = colour;
},
//not sure whether this is needed - works without it - maybe delete later!
false);

//Create a function which resizes the grid when a button is pressed depending on the font

const gridItem = document.querySelector(".grid-item");

function resizeGrid ()
{
    userGridInput = prompt("How many boxes per side (maximum of 100)?", 16);

    function clearGrid()
    {
        gridItem.remove() //(resize-function branch) we need to change this to gridContainer.remove()
    }

    clearGrid();
    createGrid(userGridInput);
}

/*New git branch (resize-function) made becuase I need to re-write the above createGrid() function. The aim of this is to include adding the #grid-container to the createGrid function 
(and thereby removing it from the HTML) and doing the following:

    Moving the gridContainer variable inside the function and replacing it (outside the function) with a middleBody variable, since this is the query selector we will be working with.
    Add the gridContainer to this through createElement("div") and then gridContainer.classList.toggle("grid-container") (NOTE: we need to change the grid-container to a class to do this,
    as it is currently an ID).
    Continue the relevant functions with regard to creating the grid-items within the gridContainer just created (note, the grid container must NOT be in the for statement!) and check that
    this works!
    Finally, finish up with the resize grid function.*/