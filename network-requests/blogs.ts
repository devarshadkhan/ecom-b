import axios from "./axios";

export const getAllBlogs = () =>
  axios
    .get("/blogs")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
export const getAllBlogsById = (id_or_slug: string | undefined) =>
  axios
    .get(`/blogs/${id_or_slug}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
