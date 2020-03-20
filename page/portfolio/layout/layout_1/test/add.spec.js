const chai  = require('chai');
const expect = chai.expect;
const add = require('../test').add;

describe('testing package',() => {
    it('test example: 1 + 2 => 3',() => {
        expect(add(1,2)).to.equal(3);
    })
})


