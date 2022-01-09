import react, { Component } from "react"
import AppHeader from "../app-header/app-header"
import ItemStatusFilter from "../item-status-filter/item-status-filter"
import SearchBar from "../search-bar/search-bar"
import TodoList from "../todo-list/todo-list"
import AddBar from "../add-bar/add-bar"
import './app.css'

export default class App extends Component {

  maxId = 1

  state = {
    todoData: [
      this.createTodoItem('Выпить кофе'),
      this.createTodoItem('Сделать замечательное приложение'),
      this.createTodoItem('Покушать') 
    ],
    searchInput: '',
    btnFilter: 'active'
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState( ({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx+1) 
      ]
      return {
        todoData: newArray
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState( ({ todoData }) => {
      const newArray = [...todoData, newItem]
      return {
        todoData: newArray
      }
    })
  }

  togglePropery(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx]
    const newItem = {...oldItem, [propName]: !oldItem[propName]}

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  isImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.togglePropery(todoData, id, 'important')
      }
    })
  }

  isDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.togglePropery(todoData, id, 'done')    
      }
    })
  }

  search(items, searchInput) {
    if (searchInput.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
    })
  }

  searchChange = (searchInput) => {
    this.setState ({ searchInput })
  }
  
  filterChange = (filter) => {
    this.setState ({ filter })
  }

  filter (items, filter) {
    switch(filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)
      default:
        return items
    }
  }

  render() {

    const { todoData, searchInput, filter } = this.state
    const visibleItems = this.filter(this.search(todoData, searchInput), filter)
    const doneCount = todoData.filter((el) => el.done).length
    const todoCount = todoData.length - doneCount
    return (
      <div className="main-window">
        <AppHeader toDo = { todoCount } done = { doneCount }/>
        <SearchBar searchChange={ this.searchChange }/>
        <ItemStatusFilter 
          filter={filter}
          filterChange={this.filterChange}/>
        <TodoList 
        todos={visibleItems}
        onDeleted={ this.deleteItem } 
        isImportant={this.isImportant}
        isDone={this.isDone}/>
        <AddBar
        addItem={this.addItem}/>
    </div>
    )
  }
}