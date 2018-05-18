import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    hendleClick() {
        alert("Находится в разработке....");
        setTimeout(()=>{
            alert("Ожидайте")
        }, 1500);
    }
  
    render() {
        return (
        <div className="profile">
            <img src={require("./images/otter1.jpg")} alt="otter" />
            <h1>Журнал событий</h1>
            <div className="content">             
                <ul>
                    <li>Кто Мы?<a href="#">-Команда Разработчиков</a></li>                    
                    <li>Почему Мы? -Ломаем стереотипы</li>
                    <li> <b>Наши проекты и внедрения</b> </li>
                    <li>+7(747)-489-12-04</li>
                    <button onClick={this.hendleClick.bind(this)}>Получить бесплатную консультацию</button>
                </ul>
            </div>
        </div>
        )
    }
}