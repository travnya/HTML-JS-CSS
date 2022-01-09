import react, { Component } from "react"
import './search-bar.css'

export default class SearchBar extends Component {

    state = {
        searchInput: ''
    }

    searchChange = (event) => {
        const searchInput = event.target.value
        this.setState({
            searchInput
        })
        this.props.searchChange(searchInput)
    }

    render () {
        return (
            <form className="search-form">
                <input className="search-input" 
                       onChange={this.searchChange}
                       placeholder = "Поиск"
                       value={this.state.searchInput} />
            </form>
        )
    }
}
