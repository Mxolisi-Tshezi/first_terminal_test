let assert = require("assert");
let isWeekday = require("../isWeekday");
describe('isWeekday' , function(){
    it('should return true if day is a weekday' , function(){
        assert.equal(isWeekday('Monday'), true);
    });
});