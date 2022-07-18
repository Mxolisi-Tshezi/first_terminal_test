module.exports = function totalPhoneBill(itemStrings){
    var RegNoArray = itemStrings.split(",");
    var totalBill = 0;
    
     for (var i=0; i<RegNoArray.length;i++){
     let currentList=RegNoArray[i].trim() 
    if (currentList==="call"){
      totalBill =totalBill + 2.75;
     }
    else if (currentList==="sms"){
      totalBill = totalBill + 0.65;
    }
}
return "R" + totalBill.toFixed(2);
//console.log(totalBill)
}
// console.log(totalPhoneBill('call, call, call, call'))
// console.log(totalPhoneBill('sms, sms, sms'))
// console.log(totalPhoneBill('call, call, call, sms, sms, call sms'))