// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//This is just some code to handle strings and integers, and nulls.
var stringifyPrims = function(obj){
  if (obj == null){
    console.log("null");
    return "null";
  }
  if (typeof obj != 'obj' && obj != null){
    console.log("It's not an object: " + obj);
    if (typeof obj == 'string')
      return ('"' + obj.toString() + '"');
    else return obj.toString();
  }
};


//This basically detects an array or object, adds the framing syntax, and loops through the contents, calling itself recursively.
//If this doesn't identify an array or an object, it assumes that it's a primitive and returns a primitive value with syntax decoration via stringifyPrims.
var stringifyJSON = function(obj) {
  
  var result = "";
  var firstRun = true;
  if (obj instanceof Array){
    result = result + "[";
      for(var i = 0; i < obj.length; i ++){
        result = result + stringifyJSON(obj[i]);
        if (i != obj.length - 1)
          result = result + ",";
      }
    result = result + "]";
  }
  else if (obj instanceof Object){
    result = result + "{";
    for(var k in obj){
      if((typeof obj[k] !== "undefined") && (typeof obj[k] !== "function")){
        if (firstRun == true){
          firstRun = false;
        }
        else result = result + ',';
        result = result + '"' + k + '":' + stringifyJSON(obj[k]);
      }
    }
    result = result + "}";

  }
  else return stringifyPrims(obj);
  return result;

  //return JSON.stringify(obj);
};


