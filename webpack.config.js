module.exports = {
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.es6.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /(\.es6)?\.js|\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  devtool: 'inline-source-map'
};
