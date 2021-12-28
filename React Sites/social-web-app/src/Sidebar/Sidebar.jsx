import React, { Component } from 'react'
import './Sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar-wrapper'>
                <nav className='nav-menu'>
                    <button type="button" className='btn btn-outline-light btn-1'><a href='/feed'>Новости</a></button>
                    <button type="button" className='btn btn-outline-light btn-2'><a href='/profile'>Профиль</a></button>
                    <button type="button" className='btn btn-outline-light btn-3'><a href='/music'>Музыка</a></button>
                    <button type="button" className='btn btn-outline-light btn-4'><a href='/videos'>Видеозаписи</a></button>
                    <button type="button" className='btn btn-outline-light btn-5'><a href='/messages'>Сообщения</a></button>
                    <button type="button" className='btn btn-outline-light btn-6'><a href='/friends'>Друзья</a></button>
                </nav> 
            </div>
        )
    }
}
