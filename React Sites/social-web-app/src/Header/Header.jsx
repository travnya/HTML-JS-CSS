import React, { Component } from 'react'
import HeadEl from '../header-elements/Head-el'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header-wrapper'>
                <HeadEl/>
            </div>
        )
    }
}
