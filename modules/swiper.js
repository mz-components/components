'use strict';

module.exports = (function() {

  return [{
    repos: "https://github.com/nolimits4web/Swiper.git",
    version: "v3.1.0",
    description: "Most modern mobile touch slider with hardware accelerated transitions",
    name: "swiper",
    main: "swiper.js",
    mapping: [
      {
        reg: /^\/dist\/js\/(swiper\.js)$/,
        release: '$1'
      },
      {
        reg: /^\/dist\/css\/(swiper\.css)$/,
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
  },
  {
    repos: "https://github.com/nolimits4web/Swiper.git",
    version: "v2.7.6",
    description: "Most modern mobile touch slider with hardware accelerated transitions",
    name: "swiper",
    main: "swiper.js",
    mapping: [
      {
        reg: /^\/dist\/idangerous\.swiper\.js$/,
        release: 'swiper.js'
      },
      {
        reg: /^\/dist\/idangerous\.swiper\.css$/,
        release: 'swiper.css'
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
  }
  ]
})();
