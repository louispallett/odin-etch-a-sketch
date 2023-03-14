// function that builds a grid in the "gridContainer"
function createGrid(x) 
{
    let size = (x * x);
    for (let rows = 0; rows < size; rows++) 
    {
        const gridContainer = document.querySelector("#grid-container");
        const gridItem = document.createElement("div");
        gridItem.classList.toggle(("grid-item"));
        for (let columns = 0; columns < size; columns++) 
        {
            gridContainer.append(gridItem);
        }
        gridItem.setAttribute("style", `width: ${720/x}px; height: ${720/x}px`);
    }
};


createGrid(16);

let colour = "purple";

//Select grid container (originally used gridItem, but this didn't work)
const gridContainer = document.querySelector("#grid-container");

//this creates the event by hovering over the grid-item
gridContainer.addEventListener("mouseover", (event) =>
{
    //target the background colour (note, this had to be written in camelCase)
    event.target.style.backgroundColor = colour;
},
//note sure whether this is needed - works without it - maybe delete later!
false);