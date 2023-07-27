import { action, makeAutoObservable, observable } from "mobx";

class CreateStore {
  secondsPassed = 0;
  data = [];
  editable_data = null;
  id = null;

  constructor() {
    makeAutoObservable(this,{
        data:observable,
        EditData:action,
        addData:action,
        deleteData:action,
        updateData:action
    });
  }

  increase() {
    this.secondsPassed += 1;
  }

  addData(data) {
    this.data.push(data);
  }

  EditData(id) {
    this.editable_data = this.data[id - 1];
    this.id = id;
  }

  deleteData(id) {
    this.data.splice(id, 1);
  }

  updateData(id, object) {
    this.data.splice(id - 1, 1, object);
    this.id = "";
  }

  reset() {
    this.secondsPassed = 0;
  }
}

export const createStore = new CreateStore();
