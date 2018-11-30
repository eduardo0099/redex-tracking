import axios from "axios";

const API = axios.create({
  baseURL: 'http://10.101.57.155:5000',
  crossDomain: true,
  headers: {
    "Content-Type": "application/json"
  }
});

export default API;