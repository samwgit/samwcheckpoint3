import { generateId } from "../Utils/generateId.js";
import { List } from "./List.js";

export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.listId = data.listId
    this.name = data.name
    this.checked = data.checked || false
  }

  get Template() {
    return /*html*/ `
    <li class="d-flex justify-content-between list-group-item text-dark">
    <li><input type="checkbox" value="second_checkbox" class="box"> <label for="cbox2">${this.name}</label><span><i onclick="app.tasksController.removeTask('${this.id}')" class="mdi mdi-close text-danger selectable rounded"  title="Remove Item"></i></span></li >
    </li >
      `
  }
}




  // TODO Lists have a toggle complete/incomplete checkbox that syncs to local storage