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
                reg: /^\/js\/(cityData\.json)$/,
                release: 'city-data.json'
            },
            {
                reg: /^\/js\/(globalData\.json)$/,
                release: 'global-data.json'
            },
            {
                reg: /^\/js\/(jquery\.cxselect\.js)$/,
                release: '$1'
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
