exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var result = [];
    data.files.forEach(function(el){
      if(typeof el === 'string') {
        result.push(el);
      } else if (typeof el === 'object') {
        recursionAnswers.listFiles(el.files);
      }
    })
    console.log(result);
    return result;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
