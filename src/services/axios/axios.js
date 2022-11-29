import axios from "axios";

const getToken = JSON.parse(localStorage.getItem("userInfo"));
axios.create({});
axios.defaults.headers.common["Authorization"] = `bearer ${getToken?.access_token}`;

export default axios;