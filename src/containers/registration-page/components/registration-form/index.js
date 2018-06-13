import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import RegistrationPage from "../../../registration-page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import renderField from "../../../../components/input";
import image from "../../../../app.png";

const validate = values => {
	const errors = {};
	if (!values.Password) {
		errors.Password = "Required";
	} else if (values.Password.length < 6) {
		errors.Password = "Must be 6 characters or less";
	}

	if (!values.Phone) {
		errors.phone = "Required";
	}
	if (!values.FirstName) {
		errors.FirstName = "Required";
	}
	if (!values.LastName) {
		errors.LastName = "Required";
	}
	if (!values.ConfirmPassword) {
		errors.ConfirmPassword = "Required";
	}
	if (!values.Phone) {
		errors.Phone = "Required";
	}
	if (!values.Email) {
		errors.Email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.Email = "Invalid email address";
	}

	return errors;
};

class RegistrationForm extends Component {
	handleChoose = values => {
		console.log(values);
	};

	render() {
		const {
			handleSubmit,
			reset,
			load,
			submitting,
			pristine,
			initialValues
		} = this.props;
		return (
			<div className="mainBlock">
				<div className="headerTop">
					<img src={image} alt="" />
					<h1>Titus Talk</h1>
				</div>
				<div className="loginBox register">
					<h1>Register</h1>
					<p>
						Titus Talk can only be connected to the services authorized by Titus
					</p>
					<div className="container">
						<div className="row">
							<div className="registerBox col-md-12">
								<form onSubmit={handleSubmit(this.handleChoose)}>
									<div className="form-group regForm">
										<Field
											name="FirstName"
											icon={"fas fa-user-alt"}
											type="text"
											label="First Name"
											component={renderField}
										/>
									</div>
									<div className="form-group  regForm">
										<Field
											name="LastName"
											type="text"
											icon={"fas fa-user-alt"}
											label="Last Name"
											component={renderField}
										/>
									</div>

									<div className="form-group  regForm">
										<Field
											name="Email"
											type="text"
											icon={"fas fa-at"}
											label="Email"
											component={renderField}
										/>
									</div>

									<div className="form-group  regForm">
										<Field
											name="Phone"
											type="text"
											icon={"fas fa-mobile-alt"}
											label="Phone"
											component={renderField}
										/>
									</div>

									<div className="form-group  regForm">
										<Field
											name="Password"
											type="text"
											icon={"fas fa-lock"}
											label="Password"
											component={renderField}
										/>
									</div>

									<div className="form-group  regForm">
										<Field
											name="ConfirmPassword"
											icon={"fas fa-lock"}
											type="text"
											label="Confirm Password"
											component={renderField}
										/>
									</div>

									<button
										type="submit"
										disabled={submitting}
										className="btn btn-primary"
									>
										Register
									</button>
								</form>
							</div>
						</div>
					</div>

					<div className="container registerBoxBottom">
						<div className="row">
							<div className="col-md-12">
								<p>Already have an account?</p>
								<Link to="/login">Log in</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default reduxForm({
	form: "register-form",
	destroyOnUnmount: false,
	forceOnUnRegisterUnmount: true,
	validate
})(RegistrationForm);
