import React, { useState } from "react";
import { connect } from "react-redux";

import { addTodo, removeTodo, toggleTodo } from "../redux/actions";

const Todo = (props) => {
	const [text, setText] = useState("");
	const { todos } = props;

	const submit = (e) => {
		e.preventDefault();
		setText("");
		props.dispatch(addTodo(text));
	};
	return (
		<div>
			<form onSubmit={submit}>
				<input
					type="text"
					value={text}
					onChange={({ target: { value } }) => setText(value)}
				/>
			</form>
			<ul>
				{todos.map((todo, i) => (
					<li key={i}>
						<input
							type="checkbox"
							checked={todo.isdone}
							onClick={() => props.dispatch(toggleTodo(todo.id))}
						/>
						<p>{todo.text}</p>
						<button onClick={() => props.dispatch(removeTodo(todo.id))}>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
const mapStateToProps = ({ todos }) => {
	return {
		todos,
	};
};

export default connect(mapStateToProps)(Todo);
