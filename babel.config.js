module.exports = (api) => {
	api.cache(true);

	const presets = ['@babel/preset-flow'];
	const plugins = [];

	return {
		presets,
		plugins,
	};
};
