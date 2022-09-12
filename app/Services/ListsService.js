import { appState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/Store.js";

class ListsService {
  createList(formData) {
    let list = new List(formData)
    appState.lists = [list, ...appState.lists]
    console.log(appState.lists);
    // FIXME Enable this after testing
    saveState('lists', appState.lists)
  }

  removeList(id) {
    console.log("list delete attempt (service)")
    let blister = appState.lists.filter(list => list.id !== id)
    appState.lists = blister
    saveState('lists', appState.lists)
  }


}


export const listsService = new ListsService()