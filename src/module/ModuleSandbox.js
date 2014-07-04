;(function(wd) {
  /**
   * 模块运行沙盒
   *
   * @module  wd.module
   * @class  Sandbox
   */
  function ModuleSandbox() {
    this._context = {};
  }

  /**
   * 运行沙盒代码
   *
   * @method  run
   * @param  {Function} fn 沙盒代码（函数体）
   */
  ModuleSandbox.prototype.run = function(fn) {
    fn.apply(this._context);
  };

  /**
   * 添加沙盒运行时的依赖模块
   *
   * @method  require
   * @param  {String} depModulePath 依赖模块路径
   * @param  {String} alias         依赖模块的别名
   * @return {ModuleSandbox}        运行的沙盒
   * @chainable
   */
  ModuleSandbox.prototype.require = function(depModulePath, alias) {
    var moduleInstance = ModuleLoader.getModuleInstance(depModulePath);
    if (alias) {
      this._context[alias] = moduleInstance;
    }
    else {
      this._context[depModulePath] = moduleInstance;
    }
    return this;
  };

  wd.ModuleSandbox = ModuleSandbox;
})(wd);