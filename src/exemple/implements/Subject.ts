import IObserver from "../interfaces/Observer.interface";
import ISubject from "../interfaces/Subject.interface";

export default class Subject implements ISubject{
  private observers:Array<IObserver>  = []

  subscribe(observer: IObserver): void {
    this.observers.push(observer)
  }
  unsubscribe(observer: IObserver): void {
    this.observers = this.observers.filter(ob => ob !== observer)
  }
  unsubscribeAll(): void {
    this.observers = []
  }
  notify(observer: IObserver): void {
    observer.update()
  }
  notifyAll(): void {
    this.observers.forEach(observer => this.notify(observer))
  }

}