import react, { Component } from "react"
import './add-bar.css'

export default class AddBar extends Component {

    state = {
        label: ''
    }

    onLabelChange = (event) => {
        this.setState ({
            label: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addItem(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {
        return (
        <form className="add-form"
              onSubmit={this.onSubmit}>

            <input type="text" 
                    className="add-input" 
                    onChange={this.onLabelChange} 
                    placeholder="Напишите что нужно добавить"
                    value={this.state.label} />
            
            <button type="button" 
                    className="btn btn-outline-dark add-btn"
                    onClick={this.onSubmit}
                    title="Добавить">

                <i className="bi bi-plus-square" />

            </button>
        </form>
        )
    }
}