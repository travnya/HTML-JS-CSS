import react, { Component } from "react";
import './item-status-filter.css'

export default class ItemStatusFilter extends Component {
        
    buttons = [
        { name: 'all', label: 'Все'},
        { name: 'active', label: 'Активные'},
        { name: 'done', label: 'Завершенные'}
    ]

    render() {

        const {filter, filterChange} = this.props

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name
            const clas = isActive ? 'btn-info' : 'btn-outline-secondary'

            return (
                <button 
                type="button" 
                className={`btn ${clas}`}
                key={name}
                onClick={() => filterChange(name)}>
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )    
    }
}
