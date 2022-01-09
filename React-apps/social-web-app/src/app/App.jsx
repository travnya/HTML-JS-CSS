import React, { Component } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Profile from '../Profile/Profile'
import './App.css'


export default class App extends Component {
    render() {
        return (
            <div className='main-wrapper'>
                <Header className='header-wrapper' />
                <Sidebar />
                <Profile />
            </div>
        )
    }
}
