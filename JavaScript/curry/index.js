const curry = (f) => {
  return (...args) => {
    const _args = []
    const exec = (...nextArgs) => {
      _args.push(...nextArgs)
      if (_args.length >= f.length) {
        return f(..._args)
      }
      return exec
    }
    return exec(...args)
  }
}

export default curry