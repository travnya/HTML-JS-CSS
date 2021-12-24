import react, { Component } from "react";
import './todo-list-items.css'

export default class TodoListItem extends Component {
    
    render() {

        const { label, onDeleted, isImportant, isDone, important, done } = this.props
        
        let classNames = 'todo-list-wrapper'
        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }
    
        return (
            <span className={ classNames }>
                <span 
                className='todo-list-item-label' 
                onClick={ isDone }>
                    { label }
                </span> 
                
                <button 
                    type="button" 
                    title="Удалить" 
                    className="btn btn-outline-danger button"
                    onClick={ onDeleted }>
                    <i className="bi bi-trash" />
                </button>

                <button 
                type="button" 
                title="Сделать важным" 
                className="btn btn-outline-success button"
                onClick={ isImportant }>
                    <i className="bi bi-exclamation-octagon" />
                </button>
        
            </span>
        )
    }
}
