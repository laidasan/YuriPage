export const defineEnum = (object) => {
  try {
    const result = {}
    Object.keys(object).forEach(key => {
      Object.defineProperty(result, key, {
        value: object[key],
        writable: false,
        enumerable: false,
        configurable: false
      })
    })
    return Object.freeze(result)
  } catch (err) {
    console.error(err)
    return object
  }
}

export const defineInstance = defineEnum
