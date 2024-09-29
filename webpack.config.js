const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/' // set publicPath to your github repo name ex: '/my-repo-name/'
    },
    mode: argv.mode, // mode is set by the --mode flag in the npm script
    devtool: 'inline-source-map', // devtool is used for debugging in development mode
    devServer: {
      static: path.join(__dirname, 'public'),
      port: 3000,
      open: true,
      historyApiFallback: true,
    }, // devServer is used for development only
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico)$/i,
          type: 'asset/resource'
        }// if you want to use images, you need to add this rule
      ] // rules are used to tell webpack how to handle different file types
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: '404.html'
      }), // must set up 404.html for github pages to work
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    } // resolve is used to tell webpack how to resolve different file types
  }
};