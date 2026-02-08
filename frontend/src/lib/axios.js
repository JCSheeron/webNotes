import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://10.10.12.99:5001/api",
});

export default axiosApi;
