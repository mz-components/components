'use strict';

module.exports = (function() {

  return [{
    repos: "git@github.com:cryptoquick/zepto-full.git",
    version: "v1.1.4",
    description: "Zepto.js shim built full with all available modules.",
    name: "zepto-full",
    main: "zepto.js",
    mapping: [
      {
        reg: /^\/zepto\.js$/,
        release: '$&'
      },
      {
        reg: /^\/README\.md$/,
        release: '$&'
      },
      {
        reg: "*",
        release: false
      }
    ],
    shim: {
      'zepto.js': {
        'exports': ["Zepto"]
      }
    }
  }];
})();
