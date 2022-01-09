import react, { Component } from "react";
import './Posts.css'

export default class Posts extends Component {
    render() {
        return (
            <div className="posts-wrapper">
                <form className="d-flex">
                    <input className="form-control me-sm-2" type="text" placeholder="Что у вас нового?" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Отправить</button>
                </form>
                <div className="post-items">
                    <ul>
                        <li className="post-item">Сегодня я очень хорошо позавтракал</li>
                        <li className="post-item">А ещё встретил любовь всей своей жизни, но завтрак был куда лучше</li>
                    </ul>
                </div>
            </div>
        )
    }
}