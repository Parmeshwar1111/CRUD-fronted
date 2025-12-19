import axios from "axios";

const API_URL = "https://crud-backend-production-2543.up.railway.app/user";

export const getUsers = () => axios.get(API_URL);
export const createUser = (data) => axios.post(API_URL, data);
export const updateUser = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
export const getUserById = (id) => axios.get(`${API_URL}/${id}`);
