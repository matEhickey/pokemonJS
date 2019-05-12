module.exports = (api) => {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-flow'];
  const plugins = ['@babel/plugin-proposal-class-properties', 'transform-flow-strip-types', 'transform-es2015-modules-commonjs'];

  return {
    presets,
    plugins,
  };
};
