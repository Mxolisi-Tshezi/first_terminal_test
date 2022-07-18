
module.exports=function findItemsOver20(item){

    var over20 = [];
    
    for(var i=0; i<item.length; i++){
      var quantity = item[i].qty;
      
      if(quantity > 20){
        over20.push(item[i])
        
      }
    } 
        return over20
  }
 
