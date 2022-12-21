import React, { useState, useEffect, useContext } from "react";
import data from "./components/blogData_80";
import Alert_80 from "./components/Alert_80";
import BlogList_80 from "./components/BlogList_80";

const BlogContext_80 = React.createContext();

const BlogContextProvider_80 = ({children}) => {
  const [blogs, setBlogs] = useState(data);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  console.log("blogs", blogs);

  const removeItem = (id) => {
    showAlert(true, "blog removed", "danger");
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const clearBlogs = () => {
    showAlert(true, "empty all blogs", "danger");
    setBlogs([]);
  };

  const filterItems = (category) => {
    if (category === "all") {
      setBlogs(data);
    } else {
      const newBlogs = data.filter((blog) => blog.category === category);
      setBlogs(newBlogs);
    }
  };

  return (
    <BlogContext_80.Provider
      value={{ blogs, alert, 
      removeItem, clearBlogs, filterItems, showAlert }} >
      {children}
    </BlogContext_80.Provider>
  );
};


const useBlogContext_80 = () => {
  return useContext(BlogContext_80);
}

export {BlogContextProvider_80, useBlogContext_80};
