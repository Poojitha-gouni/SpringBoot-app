import axios from "axios";

const API = axios.create({
  baseURL: "http://16.170.218.161:8080/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
