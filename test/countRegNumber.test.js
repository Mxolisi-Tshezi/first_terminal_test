let assert = require("assert");
let countRegNumber = require("../countRegNumber");
describe('in countRegNumber' , function(){
    it('should return the number of registration numbers in the string' , function(){
        assert.equal(countRegNumber("CA 182736,CY 523519,CJ 812328"), 3);
    });
    it('should return 1 if there is 1 registration numbers in the string' , function(){
        assert.equal(countRegNumber("CA 182736"), 1)
    });
 
});