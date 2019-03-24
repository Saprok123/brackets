module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = []
  let open = []
  let close = []
  bracketsConfig.forEach(x => {
    open.push(x[0])
    close.push(x[1])
  })
  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i])) {
      if (close.includes(str[i]) && arr.includes(str[i]))
        arr.pop()
      else
        arr.push(str[i])
    }
    
  }
  return arr.length == 0
}