import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  console.log(token);
  const api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: token
    }
  });

  return api;
}