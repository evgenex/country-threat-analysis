import { observable } from "mobx";

export default class Store {
  id = Math.random();
  @observable name = 'John';
  @observable title;
  @observable finished = false;

  constructor(title) {
    this.title = title;
  }
}