const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './entry.js',
  output: { path: __dirname, filename: './dist/script.js' },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        query: {
          name:'/dist/fonts/[name].[ext]'
        }
      },
      { test: /\.md$/, loader: 'markdown-with-front-matter-loader' },
      { test: /\.soy$/, loader: 'soy-loader' },
    ],
  },
  plugins: [
    new ExtractTextPlugin({filename: './dist/styles.css', allChunks: true, publicPath: '/dist/'}),
    new CopyWebpackPlugin([{from: 'images/', to: 'dist/images/'}]),
   ],
};
