/**
 * 反向代理
 * 开发环境生效，生产环境不生效
 * target 代理地址
 * ws: websocket true/false
 * changeOrigin: true
 * pathRewrite: 路径重写规则
 */
const { createProxyMiddleware: proxy } = require('http-proxy-middleware');
var cookie = '.ASPXANONYMOUS=xieLg4UZNsWE2-0bxetIufUs_s0EGdq1oRwlq9UNBkCs9WdBMdhueUcQ7kKDoCoWsv5Sdpl5nVnrBpcpHAhD9nsB1NSdCozdYBop6Ha-3nP05nc80; dnn_IsMobile=False; .DOTNETNUKE=10A9AE5428C8575D70ACE850B16819E62AC835519F7D3B18F0BFFDD51B2E123578C14EACB6121F540E55DE29E455B1CFF966158F4BBB9B138A9D45E46A8C9A23A409B50EF13AF2904438089B; language=zh-CN; CurrentCompanyCodeOfUser=JTDB-00016000; CurrentDeptCodeOfUser=JTDB-00016000';
function relayRequestHeaders(proxyReq, req) {
  if (cookie) {
    proxyReq.setHeader('Cookie', cookie);
  }
};
module.exports = (app) => {
	app.use(
		proxy('/api', {
			target: 'http://10.252.196.24:8009/',
			onProxyReq: relayRequestHeaders,
			changeOrigin: true,
			pathRewrite: {
				'^/api': '',
			},
		})
	);
};
