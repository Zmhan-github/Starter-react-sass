import React, { Component } from 'react';
import MarkdownData from '../data/post.md'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
            noda: 1
        }
    }

    hendleClick() {
        this.setState({ modalShow: true, noda: 2 })  
    }
  
    closeModal() {
        this.setState({ modalShow: false })      
    }
    render() {
        return (
        <div className="profile">
            <img src={require("../images/otter1.jpg")} alt="otter" />
            <h1>{ this.props.heading }</h1>
            <div className="content">             
                <p>Кто Мы? -Команда Разработчиков</p>
                <p>Почему Мы? -Ломаем стереотипы</p>
                <p> Наши проекты и внедрения</p>           
                +7(747)-489-12-04
                <button onClick={this.hendleClick.bind(this)}>{ this.props.content}</button>
            </div>
            { this.state.modalShow && 
                <div className="backdrop" onClick={this.closeModal.bind(this)}>
                    <div className="modal">
                        <h2>
                        Создание сайтов
                        </h2>
                        <div className="content-pre" dangerouslySetInnerHTML={{ __html: MarkdownData}} />
                    </div> 
                </div> 
            }
          
        </div>
        )
    }
}