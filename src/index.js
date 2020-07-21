import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Todo from "./components/Todo";
import { store } from "./redux/store";

const App = () => (
	<Provider store={store}>
		<Todo />
	</Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
