const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
	webpack: {
		// 路径别名
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	// babel 配置
	babel: {},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: { '@primary-color': '#1890ff' },
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
