module.exports = function regCheck(registrationNo,locIndictr){
    return registrationNo.endsWith(locIndictr)
    }
    
    // console.log(regCheck ("5768 MP","MP"))
    // console.log(regCheck ("5768 GP","GP"))