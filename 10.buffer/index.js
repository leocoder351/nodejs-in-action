const buffer1 = Buffer.from("geek");
const buffer2 = Buffer.from([1, 2, 3]);

const buffer3 = Buffer.alloc(20);

console.log(buffer1);
console.log(buffer2);
console.log(buffer3);

// BE：大端 LE：小端
buffer3.writeInt16LE(513, 1);
buffer3.writeInt16BE(513, 1);

console.log(buffer3);

// json 和 buffer 互相转换
const obj = {
  id: 1,
  name: "Node.js",
  price: 80.4
};

const buffer5 = Buffer.from(JSON.stringify(obj));
console.log(111);
console.log(buffer5);
console.log(Buffer.from(buffer5).toString());
