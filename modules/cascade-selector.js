'use strict';

module.exports = (function() {

    return [{
        repos: "https://github.com/lichenbuliren/cascade-selector.git",
        version: "v1.0.0",
        description: "联动选择插件 cascade-selector",
        name: "cascade-selector",
        main: "cascade-selector.js",
        dependencies: [
            "jquery@>=1.7"
        ],
        mapping: [{
            reg: /^\/cascade\-selector\.js$/,
            release: '$&'
        }, {
            reg: /^\/README\.md$/,
            release: '$&'
        }, {
            reg: "*",
            release: false
        }]
    }];
})();
