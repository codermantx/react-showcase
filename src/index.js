import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import store from '../store';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {

  state = {
    task: '',
    id: 0,
    todos: store.getState()
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    store.dispatch({ type: 'ADD_TODO', id: this.state.id, task: this.state.task, completed: false })
    this.setState({ task: '' });
  }

  handleChange = (evt) => {
    this.setState({ task: evt.target.value });
  }

  render() {
    return (<div style={styles}>
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange} value={this.state.task} />
      </form>
      <div>
        {this.state.todos.map(s => <p>{s.task}</p>)}
      </div>
    </div>)
  }
}
;

render(<App />, document.getElementById('root'));
