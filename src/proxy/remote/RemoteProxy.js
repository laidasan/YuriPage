import { ajaxAdapter } from '../../adapter/remote'
import { defineEnum } from '../../define'

/**
 * @author samraua
 * @public
 * @package proxy.remote
 * @class
 * @classdesc RemoteProxy 是所有 遠端代理的基底類別。
 *
 */
@ajaxAdapter({})
class RemoteProxy {
    static METHOD = defineEnum({
      GET: 'get', // 常用來代表查詢
      POST: 'post', // 常用來代表新增
      DELETE: 'delete', // 常用來代表刪除
      PUT: 'put', // 常用來代表覆蓋
      PATCH: 'patch', // 常用來代表局部更新
      HEAD: 'head',
      OPTIONS: 'options',
      TRACE: 'trace',
      CONNECT: 'connect'
    });

  // 資料送出型態
  static CONTENT_TYPE = defineEnum({
    FORM: 'application/x-www-form-urlencoded;charset=utf-8',
    JSON: 'application/json',
    XML: 'text/xml',
    FILE: 'multipart/form-data'
  })

  // 資料回傳型態，axios 底層預設是 json
  static RESPONSE_TYPE = defineEnum({
    ARRAY_BUFFER: 'arraybuffer',
    DOCUMENT: 'document',
    JSON: 'json',
    TEXT: 'text',
    STREAM: 'stream'
  })

  constructor (host = '') {
    this.host = host || process.env.VUE_APP_API_PREFIXES
  }

  request = (method, contentType, { url, qs, data }, config) => {
    RemoteProxy.fetch(method, contentType, {
      url: `${this.host}${url}`,
      qs,
      data,
      config: config || {}
    })
  }

  get = (contentType, { url, qs, data }, config) => {
    RemoteProxy.fetch(
      RemoteProxy.METHOD.GET, contentType, {
        url: `${this.host}${url}`,
        qs,
        data,
        config: config || {}
      }
    )
  }

  post = (contentType, { url, qs, data }, config) => {
    RemoteProxy.fetch(
      RemoteProxy.METHOD.POST, contentType, {
        url: `${this.host}${url}`,
        qs,
        data,
        config: config || {}
      }
    )
  }

  delete = (contentType, { url, qs, data }, config) => {
    RemoteProxy.fetch(
      RemoteProxy.METHOD.DELETE, contentType, {
        url: `${this.host}${url}`,
        qs,
        data,
        config: config || {}
      }
    )
  }

  put = (contentType, { url, qs, data }, config) => {
    RemoteProxy.fetch(
      RemoteProxy.METHOD.PUT, contentType, {
        url: `${this.host}${url}`,
        qs,
        data,
        config: config || {}
      }
    )
  }
}

export default RemoteProxy
