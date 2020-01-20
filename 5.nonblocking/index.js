const glob = require("glob");

// blocking
// var result = null;
// console.time("glob");
// result = glob.sync(__dirname + "/**/*");
// console.timeEnd("glob");
// console.log(result);

// nonblocking
console.time("glob");
glob(__dirname + "/**/*", (err, result) => {
  if (err) return;
  console.log(result);
});
console.timeEnd("glob");
