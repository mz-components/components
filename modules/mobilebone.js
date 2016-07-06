'use strict';

module.exports = (function() {

  return [{
        repos: "https://github.com/zhangxinxu/mobilebone.git",
        version: "v2.6.0",
        description: "单页切换骨架。适用于移动web APP, Hybrid混合APP, Phonegap开发, 无兼容要求单页PC应用等。",
        name: "mobilebone",
        main: "mobilebone.js",
        dependencies: [],
        mapping: [
            {
                reg: /^\/src\/(.*\.js)/,
                release: '$1'
            },
            {
                reg: /^\/src\/(.*\.css)/,
                release: '$1'
            },
            {
                reg: /^\/ReadMe\.md$/,
                release: '$&'
            },
            {
                reg: "*",
                release: false
            }
        ]
    }];
})();
