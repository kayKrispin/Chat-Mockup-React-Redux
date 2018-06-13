import Axios from "axios";
import { connect } from "react-redux";

Axios.defaults.headers.post["Content-Type"] = "application/json";
Axios.defaults.headers.post["Accept"] = "application/json";

export const API_URL = "https://titustalk.bvblogic.live/api/user/auth";
export const SEC_URL = "https://titustalk.bvblogic.live/api/user/request_2fa";
export const FETCH_USERS_URL =
	"https://titustalk.bvblogic.live/api/user/me/contacts";

const Api = Axios.create();

//Create Api middleaware for requestSend

Api.interceptors.request.use(
	function(config) {
		const token = localStorage.getItem("token");
		if (token != null) {
			config.headers.Authorization = `${token}`;
		}

		return config;
	},
	function(err) {
		return Promise.reject(err);
	}
);
//Create Api middlewware for response

Api.interceptors.response.use(
	function(response) {
		return response;
	},
	function(err) {
		var sessionKey = err.response.data.sessionkey;
		if (err.response.status === 401 && sessionKey) {
			return Promise.reject(err);
		}
	}
);

function mapStateToProps(state) {
	return {
		token: this.state.user.user
	};
}

export default connect(mapStateToProps)(Api);
