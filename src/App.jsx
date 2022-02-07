import Search from './components/header/Search';
import ToDoList from './components/list/ToDoList';
import ToDoFooter from './components/footer/ToDoFooter';
import { Card } from 'antd';
import './App.css'
import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: []
		}
	}

	addToDo = (data) => {
		const todos = this.state.todos
		this.setState({ todos: [data, ...todos] })
	}

	updateToDoDone = (id, done) => {
		let newTodo = this.state.todos
		let index = newTodo.findIndex(value => value.id === id)
		newTodo[index].done = done
		this.setState({ todos: newTodo })
	}

	deleteToDo = (id) => {
		let newTodo = this.state.todos.filter(value => {
			return value.id !== id
		})
		this.setState({ todos: newTodo })
	}

	deleteAll = () => {
		let newTodo = this.state.todos.filter(value => {
			return value.done === false
		})
		this.setState({ todos: newTodo })
	}

	changeAll = (flag) => {
		const newData = this.state.todos.map(value => {
			value.done = flag
			return value
		})
		this.setState({ todos: newData })
	}

	render() {
		return (
			<div className='todoComp'>
				<Card className='todoCard' style={{ margin: '0 auto' }}>
					<Search addToDo={this.addToDo} />
					<ToDoList todo={this.state.todos} updateToDoDone={this.updateToDoDone} deleteToDo={this.deleteToDo} />
					<ToDoFooter todo={this.state.todos} changeAll={this.changeAll} deleteAll={this.deleteAll} />
				</Card>
			</div>
		)
	}
}

export default App;
