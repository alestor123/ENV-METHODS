var {set,get, del} = require('./App');
set({PORT:3000})
console.log(get('PORT'))
del('PORT')
console.log(get('PORT'))
