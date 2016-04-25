'use strict';

module.exports = (function() {

  return [{
        repos: "https://github.com/ciaoca/cxSelect.git",
        version: "1.3.11",
        description: "地区联动插件 jquery-cxselect",
        name: "jquery-cxselect",
        main: "jquery.cxselect.js",
        dependencies: [
            "jquery@>=1.7"
        ],
        mapping: [
            {
                reg: /\.min\.(js|css|json)$/,
                release: false
            },
            {
                reg: /^\/js\/(.*?\.json)$/,
                release: '$1'
            },
            {
                reg: /^\/js\/(jquery\.cxselect\.js)$/,
                release: '$1'
            },

            {
                reg: /^\/READEME\.md$/,
                release: '$&'
            },
            {
                reg: "*",
                release: false
            }
        ]
    }];
})();
