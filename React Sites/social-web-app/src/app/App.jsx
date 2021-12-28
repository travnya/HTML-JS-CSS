import React, { Component } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import './App.css'
import Helpbar from '../Helpbar/Helpbar'

export default class App extends Component {
    render() {
        return (
            <div className='main-wrapper'>
                <Header />
                <Sidebar />
                <Content />
                <Helpbar/>
            </div>
        )
    }
}
