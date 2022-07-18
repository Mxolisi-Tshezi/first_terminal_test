let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");
describe('findItemsOver20' , function(){
    it('should return all the products that have a quantity higher than 20' , function(){
        assert.deepEqual([{name : 'apples', qty : 40}, {name : 'apples', qty : 37}] ,findItemsOver20([{name : 'apples', qty : 40}, {name : 'pears', qty : 10}, {name : 'bananas', qty : 13}, {name : 'apples', qty : 37}]));
    })
});

