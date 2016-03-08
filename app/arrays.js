exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return _.reduce(arr, function(memo, num){
      return memo += num;
    }, 0);
  },

  remove : function(arr, item) {
    return arr.filter(function(el){
      return el !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        arr.splice(i, 1);
        i--
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    arr.forEach(function(el){
      if(el === item){
        count += 1;
      }
    });
    return count;
  },

  duplicates : function(arr) {
    var dups = [];
    var checker = [];
    arr.forEach(function(el){
      if(checker.indexOf(el) === -1) {
        checker.push(el);
      } else if(dups.indexOf(el) === -1) (
        dups.push(el)
      )
    });
    return dups;
  },

  square : function(arr) {
    return arr.map(function(el){
      return el * el
    });
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    arr.forEach(function(el, idx){
      if(el === target) {
        result.push(idx);
      };
    });
    return result;
  }
};
