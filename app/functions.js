exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak : function(fn, obj) {

  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ", " + str2;
    }
  },

  makeClosures : function(arr, fn) {

  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {
    var args = [].slice.call(arguments);
    var result = args.reduce(function(memo, num){
        return memo + num;
      });
    return result;
  },

  callIt : function(fn) {
      var args = [].slice.call(arguments);
      fn.apply(null, args);

  },

  partialUsingArguments : function(fn) {
    var args = [].slice.call(arguments);
    args.bind(Math.random(), Math.random(), Math.random())
  },

  curryIt : function(fn) {
    return function(x) {
      return function(y) {
        return function(z) {
          return x / y * z;
        }
      }
    }
  }
};
