'use strict';

module.exports = (function() {

  return [
    {
      repos: "https://github.com/leizongmin/js-xss.git",
      version: "v0.2.17",
      description: "xss filter",
      name: "xss",
      main: "xss.js",
      mapping: [{
        reg: /^\/dist\/(xss\.js)$/,
        release: '$1'
      }, {
        reg: /^\/readme\.md$/i,
        release: '$&'
      }, {
        reg: "*",
        release: false
      }]
    }];
})();
