import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleAdd = (e: React.SyntheticEvent) => {
		e.preventDefault();

		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
			setTodo("");
		}
	};

	return (
		<div className="App">
			<h1 className="header">Taskmaker</h1>

			<InputField
				todo={todo}
				setTodo={setTodo}
				handleAdd={handleAdd}
			></InputField>
      {/* <TodoList></TodoList> */}
		</div>
	);
};

export default App;
