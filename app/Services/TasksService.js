import { appState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { saveState } from "../Utils/Store.js";
class TasksService {
  toggleCheckboxToggle(id) {
    let task = appState.tasks.find(task => task.id == id)
    if (!task) {
      throw new Error('Bad ID')
    }
    // NOTE bad way
    // if (task.shellfishAllergy == true) {
    //   task.shellfishAllergy = false
    // }
    // else {
    //   task.shellfishAllergy = true
    // }
    // NOTE toggle bool
    task.checked = !task.checked
    // NOTE trigger event listener to redraw
    // appState.orders = appState.orders
    appState.emit('tasks')
    saveState('tasks', appState.tasks)
  }
  createTask(formData) {
    console.log("task create attempt (service)")
    let task = new Task(formData)
    appState.tasks = [task, ...appState.tasks]
    console.log(appState.tasks);
    // FIXME Enable this after testing
    saveState('tasks', appState.tasks)
    const checkbox = document.getElementById('toggle-me');
  }

  removeTask(id) {
    console.log("task delete attempt (service)")
    let blister = appState.tasks.filter(task => task.id !== id)
    appState.tasks = blister
    saveState('tasks', appState.tasks)
    console.log
  }
}



export const tasksService = new TasksService()