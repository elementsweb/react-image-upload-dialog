module.exports = baseConfig => {
  baseConfig.module.rules = [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  }];
  return baseConfig;
};