import { appState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";
import { TasksController } from "./TasksController.js";

TasksController

function _drawLists() {
  let template = ''
  appState.lists.forEach(l => {
    template += l.Template
  })
  setHTML('lists', template)

  appState.lists.forEach(l => {
    const tasksHtml = l.TaskTemplates
    setHTML('list-' +  l.id, tasksHtml)
  })
}


export class ListsController {
  constructor() {
    // NOTE this is what draws shit to the screen ! ! ! REMEMBER THIS ! ! !
    appState.on('lists', _drawLists)
    appState.on('tasks', _drawLists)
    _drawLists()
  }
  createList() {
    try {
      // @ts-ignore
      // console.log("creating a list in my list controler")
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      console.log(formData);
      listsService.createList(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[CREATE_LIST]', error)
    }
  }
  removeList(id) {
    try {
      listsService.removeList(id)
      window.confirm('you sure?')
    } catch (error) {
      console.error("deleting list from my controller", error)
    }
  }
}