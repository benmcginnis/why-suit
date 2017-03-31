const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './entry.js',
  output: { path: __dirname, filename: './dist/script.js' },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: 'file-loader?name=dist/fonts/[name].[ext]'
      },
   ],
  },
  plugins: [
       new ExtractTextPlugin('dist/styles.css')
   ],
};
