 longestPalindrome=function(s){
  s = s.split('')
  
  let brothers = []
  let beside = []
  
  const findBrother = (v) => {
    return s.map((i, k) => [i, k])
      .filter(([i]) => i === v)
  }
  
  for (const v of s) {
    if (beside.includes(v)) {
      continue
    }
    const brother = findBrother(v)
    
    if (brother.length > 1) {
      beside.push(v)
      brothers.push({
        value: v,
        index: brother.map(([i, k]) => k),
        total: brother.map(([i, k]) => k).reduce((a, b) => a + b)
      })
    }
  }
  const hasReverser = (v) => {
    const brother = brothers.filter(({ total }) => total === v)
    const index = brother.map(({ index }) => index)

    const max = Math.max(...index[0]) - Math.max(...index[1])
    const min = Math.min(...index[0]) - Math.min(...index[1])
    console.log(max, min)

    return Math.abs(max) <= 1 && Math.abs(min) <= 1 && max === (min * -1)
      ? 4 : 2;
  }
  console.log(brothers)
  console.log(hasReverser(brothers[0].total))
}

const result = longestPalindrome('acca')
console.log(result)