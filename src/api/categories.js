import http from "../http-common";


const getAllcategories = () => {
    return http.get("/categories");
  };

export default {
    getAllcategories
};