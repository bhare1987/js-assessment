exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return Number(num).toString(2);
  },

  base10: function(str) {
    return parseInt(str, 10);
  },

  convertToBinary: function(num) {
    return Number(num).toString(2);
  },

  multiply: function(a, b) {
    return toFloat(a * b);
  }
};
