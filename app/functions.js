exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ", " + str2;
    }
  },

  makeClosures : function(arr, fn) {
    // var result = [];
    // for (var i = 0; i < arr.length; i++) {
    //   return result.push(function(arr[i])(return fn(arr[i])));
    // }
  },

  partial : function(fn, str1, str2) {
    return function(str3){
      return fn(str1, str2, str3);
    }
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
    return function() {
      return fn.apply(this, args.concat(
        Array.prototype.slice.call(arguments)));
      }
  },

  partialUsingArguments : function(fn) {
    var args = [].slice.call(arguments);
    args.bind()
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
