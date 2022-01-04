import React, { Component } from 'react'
import logo from '../resources/amoeba.png'
import './HeaderElements.css'

export default class HeaderElements extends Component {
    render() {
        return (
            <div className='sec-wrapper'>
                <div className='logo'>
                    <a href='/profile'> <img className='logoimg' src={logo}/> </a>
                </div>

                <div className='logo-name'>
                    <h1>Amöba</h1>
                </div>

                <div className='menu'>

                </div>
            </div>
        )
    }
}
