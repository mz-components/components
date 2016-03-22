'use strict';

module.exports = (function() {

  return [
    {
      repos: "https://github.com/zhzhchwin/mz-scroll.git",
      version: "v1.0.1",
      description: "mz-scroll jquery 插件",
      name: "mz-scroll",
      main: "mz-scroll.js",
      mapping: [{
        reg: /^\/mz\-scroll\.js$/,
        release: '$&'
      }, {
        reg: /^\/readme\.md$/,
        release: '$&'
      }, {
        reg: "*",
        release: false
      }]
    }];
})();
