module.exports = {
  entry: './src/main.js',
  output: {
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {  
        test: /\/src\/(.*)\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ],
  }
}
