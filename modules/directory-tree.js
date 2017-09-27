'use strict';

module.exports = (function() {

  return [
    {
      repos: "https://github.com/mihneadb/node-directory-tree.git",
      version: "2.0.0",
      description: "目录转 JSON Tree 组件",
      name: "directory-tree",
      main: "directory-tree.js",
      mapping: [{
        reg: /^\/lib\/(directory-tree\.js)$/,
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
