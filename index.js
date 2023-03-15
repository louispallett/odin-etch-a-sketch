const gridContainer = document.querySelector("#grid-container");

// Builds a grid in the "grid-container" class
function createGrid(x) 
{
    let size = (x * x);
    for (let rows = 0; rows < size; rows++) 
    {
        const gridItems = document.createElement("div");
        gridItems.classList.toggle("grid-item");
        for (let columns = 0; columns < size; columns++) 
        {
            gridContainer.append(gridItems);
        }
        gridItems.setAttribute("style", `width: ${720/x}px; height: ${720/x}px`);
    }
};
//Initial grid
createGrid(16);

let colour = "#5AF717";

//creates the event by hovering over the grid-item
gridContainer.addEventListener("mouseover", (event) =>
{
    //target the background colour (note, this had to be written in camelCase)
    event.target.style.backgroundColor = colour;
    event.target.style.outline = colour;
},
false);

//Select all grid-items (this creates an array)
const gridItems = document.querySelectorAll(".grid-item");

//Uses a forEach loop since this is an array, so without only removes final grid-item
function clearGrid()
{
    gridItems.forEach(gridItem => 
    {
        gridItem.remove()
    });
}

//On clicking "Resize Grid" button
function resizeGrid ()
{
    userGridInput = prompt("How many boxes per side (maximum of 100)?", 16);

    if(userGridInput > 100)
    {
        alert("That's more than a 100!");
    } else
    {
        clearGrid();
        createGrid(userGridInput);
    }
}