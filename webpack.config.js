module.exports = {
  entry: './entry.js',
  output: { path: __dirname, filename: './dist/script.js' },
  module: {
    loaders: [ { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] } ],
  },
};
