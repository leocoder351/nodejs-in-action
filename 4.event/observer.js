// 被观察者
class Subject {
  constructor () {
    this.observers = [];
  }

  on (observer) {
    this.observers.push(observer);
  }

  off (observer) {
    this.observers = this.observers.filter(ob => ob !== observer);
  }

  notify (data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

// 观察者
class Observer {
  constructor (name) {
    this.name = name;
  }

  update (data) {
    console.log(`${this.name} 收到数据 ${data}`);
  }
}

// 使用
let subject = new Subject();
let ob1 = new Observer('小李');
let ob2 = new Observer('小王');

subject.on(ob1);
subject.on(ob2);

subject.notify('苹果');
