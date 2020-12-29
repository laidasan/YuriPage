
/**
 * devHost
 * @author ocean
 * @function
 * @description
 */
const devHost = process.env.VUE_APP_DEV_HOST || ''

const mockPort = process.env.VUE_APP_MOCK_PORT || 9528

const apiUseMock = process.env.VUE_APP_API_USE_MOCK

const withProxyConfig = target => pathRewrite => ({
  target,
  pathRewrite,
  ws: true
})

const useVipMockProxyConfig = withProxyConfig(`${devHost}:${mockPort}`)({})
const useVipLocalProxyConfig = withProxyConfig(devHost)({ '^/mock/vip': '/vip' })

const useWebapiMockProxyConfig = withProxyConfig(`${devHost}:${mockPort}`)({})
const useWebapiLocalProxyConfig = withProxyConfig('https://auth.pro.104-dev.com.tw')({ '^/mock/vipapi/webapi': '/vipapi/webapi' })

/**
   * proxy
   * @author ocean
   * @module
   * @description
   */

module.exports = {
  '^/mock/vip': {
    changeOrigin: true,
    ...(apiUseMock ? useVipMockProxyConfig : useVipLocalProxyConfig)
  },
  '^/mock/vipapi/webapi': {
    changeOrigin: true,
    ...(apiUseMock ? useWebapiMockProxyConfig : useWebapiLocalProxyConfig)
  }
}
