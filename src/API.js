import axios from "axios";

const API = axios.create({
  baseURL: 'http://localhost:5000',
  crossDomain: true,
  headers: {
    "Content-Type": "application/json"
  }
});

export default API;