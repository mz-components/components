'use strict';

module.exports = (function() {

  return [{
        repos: "https://github.com/ciaoca/cxSelect.git",
        version: "v1.3.11",
        description: "地区联动插件 jquery-cxselect",
        name: "jquery-cxselect",
        main: "jquery-cxselect.js",
        dependencies: [
            "jquery@>=1.7"
        ],
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/jquery\-cxselect\.js$/,
                release: '$&'
            },
            {
                reg: /^\.json$/,
                release: '$&'
            },
            {
                reg: /^\/readme\.md$/,
                release: '$&'
            },
            {
                reg: "*",
                release: false
            }
        ]
    }];
})();
