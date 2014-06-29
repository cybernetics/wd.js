;(function() {
  if (!Array.prototype.map) {
    /**
     * 
     */
    Array.prototype.map = function(callback, thisArg) {
      var len = this.length,
        results = [],
        currentResult;
      for (var i = 0; i < len; i ++) {
        currentResult = callback.call(thisArg, this[i], i, this);
        results[i] = currentResult;
      }
      return results;
    };
  }
})();