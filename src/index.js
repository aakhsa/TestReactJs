import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormTodo from "./components/todo/form";
import ListTodo from "./components/todo/list";
import ItemTodo from "./components/todo/item";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  submitTodo(val) {
    const { todos } = this.state;
    const newItem = todos.concat([val]);
    this.setState({ todos: newItem });
  }

  deleteTodo(val) {
    const indexItem = this.state.todos.indexOf(val);
    this.state.todos.splice(indexItem, 1);
    // Update state
    this.setState({ todos: this.state.todos });
  }

  deleteAllTodo() {
    this.setState({ todos: [] });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <h1>Todo App</h1>
        <FormTodo submitTodo={val => this.submitTodo(val)} />
        <ListTodo title={`List of my todos (${todos.length})`}>
          <ul>
            {todos.map((todo, index) => (
              <ItemTodo
                todo={todo}
                key={index}
                deleteTodo={item => this.deleteTodo(item)}
              />
            ))}
            {todos.length > 0 && (
              <button className="remove" onClick={() => this.deleteAllTodo()}>
                Clear all
              </button>
            )}
            {todos.length < 1 && <p style={{ color: "grey" }}> No Todo</p>}
          </ul>
        </ListTodo>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
