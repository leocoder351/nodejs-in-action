class Event {
  constructor() {
    this.callbacks = {};
  }

  on(type, callback) {
    if (!this.callbacks[type]) {
      this.callbacks[type] = [];
    }

    this.callbacks[type].push(callback);
  }

  off(type, callback) {
    if (this.callbacks[type]) {
      this.callbacks[type] = this.callbacks[type].filter(
        func => func !== callback
      );
    }
  }

  emit(type, data) {
    if (this.callbacks[type]) {
      this.callbacks[type].forEach(func => func(data));
    }
  }
}

let event = new Event();

event.on("newlesson", data => {
  console.log(`小明收到数据：${data}`);
});

event.on("newlesson", data => {
  console.log(`小王收到数据：${data}`);
});

event.emit("newlesson", "数学");
