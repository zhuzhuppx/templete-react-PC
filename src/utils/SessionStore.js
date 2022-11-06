class SessionStore {

  // 设置
  set(key, value) {
    if (typeof value == 'object') {
      value = JSON.stringify(value)
    }
    sessionStorage.setItem(key, value)
  }

  get(key) {
    // 默认值设置

    let value = sessionStorage.getItem(key) || ''
    if (value.includes('[') || value.includes('{')) {
      // 它是一个对象
      value = JSON.parse(value)
    }
    return value
  }

  remove(key) {
    sessionStorage.removeItem(key)
  }

  has(key) {
    let value = sessionStorage.getItem(key) || ''
    return value === '' ? false : true
  }
}

export default new SessionStore();