module.exports = (api) => {
  api.cache(true);

  const presets = ['@babel/preset-flow'];
  const plugins = ['@babel/plugin-proposal-class-properties'];

  return {
    presets,
    plugins,
  };
};
