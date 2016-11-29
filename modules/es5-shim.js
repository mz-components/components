'use strict';

module.exports = (function() {

  return [
    {
      repos: "https://github.com/es-shims/es5-shim",
      version: "v4.5.9",
      description: "es5-shim",
      name: "es5-shim",
      main: "es5-shim.js",
      mapping: [{
        reg: /^\/es5\-shim\.js$/,
        release: '$&'
      }, {
        reg: /^\/readme\.md$/i,
        release: '$&'
      }, {
        reg: "*",
        release: false
      }]
    }];
})();
