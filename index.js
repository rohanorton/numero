const numberMap = {
  '-': 'meno',
  0: 'zero',
  1: 'uno',
  2: 'due',
  3: 'tre',
  4: 'quattro',
  5: 'cinque',
  6: 'sei',
  7: 'sette',
  8: 'otto',
  9: 'nove',
  10: 'dieci',
  11: 'undici',
  12: 'dodici',
  13: 'tredici',
  14: 'quattordici',
  15: 'quindici',
  16: 'sedici',
  17: 'diciassette',
  18: 'diciotto',
  19: 'diciannove',
  20: 'venti',
  30: 'trenta',
  40: 'quaranta',
  50: 'cinquanta',
  60: 'sessanta',
  70: 'settanta',
  80: 'ottanta',
  90: 'novanta',
};

const cardinalMap = {
  2: 'cento',
  3: 'mille',
  6: 'miliardo',
};

const numero = n => {
  const floored = parseInt(n, 10);

  if (numberMap[floored]) {
    return numberMap[floored];
  }

  // If the number is a negative value.
  if (floored < 0) {
    return numberMap['-'] + ' ' + numero(-floored);
  }

  let interval = intervals(floored);

  // It's below one hundred, but greater than nine.
  if (interval === 1) {
    return (
      numberMap[Math.floor(floored / 10) * 10] +
      numero(Math.floor(floored % 10))
    );
  }

  const sentence = [];

  // Simple check to find the closest full number helper.
  while (!cardinalMap[interval]) interval -= 1;

  const join = interval == 6 ? ' ' : ''

  if (cardinalMap[interval]) {
    const remaining = Math.floor(floored % Math.pow(10, interval));
    const units = Math.floor(floored / Math.pow(10, interval));
    const cardinal = pluralise(cardinalMap[interval], units)
    if (units !== 1) {
      sentence.push(numero(units));
    }
    sentence.push(cardinal);

    if (remaining) {
      if (interval == 6) sentence.push('e')
      sentence.push(numero(remaining));
    }
  }

  return sentence.join(join);
};

const pluralise = (word, number) => {
  if (number < 2) return word
  switch (word) {
    case 'miliardo':
      return 'milioni'
    case 'mille':
      return 'mila'
    default:
      return word
  }
}

const intervals = num => {
  const match = String(num).match(/e\+(\d+)/);
  return match ? match[1] : String(num).length - 1;
};

// Add exceptions:
[20, 30, 40, 50, 60, 70, 80, 90].forEach(tens => {
  // Remove last letter in -1 and -8 numbers:
  numberMap[tens + 1] = numero(tens).slice(0, -1) + 'uno';
  numberMap[tens + 8] = numero(tens).slice(0, -1) + 'otto';

  // Tre => Tré if after a ten:
  numberMap[tens + 3] = numero(tens) + 'tré';
});

module.exports = numero;
