import React from 'react';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheet: '',
    }
   
  }
    addSheet(event) {
      event.preventDefault();
      const data = this.state.sheet;
      this.props.add(this.state.sheet);
    }
    onChange(event) {
      this.setState({sheet: event.target.value});
    }

  render() {
    return (
      <div>
          <form  onSubmit={this.addSheet.bind(this)}>
          <input type="text" value={this.state.sheet} onChange={(event) => this.onChange(event)}/>
          <button >Add</button>
        </form>
      </div>
    );
  }
}


export default TodoForm;