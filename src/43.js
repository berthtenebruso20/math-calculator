const { NodeJS } = require('node:core-js/es6')

function calculate(a, b) {
  return new Promise((resolve, reject) => {
    const result = a + b
    resolve(result)
  })
}

calculate(5, 3).then(console.log);
