/**
 * 自带的ES5 Shim里集成了一些ES5当中最常用的函数，用于加快编码效率。注意，这个类并不在全局对象
 * `wd`里存在。
 * 
 * @class ES5Shim
 */
;(function() {
  if (!Array.prototype.map) {

    /**
     * ES5-Array.prototype.map
     * 
     * @method  map
     * @for ES5Shim
     * @example
     *     var squareOfNumbers = [1, 2, 3].map(function(num) {
     *       return Math.pow(num, 2);
     *     });
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