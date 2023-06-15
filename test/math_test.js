const expect = require('chai').expect
const assert = require('chai').assert
require('chai').should()

// test suite
describe('Math tests for development!', ()=>{
    const math = require('../math')

    // unit tests
    it("should add two numbers together and return the sum of them", ()=>{
        expect(math.addition(2,2)).to.equal(2+2)
        expect(math.addition(2,2)).to.equal(4)
        assert.equal(math.addition(2,4),6)
        assert.equal(math.addition(4,4), 4+4)
        math.addition(10, 2).should.equal(12)
        math.addition(10, 12).should.equal(12+10)
    })

    it("should return the quotient remainder", function(){
        expect(math.modulo(8, 3)).to.equal(2)
    })
})
