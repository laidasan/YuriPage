import RemoteProxy from '../RemoteProxy.js'

/**
 * @author samura
 * @package proxy.remote.example
 * @desc 一個例子使用 RemoteProxy
 */
class ExampleProxy extends RemoteProxy {
  constructor (host = '') {
    super(host)
  }

  exampleGetAjax = (id) => (this.get(
    RemoteProxy.CONTENT_TYPE.JSON,
    {
      url: 'example/get/method',
      qs: { id }
    }
  ))
}

let instance = null

export const getProxy = () => {
  if (instance == null) {
    instance = new ExampleProxy()
  }

  return instance
}

export default getProxy
