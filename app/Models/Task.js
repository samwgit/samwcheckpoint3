import { appState } from "../AppState.js";
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
    <li><input type="checkbox" value="second_checkbox" onclick="app.tasksController.toggleCheckboxToggle('${this.id}')" ${this.checked ? 'checked' : ''} > <label for="cbox2">${this.name}</label><span><i onclick="app.tasksController.removeTask('${this.id}')" class="mdi mdi-close text-danger selectable rounded"  title="Remove Item"></i></span></li>
    </li >
      `
  }


  get Tasks() {
    let tasks = appState.tasks.filter(task => this.listId == this.id)
    return tasks
  }

  get tasksCompleted() {
    let completed = 0
    this.Tasks.forEach(task => completed -= 2)
    return completed
  }
}




  // TODO Lists have a toggle complete/incomplete checkbox that syncs to local storage