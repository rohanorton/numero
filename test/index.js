const assert = require('assert')
const numero = require('../index')


describe('numero()', () => {
    it('should handle single digit numbers', () => {
        assert.equal(numero(0), 'zero')
        assert.equal(numero(1), 'uno')
        assert.equal(numero(2), 'due')
        assert.equal(numero(3), 'tre')
        assert.equal(numero(4), 'quattro')
        assert.equal(numero(5), 'cinque')
        assert.equal(numero(6), 'sei')
        assert.equal(numero(7), 'sette')
        assert.equal(numero(8), 'otto')
        assert.equal(numero(9), 'nove')
    })
})
