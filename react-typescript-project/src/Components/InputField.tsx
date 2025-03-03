import React, { useRef } from "react";

import "./styles.css";

type Props = {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.SyntheticEvent) => void;
};

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			className="input"
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}
		>
			<input
				ref={inputRef}
				type="input"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder="Create a task"
				className="input__box"
			/>
			<button className="input__submit" type="submit">
				Go
			</button>
		</form>
	);
};

export default InputField;
