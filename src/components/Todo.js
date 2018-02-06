import TodoForm from './TodoForm';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        {this.props.data.map(item => (
          <span>
            {item.text}
            <button className="removeButton" onClick={()=> this.props.remove(item.id)}>Delete</button>
          </span>
        ))}
      </div>
    );
  }
}



export default Todo;