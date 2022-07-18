let assert = require("assert");
let regCheck = require("../regCheck");
describe('regCheck' , function(){
    it('should return false for MP if car registration ends with MP' , function(){
        assert.deepEqual(regCheck("NN 5768",'MP'),false);
    });
    
    it('should return true for GP if car registration ends with GP' , function(){
        assert.deepEqual(regCheck('468 GP', 'GP'),true);
    });

});