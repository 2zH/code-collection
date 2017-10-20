function pascalsTriangle(n, result) {
  if (!result) {
    return pascalsTriangle(n - 1, {
      total: [1],
      lastList: [1]
    })
  }

  if (n <= 0) {
    return result.total
  }

  if (result.lastList.length < 2) {
    return pascalsTriangle(n - 1, {
      total: [1, 1, 1],
      lastList: [1, 1]
    })
  }

  const nextList = result.lastList
    .reduce(
      (r, i) => ({
        last: i,
        arr: r.arr.concat(r.last + i)
      }), {last: 0, arr: []})
    .arr
    .concat(1)
  return pascalsTriangle(n - 1, {
    total: result.total.concat(nextList),
    lastList: nextList
  })  
}