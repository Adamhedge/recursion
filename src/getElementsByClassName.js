// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className
){
  //console.log(document.getElementsByClassName(className));
  var body = document.body;
  var results = [];

  var getElementsbyClassNameFromObject = function(domObject){
  	console.log(domObject.hasOwnProperty('classList'));
  	if(domObject['classList'] !== undefined){
      if (domObject.classList.length > 0 && domObject.classList.contains(className)){
        results.push(domObject);
      }
    }
    if(domObject.hasChildNodes()){
	  for(var i = 0; i < domObject.childNodes.length; i ++){
	    getElementsbyClassNameFromObject(domObject.childNodes[i]);
      }
    }
  };
  
  getElementsbyClassNameFromObject(body);
  return results;
  return Array.prototype.slice.apply(document.getElementsByClassName(className));
 
};
