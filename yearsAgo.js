module.exports = function yearsAgo(year){
    var date =new Date()
   
    var yearToday=date.getFullYear()
    return yearToday-year
    }
    // console.log(yearsAgo(1999))
