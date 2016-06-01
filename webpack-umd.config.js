var webpack = require('webpack')

module.exports = {

  entry: __dirname + '/src/index.js',

  output: {
    filename: 'dropbox-sdk.min.js',
    library: 'Dropbox',
    libraryTarget: 'umd',
    path: __dirname + '/dist'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ]

}