'use strict';

module.exports = (function() {

  return [{
        repos: "https://github.com/h2non/jshashes",
        version: "1.0.5",
        description: "前端 MD5、SHA1、SHA256、SHA512、RMD160 算法加密工具",
        name: "hashes",
        main: "hashes.js",
        dependencies: [],
        mapping: [
            {
                reg: /^\/hashes\.js$/,
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
        ]
    }];
})();
