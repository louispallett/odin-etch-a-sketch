# odin-etch-a-sketch
The Odin Project - Project Etch-A-Sketch

The aim of this project is to improve knowledge and usage of javascript in relation to the DOM as well as continuing to improve knowledge of CSS.

I'm also working between two computers - so using git fetch/pull regularly. Hopefully this doesn't mess this up!

15/3/23 - Reflection

This project tested my ability to use both the various loop funcitons, conditional statments, and DOM node selectors. Although I did feel initally fairly confident on many aspects here, the use of the 'inner for loop' (i.e. a for loop within a for loop) is something initially I struggled with. I feel a bit more confident with this now.

The grid is actually a great visual representation of this - each time you add a row, you add the argument number (which starts at 16) to it. Then, once that number is reached, the outer loop loops again, and so on until the OUTER loop has reached the argument number.

The use of referencing JS information within a CSS quote (i.e. line 15, setAttribute() in index.js) is something I worked out myself - a sign that I was able to apply what I've learned proactively.

One final important lesson learned: when using querySelectorAll() - which I did so to remove the grid with the Resize Grid button - creates an Array. Initially, to fix this I over thought the solution, and began trying to create the grid container in the inital createGrid() function, whereas the solution was much simpler. Since the array contains many variables, these have to be looped through as if they are individual variables. This is where the forEach() function was invaluable.

For future improvement, I think it would be good to:

Add more colours - I used a colour variable unnecessarily here, but by giving more options would mean this would have some use.

Fix the resize button for multiple usage. At the moment, if you click the resize button again it will just add the grid items below the current grid, without removing the original one. So, at the moment this only works once.

Completing the 'extra-credit' assignment on the Odin Project.