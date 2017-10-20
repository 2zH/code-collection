function solution(input, markers){
  const arr = input.split('\n')
  return arr.map((str) => markers.reduce(
    (result, i) => (result.split(` ${i}`)[0]), str)
  ).join('\n')
}