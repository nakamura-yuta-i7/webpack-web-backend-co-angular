module.exports = [
  {
    name: "backend",
    entry: {
      app: ['babel-polyfill', './src/backend/app.js'],
    },
    output: {
      path: __dirname + "/backend/dist/",
      filename: "[name].js"
    },
    target: 'node',
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader?presets[]=es2015',
            },
        ]
    },
    externals: getNodeModules(),
    plugins: [
    ]
  },
  {
    name : "web",
    entry: {
      main: ['babel-polyfill', './src/web/main.js'],
    },
    output: {
      path: __dirname + "/public/dist/",
      filename: "[name].js"
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader?presets[]=es2015',
              exclude: /(node_modules|bower_components)/,
            },
        ]
    },
    // externals: getNodeModules(),
    plugins: [
    ]
  }
]

function getNodeModules() {
  var nodeModules = {};
  var fs = require('fs');
  fs.readdirSync('node_modules')
    .filter(function(x) {
      return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
      nodeModules[mod] = 'commonjs ' + mod;
    })
  return nodeModules
}
