import React, { useState, useEffect, useContext } from "react";
import data from "./components/blogData_80";
import Alert_80 from "./components/Alert_80";

const BlogContext = React.createContext();

const App1_80 = () => {
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
    <BlogContext.Provider
      value={{ blogs, alert, 
      removeItem, clearBlogs, filterItems, showAlert }}
    >
      <section className="blogs">
        {alert.show && <Alert_80 {...alert} removeAlert={showAlert} />}
        <div className="section-title">
          <h2>CSS Grid using breakpoints</h2>
        </div>
        <div className="filter-container">
          <button
            type="button"
            className="filter-btn"
            onClick={() => filterItems("all")}
          >
            all
          </button>
          <button
            type="button"
            className="filter-btn"
            onClick={() => filterItems("lifestyle")}
          >
            lifestyle
          </button>
          <button
            type="button"
            className="filter-btn"
            onClick={() => filterItems("travel")}
          >
            travel
          </button>
        </div>
        <div className="blogs-center">
          <BlogList_80 key={1} />
        </div>
        <button className="clear-btn" onClick={clearBlogs}>
          clear all blogs
        </button>
      </section>
    </BlogContext.Provider>
  );
};

const BlogList_80 = () => {
  const { blogs } = useContext(BlogContext);
  return (
    <div className="blogs-center">
      {blogs.map((blog) => {
        const { id, img, title, desc, category } = blog;
        return (
          <Blog_80
            key={id}
            id={id}
            img={img}
            title={title}
            desc={desc}
            category={category}
          />
        );
      })}
    </div>
  );
};

const Blog_80 = ({ id, img, title, desc, category }) => {
  const { removeItem } = useContext(BlogContext);
  return (
    <article className="blog">
      <img src={img} alt="Coffee photo" className="img blog-img" />
      <div className="blog-content">
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="item-control">
          <a href="#">read more</a>
          <div className="btn-container">
            <button
              type="button"
              className="delete-btn"
              onClick={() => removeItem(id)}
            >
              {" "}
              delete{" "}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default App1_80;
