import React, { Component } from "react";
import Api from "./api";
import { API_URL } from "./api";
import { SEC_URL } from "./api";
import { FETCH_USERS_URL } from "./api";
import { store } from "../redux/store";
import { sendSessionKey, saveUser } from "../actions/user";
import history from "../history";

export function fetchUser(credentials) {
	const { email } = credentials;
	const { password } = credentials;
	return Api.post(API_URL, { email, password })
		.then(res => {
			const user = res.data;
			return user;
		})
		.then(user => {
			const token = user.token;
			store.dispatch(saveUser(user));
			localStorage.setItem("userName", user);
			return token;
		})
		.then(token => {
			localStorage.setItem("token", token);
		})
		.catch(err => console.log(err));
}

export function addKey(sessionkey) {
	alert(sessionkey);
	Api.post(SEC_URL, { sessionkey });
}

export function fetchUsers() {
	return Api.get(FETCH_USERS_URL).then(res => res.data);
}
