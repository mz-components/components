'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/alvarotrigo/fullPage.js.git',
        version: '2.6.5',
        name: 'fullpage',
        main: 'jquery.fullpage.js',
        dependencies: [
            "jquery@>=1.6"
        ],
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: '/jquery.fullPage.js',
                release: 'jquery.fullpage.js'
            },
            {
                reg: '/jquery.fullPage.scss',
                release: 'jquery.fullpage.scss'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();
