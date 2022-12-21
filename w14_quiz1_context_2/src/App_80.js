import React from "react";
import data from "./components/blogData_80";
import Alert_80 from "./components/Alert_80";
import BlogList_80 from "./components/BlogList_80";
import { useBlogContext_80 } from "./BlogContext_80";

const App_80 = () => {
  const { blogs, alert, removeItem, clearBlogs, 
          filterItems, showAlert }  = useBlogContext_80();
  return (
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
  );
};

export default App_80;
