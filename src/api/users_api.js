import http from "../http-common";


const getUser = id => {
  return http.get(`/users/${id}`);
};

const createUser = data => {
  return http.post("/users/create", data);
};

const updateUser = (id, data) => {
  return http.put(`/users/update/${id}`, data);
};

export default {
  getUser,
  createUser,
  updateUser
};