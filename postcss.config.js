const autoprefixer = require('autoprefixer')
const modules = require('postcss-modules')

const config = {
  plugins: [
    autoprefixer({
      remove: false,
      browsers: [
        'last 2 versions',
        'IE >= 11',
        'safari >= 9'
      ]
    }),
    modules({
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    })
  ]
}

module.exports = config
