/** Mario 3 Requirements:
1. set button's click event to determineHeightAndThenDrawPyramid fx. 
2. Draw the pyramid with the given height.
3. Figure out the height the user typed (replace the "5" in heightStr = "5";)
4. Before drawing the new pyramid, clear the old content.
*/
/**determineHeightAndThenDrawPyramid
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */
function determineHeightAndThenDrawPyramid() {
    // TODO 3: figure out the height the user typed
    heightStr = document.getElementById("height").value;

    // here we convert the string to an int
    height = parseInt(heightStr);

    // TODO 2: draw the pyramid with the given height
	drawPyramid(height);
};

// TODO 1: hook up the button's click event to our determineHeightAndThenDrawPyramid function
	var button =  document.getElementById("drawButton");
	button.addEventListener("click", determineHeightAndThenDrawPyramid);


/**drawPyramid
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height) {
     // TODO 4: before drawing, clear the old content
	document.getElementById("pyramid").innerHTML = "";

     // for each row....
     for (var row = 0; row < height; row++) {
         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += ".";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += "#";
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
