import react from "react"
import TodoListItem from "../todo-list-items/todo-list-items"
import './todo-list.css'

const TodoList = ({ todos, onDeleted, isDone, isImportant }) => {
    const elements = todos.map((item) => {
        const {label, important, done} = item
        return (
            <li key={item.id} className='list-group-item'>
                <TodoListItem 
                label = {label} 
                important = {important} 
                done = {done}
                onDeleted={() => onDeleted(item.id)}
                isImportant={() => isImportant(item.id)}
                isDone={() => isDone(item.id)}/>
            </li>
        )
    })

    return (
        <ul className='list-group todo-list'>
            { elements }
        </ul>
    )
}

export default TodoList