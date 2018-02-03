import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: ['pierwsze', 'drugie','trzecie']
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        const counter = this.state.data.length;
        return (
            <div className={style.TodoApp}>
                <Title counterFromParent={counter}/>
            </div>
        );
    }
}



export default App;