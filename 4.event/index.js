const geektime = require('./lib');

geektime.addListener('newlesson', (res) => {
  console.log('yeah', res);
})
