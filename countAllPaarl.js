var regNumbers = 'CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123';
module.exports = function countAllPaarl(itemStrings){
  let counter = 0;
  var regNumbers = itemStrings.split(",");
  for(var i=0;i<regNumbers.length;i++){ 
    let currentList=regNumbers[i].trim();
   if(currentList.includes("CJ")){
   counter++;
   }
  }
   return counter;
}