const numero = n => {
  const digitMap = {
    '0': 'zero',
    '1': 'uno',
    '2': 'due',
    '3': 'tre',
    '4': 'quattro',
    '5': 'cinque',
    '6': 'sei',
    '7': 'sette',
    '8': 'otto',
    '9': 'nove',
   '10': 'dieci',
   '11': 'undici',
   '12': 'dodici',
   '13': 'tredici',
   '14': 'quattordici',
   '15': 'quindici',
   '16': 'sedici',
   '17': 'diciassette',
   '18': 'diciotto',
   '19': 'diciannove',
   '20': 'venti',
  };
  return digitMap[n];
};

module.exports = numero;
