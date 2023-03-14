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
            gridContainer.appendChild(gridItem);
        }
        gridItem.setAttribute("style", `width: ${960/(x * 2)}px; height: ${960/(x * 2)}px`);
    }
};


createGrid(8);

   