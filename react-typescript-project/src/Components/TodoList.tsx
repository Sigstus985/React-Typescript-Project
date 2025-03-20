import React from "react";
import "./styles.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	completedTodos: Todo[];
	setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
	todos,
	setTodos,
	completedTodos,
	setCompletedTodos,
}: Props) => {
	return (
		<div className="container">
			<div className="todos">
				<span className="todos__heading">Active tasks</span>
				{todos.map((todo) => (
					<SingleTodo
						todo={todo}
						todos={todos}
						key={todo.id}
						setTodos={setTodos}
					/>
				))}
			</div>
		</div>
	);
};

export default TodoList;
