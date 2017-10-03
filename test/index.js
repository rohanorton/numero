const assert = require('assert');
const numero = require('../index');

describe('numero()', () => {
  it('should handle numbers 0-20', () => {
    assert.equal(numero(0), 'zero');
    assert.equal(numero(1), 'uno');
    assert.equal(numero(2), 'due');
    assert.equal(numero(3), 'tre');
    assert.equal(numero(4), 'quattro');
    assert.equal(numero(5), 'cinque');
    assert.equal(numero(6), 'sei');
    assert.equal(numero(7), 'sette');
    assert.equal(numero(8), 'otto');
    assert.equal(numero(9), 'nove');
    assert.equal(numero(10), 'dieci');
    assert.equal(numero(11), 'undici');
    assert.equal(numero(12), 'dodici');
    assert.equal(numero(13), 'tredici');
    assert.equal(numero(14), 'quattordici');
    assert.equal(numero(15), 'quindici');
    assert.equal(numero(16), 'sedici');
    assert.equal(numero(17), 'diciassette');
    assert.equal(numero(18), 'diciotto');
    assert.equal(numero(19), 'diciannove');
    assert.equal(numero(20), 'venti');
  });
});
