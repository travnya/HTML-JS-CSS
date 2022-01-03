import React, { Component } from 'react'
import HeaderElements from '../header-elements/HeaderElements'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header-wrapper'>
                <HeaderElements/>
            </div>
        )
    }
}
