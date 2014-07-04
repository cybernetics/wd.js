/**
 * 模块化加载模块
 *
 * @module  wd.module
 */
;(function(wd) {
  /**
   * 提供模块名时，将定义一个新模块。不提供模块名时，将在沙盒中运行代码。
   *
   * @method module
   * @for Core
   * @static
   * @example
   *     var util = wd.module('core.util');
   *
   * @param {String} modulePath 模块的路径名
   * @return {ModuleLoader|ModuleSandbox} 模块配置对象/模块运行沙盒
   */
  wd.module = function(modulePath) {
    if (modulePath && typeof modulePath === 'string') {
      return new wd.ModuleLoader(modulePath);
    }
    else {
      return new wd.ModuleSandbox();
    }
  };

})(wd);