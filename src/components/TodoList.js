import React from 'react';
import style from './TodoList.css';

export const TodoList = props => 
<div>{props.listFromParent.map((item, value) => <li className={style.TodoList} key={value} onClick={() => props.remove(item.id)}>{item.text}</li>)}
</div>

