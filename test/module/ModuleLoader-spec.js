describe('Module loader', function() {
  it('should be able to add new module', function() {
    var moduleBody = function() {
      return 10305;
    };
    wd.module('testModule').body(moduleBody);
    // 侵入式获取Module Loader
    var moduleLoader = wd.ModuleLoader._moduleTable['testModule'];
    expect(moduleLoader).to.be.ok;
    expect(moduleLoader instanceof wd.ModuleLoader).to.be.ok;
    expect(moduleLoader._instance).to.eql(10305);
  });
});