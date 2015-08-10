'use strict';

module.exports = (function() {

  return [{
    repos: 'git@github.com:suprMax/ZeptoScroll.git',
    version: "master",
    description: 'git@github.com:suprMax/ZeptoScroll.git',
    name: 'zepto-scroll',
    main: 'zepto.scroll.js',
    dependencies: [
      "zepto@~1.1.6"
    ],
    mapping: [
      {
        reg: /^\/static\/zepto\.scroll\.js$/,
        release: 'zeptp.scroll.js'
      },
      {
        reg: /^\/static\/style\.css$/,
        release: 'style.css'
      },
      {
        reg: /^\/README$/,
        release: '$&'
      },
      {
        reg: '*',
        release: false
      }
    ]
  }];
})();
