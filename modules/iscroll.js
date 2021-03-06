'use strict';

module.exports = (function() {

  return [
    {
      repos: "git@github.com:cubiq/iscroll.git",
      version: "v5.1.1",
      description: "Smooth scrolling for the web http://iscrolljs.com",
      name: "iscroll",
      main: "iscroll.js",
      mapping: [{
        reg: /^\/build\/(.*\.js)/,
        release: '$1'
      }, {
        reg: /^\/README\.md$/,
        release: '$&'
      }, {
        reg: "*",
        release: false
      }]
    }];
})();

