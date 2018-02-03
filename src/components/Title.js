import React from 'react';
import style from './Title.css';

class Title extends React.Component {
	render() {
		return (
			<div>
				<h1 className={style.TodoTitle}>APLIKACJA TODO</h1>
				<h3 className={style.TodoTitle2}>Ilość zadań dodanych do listy to: </h3>
				<h1 className={style.counter}>{this.props.counterFromParent}</h1>
			</div>
			);
	}
}
export default Title;