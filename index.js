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
        gridItem.remove()
    }

    clearGrid();
    createGrid(userGridInput);
}