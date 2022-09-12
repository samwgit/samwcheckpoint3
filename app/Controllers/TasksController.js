import { appState } from "../AppState.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"
import { tasksService } from "../Services/TasksService.js";
import { Task } from "../Models/Task.js";
import { List } from "../Models/List.js";
import { ListsController } from "./ListsController.js";

export class TasksController {
  constructor() {
  }
  createTask(listId) {
    try {
      // @ts-ignore
      // console.log("creating a list in my list controler")
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      console.log(formData);
      // @ts-ignore
      formData.listId = listId
      tasksService.createTask(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[CREATE_TASK]', error)
    }
  }
  removeTask(id) {
    try {
      tasksService.removeTask(id)
      window.confirm('you sure?')
    } catch (error) {
      console.error("deleting task from my controller", error)
    }
  }
}

