/**Mario4 JS Requirements:
1. if user doesn't type anything at all, give a different error message, like "Please provide a height"
2. negative numbers and zero should also be rejected here
3. implement the clearError(message) function.
    a. Remove any text from that red label.
    b. Make sure the input element **does not** have a class of `invalid-field`.
    c. For reference, you can look at the displayError function. You want to do essentially the opposite of what that function does.
*/

var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");

// set a handler function for the form's submission event
formElem.onsubmit = function(event) {
    height = 1;
    // QUIZ 1: what happens if we don't do this?
    event.preventDefault();

    // QUIZ 2: what happens if we don't do this?
    clearError();

    // figure out the height the user typed
    heightStr = heightElem.value;
    // TODO 1: error message if user leaves box empty.
    if(heightStr.length === 0){
      displayError("Please provide a height");
      return;
    }else{
    // convert the string to an int
    height = parseInt(heightStr);
    }
    // if the height is not-a-number, yell at them and exit early
    // TODO 2: negative numbers and zero get rejected
    if (height <= 0){
      displayError("Negative numbers and zero are not valid heights");
    }else if (isNaN(height)) {
        displayError("That's not a valid height.");
        return;
    }

    // if the height is absurdly tall, yell at them and exit early
    var tooTall = 100;
    if (height > tooTall) {
        displayError("Are you cray? I can't build a pyramid that tall.");
        return;
    }

    // draw pyramid with the specified height
    drawPyramid(height);
};

/**displayError
 * Displays an error message on the text input, and colors it red
 */
function displayError(message) {
    heightElem.className = "invalid-field";
    document.querySelector(".error-message").innerHTML = message;
}

/*clearError
 * Undisplays the error message and removes the red CSS style
 */
function clearError() {
    // TODO 3: implement this function.
  heightElem.className = "invalid-field";
    document.querySelector(".error-message").innerHTML = "";
}

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
/** QUIZZES
1) What happens if we don't do the event.preventDefault();?
  JS event handlers are usually called before the browser's default behavior is performed. The onsubmit attribute runs by default when a form is submitted. If we don't want the handler to run the onsubmit attribute, we have it call the preventDefault method on the event object.
2) what happens if we don't have a clearError() fx?
  Error message stays even if correct height is input. 
     */