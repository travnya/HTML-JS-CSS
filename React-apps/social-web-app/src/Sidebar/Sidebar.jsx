import React, { Component } from 'react'
import './Sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar-wrapper'>
                <nav className='nav-menu'>
                    <a href='/feed'><button type="button" className='btn btn-outline-light btn-1'>Новости</button></a>
                    <a href='/profile'><button type="button" className='btn btn-outline-light btn-2'>Профиль</button></a>
                    <a href='/friends'><button type="button" className='btn btn-outline-light btn-6'>Друзья</button></a>
                    <a href='/messages'><button type="button" className='btn btn-outline-light btn-5'>Сообщения</button></a>
                    <a href='/music'><button type="button" className='btn btn-outline-light btn-3'>Музыка</button></a>
                    <a href='/videos'><button type="button" className='btn btn-outline-light btn-4'>Видеозаписи</button></a>
                </nav> 
            </div>
        )
    }
}
