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
  it('should handle tens', () => {
    assert.equal(numero(10), 'dieci');
    assert.equal(numero(20), 'venti');
    assert.equal(numero(30), 'trenta');
    assert.equal(numero(40), 'quaranta');
    assert.equal(numero(50), 'cinquanta');
    assert.equal(numero(60), 'sessanta');
    assert.equal(numero(70), 'settanta');
    assert.equal(numero(80), 'ottanta');
    assert.equal(numero(90), 'novanta');
  });
  it('should handle numbers less than 100', () => {
    assert.equal(numero(22), 'ventidue');
    assert.equal(numero(37), 'trentasette');
    assert.equal(numero(45), 'quarantacinque');
    assert.equal(numero(59), 'cinquantanove');
    assert.equal(numero(66), 'sessantasei');
    assert.equal(numero(73), 'settantatré');
    assert.equal(numero(81), 'ottantuno');
    assert.equal(numero(98), 'novantotto');
  });
  it('should ignore decimal numbers (for now)', () => {
    assert.equal(numero(2.1234), 'due');
    assert.equal(numero(3.129431), 'tre');
    assert.equal(numero(14.9999999), 'quattordici');
    assert.equal(numero(90.1234234), 'novanta');
  });
  it('should handle negative numbers', () => {
    assert.equal(numero(-1), 'meno uno');
    assert.equal(numero(-4), 'meno quattro');
    assert.equal(numero(-15), 'meno quindici');
    assert.equal(numero(-20), 'meno venti');
  });
  it('should handle large numbers', () => {
    assert.equal(numero(1492), 'millequattrocentonovantadue');
    assert.equal(numero(1962), 'millenovecentosessantadue');
    assert.equal(numero(1991), 'millenovecentonovantuno');
    assert.equal(numero(2000), 'duemila');
    assert.equal(numero(2016), 'duemilasedici');
    assert.equal(numero(3033), 'tremilatrentatré');
    assert.equal(numero(2650000), 'due milioni e seicentocinquantamila');
  });
});
