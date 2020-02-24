module.exports = {
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  output: {
    chunkFilename: 'js/[name].js?id=[chunkhash]',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}