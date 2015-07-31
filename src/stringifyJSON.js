// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //if it's an array, slice off the first value
  //if it's an object, grab the first property
  //if it's undefined or a function, don't do anything with it
  //create the string value of the thing - handle null.
  //create the JSON 
  if (obj == null)
  	console.log("Null");
  else console.log("The base value of this object is: " + obj.toString());
  return JSON.stringify(obj);
};
