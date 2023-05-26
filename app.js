const _ = require('lodash')

const array = [1,[2],[3]]
const newArray = _.flattenDeep(array)

console.log(newArray)