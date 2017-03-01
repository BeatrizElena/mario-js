printPyramid(8);

/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *    ##
 *   ###
 *  ####
 * #####
 *######
 */
function printPyramid(height) {
  for ( var row = 1; row <= height; row++){
    var space = "";
    var hash = "";
    var space_count = height - row;
    var hash_count = height - space_count;
      for (var i = space_count; i > 0; i--)
        space += " ";
      for (var j = 0; j <= hash_count; j++)
        hash += "#"
      console.log(space, hash);
    }
};
//     //
    // console.log("Uh oh... the pyramid is under construction.");
    // console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
// printPyramid(5);
