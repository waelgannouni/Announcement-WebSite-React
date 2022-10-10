import http from "../http-common";

const getAllAdverts = () => {
  return http.get("/annonces");
};

const getAdvert = id => {
  return http.get(`/annonces/${id}`);
};

const createAdvert = data => {
  return http.post("/annonces", data);
};

const updateAdvert = (id, data) => {
  return http.put(`/annonces/update/${id}`, data);
};

const removeAdvert = id => {
  return http.delete(`/annonces/delete${id}`);
};


export default {
  getAllAdverts,
  getAdvert,
  createAdvert,
  updateAdvert,
  removeAdvert,
};