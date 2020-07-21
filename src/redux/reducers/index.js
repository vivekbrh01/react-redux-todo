import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actions/types";

const INITIAL_STATE = {
	todos: [],
};
const reducer = (state = INITIAL_STATE, action) => {
	const { todos } = state;

	switch (action.type) {
		case ADD_TODO:
			const todo = {
				id: Date.now(),
				text: action.payload,
				isDone: false,
			};
			return {
				...state,
				todos: [...todos, todo],
			};
		case REMOVE_TODO:
			return {
				...state,
				todos: todos.filter((todo) => todo.id != action.payload),
			};
		case TOGGLE_TODO:
			return {
				...state,
				todos: todos.map((todo) => {
					if (todo.id == action.payload) {
						todo.isDone = !todo.isDone;
						return todo;
					}
					return todo;
				}),
			};

		default:
			return state;
	}
};

export default reducer;
