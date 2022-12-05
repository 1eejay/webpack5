const isTypeOf = (item, type) => {
  const _toString = Object.prototype.toString
  const map = {
    string: 'String',
    number: 'Number',
    boolean: 'Boolean',
    array: 'Array',
    object: 'Object',
    null: 'Null',
    function: 'Function',
    undefined: 'Undefined',
    symbol: 'Symbol',
  }

  const originalType = _toString.call(item).slice(8, -1)

  return map[type] && map[type] === originalType
}

export default isTypeOf
