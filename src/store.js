import { observable } from 'mobx'

class CounterStore {
  @observable count = 0

  increment () {
    this.count ++
  }

  decrement () {
    this.count --
  }
}

export default new CounterStore()
