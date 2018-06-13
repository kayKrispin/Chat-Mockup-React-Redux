import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/css/styles.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { userLoggedIn, fetchUserss } from "./actions/user";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import history from "./history";

if (localStorage.userName) {
	const user = {
		user: { first_name: "Ivan Yakivchuk" }
	};
	store.dispatch(userLoggedIn(user));
	store.dispatch(fetchUserss());
}

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
	document.getElementById("root")
);
