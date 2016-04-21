var React = require('react');
var Webpack = require('webpack');
var path = require('path');
var statsHandler = require('stats-webkpack-handler');
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({filename: 'assets.json'});
var glob = require("glob");

//设置jquery全局变量
new Webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  "window.jQuery": "jquery"
});

var entryFilesArray = glob.sync("./js/*.js");

var entryFiles = {};
entryFilesArray.forEach(function(val){
  var m = val.match(/([^\/]+).js$/);
  if(m && m[1]){
    entryFiles[m[1]]=val;
  }
});



module.exports = {
  entry: entryFiles,
  output: {
    path: './resources',
    publicPath:'./resources/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      path: __dirname,
      wxapi : './js/lib/jweixin-1.0.0'
    }
  },
  "parser": "babel-eslint",
  "ecmaFeatures": {
    "modules": true
  },
  module: {
    loaders: [
      { test: /\.jpg$/, loader: "url-loader?mimetype=image/jpg&limit=8000" },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png&limit=8000" },
      { test: /\.gif$/, loader: "url-loader?mimetype=image/gif&limit=8000" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.jsx$/, loader: 'babel-loader!jsx-loader?harmony' }
    ]
  },
  plugins:[assetsPluginInstance,function() {
    this.plugin("done", function(stats) {
      statsHandler({path:'./',ext:'.php'});
    });
  }]
};
