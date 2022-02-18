import Observer from "./exemple/implements/Observer"
import Subject from "./exemple/implements/Subject"

const observer1 = new Observer(1)
const observer2 = new Observer(2)
const observer3 = new Observer(3)

const subject = new Subject()

subject.subscribe(observer1)
subject.subscribe(observer2)
subject.subscribe(observer3)

subject.notifyAll()

subject.unsubscribe(observer1)

subject.notifyAll()