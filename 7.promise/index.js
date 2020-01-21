(function() {
  var promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject(new Error("haha"));
    }, 300);
  })
    .then(res => {
      // console.log(res);
    })
    .catch(err => {
      console.log(err);
    });

  console.log(promise);

  setTimeout(() => {
    console.log(promise);
  }, 800);
})();
