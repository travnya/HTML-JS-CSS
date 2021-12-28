import React, { Component } from 'react'
import './Helpbar.css'

export default class Helpbar extends Component {

    showhelps() {
        
    }
    render() {
        return (
            <div className='helpbar-wrapper' onMouseOver={this.showhelps}>
                
            </div>
        )
    }
}
