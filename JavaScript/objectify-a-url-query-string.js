function convertQueryToMap(query) {
  return query
    .split('&')
    .reduce((result, str) => {
      const arr = str.split('=')
      const keys = arr[0].split('.')
      const value = decodeURI(arr[1])
      const deep = keys.length
      keys.reduce((res, key, index) => {
        if (index === deep - 1) {
          res[key] = value
        }
        if (!res[key]) {
          res[key] = {}
        }
        return res[key]
        }, result)
      return result
    }, {})
}