import React, { Component } from 'react'
import Posts from './Posts/Posts'
import './Profile.css'

export default class Profile extends Component {
    render() {
        return (
            <div className='main-profile-wrapper'>
                <div className='content'>
                    <img src="https://sun9-28.userapi.com/impg/1y_m2YWC85fh4zdlyq60cpztFfpcFPogzfdKnw/DIxREY8BCMM.jpg?size=810x1080&quality=96&sign=a7193cb8b0f274a7e9ad2ba08085db8c&type=album" />
                    <div className='information'>
                        <div><b>Имя:</b> Владося</div>
                        <div><b>Пол:</b> Мужской</div>
                        <div><b>Возраст:</b> 19 лет</div>
                    </div>
                </div>
                <Posts />
            </div>
        )
    }
}
