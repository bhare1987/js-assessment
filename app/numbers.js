exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return num&bit;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    return Number(num).toString(2);
  },

  multiply: function(a, b) {
    return Number((a*b).toPrecision(3));
  }
};
