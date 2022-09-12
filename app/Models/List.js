import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";
import { TasksController } from "../Controllers/TasksController.js";
import { Task } from "../Models/Task.js";
import { tasksService } from "../Services/TasksService.js";
export class List {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId()
    this.hcolor = data.hcolor;
  }


  get Template() {
    return /*html*/ `
        <div class="card col-3 text-light text-center fs-4 m-2 p-2" style="background-color:${this.hcolor}">${this.title}
          <p>${this.Tasks.length} to go!</p>
          <div class="card-body bg-light border-none text-start">
          <ul class="text-dark">
        <div id="list-${this.id}">${this.TaskTemplates}</div>
          </ul>
          <form onsubmit="app.tasksController.createTask('${this.id}')">
          <input class="fs-6 input-group-text mt-2 bg-secondary" type="text" name="name" minlength="3" maxlength="30" required>
                <button class="fs-6 btn btn-primary mt-2" type="submit">Add Task</button>
                ${this.Tasks.length}
                </form>
                <button class="btn btn-danger fs-6 mt-2" onclick="app.listsController.removeList('${this.id}')">Delete List</button>
          </div>
        </div>
  `
  }
  get Tasks() {
    const listId = this.id
    let tasks = appState.tasks.filter(task => task.listId == listId)
    return tasks
  }

  get TaskTemplates() {
    let Template = ''
    this.Tasks.forEach(task => Template += task.Template)
    return Template
  }


}





