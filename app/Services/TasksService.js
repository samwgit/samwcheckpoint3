import { appState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { saveState } from "../Utils/Store.js";

class TasksService {
  createTask(formData) {
    console.log("task create attempt (service)")
    let task = new Task(formData)
    appState.tasks = [task, ...appState.tasks]
    console.log(appState.tasks);
    // FIXME Enable this after testing
    saveState('tasks', appState.tasks)
  }

  removeTask(id) {
    console.log("task delete attempt (service)")
    let blister = appState.tasks.filter(task => task.id !== id)
    appState.tasks = blister
    saveState('tasks', appState.tasks)
  }
}

export const tasksService = new TasksService()