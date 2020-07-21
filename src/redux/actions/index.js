import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./types";

export const addTodo = (payload) => {
	return {
		type: ADD_TODO,
		payload,
	};
};

export const removeTodo = (payload) => {
	return {
		type: REMOVE_TODO,
		payload,
	};
};

export const toggleTodo = (payload) => {
	return {
		type: TOGGLE_TODO,
		payload,
	};
};
