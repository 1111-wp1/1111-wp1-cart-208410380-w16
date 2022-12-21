import React from 'react';
import { useState } from 'react';
import blogData_80 from './blogData_80';
import Blog_80 from './Blog_80';
import Alert_80 from './Alert_80';

const allCategories = ['all', 'lifestyle', 'travel'];

const Bloglist_80 = () => {
  const [blogs, setBlogs] = useState(blogData_80);
  const [categories, setCategories] = useState(allCategories);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });
  console.log('blogs', blogs);

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger');
    setBlogs(blogs.filter((blog) => blog.id !== id));

  };

  const clearItem = (blogs) => {
    showAlert(true, 'empty list', 'danger');
    setBlogs([]);
  };

  const filterItems = (category) => {
    if (category === 'all') {
      setBlogs(blogData_80);
    } else {
      setBlogs(blogData_80.filter((item) => item.style === category));
    }
  };

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2>CSS Grid using breakpoints</h2>
        {alert.show && <Alert_80 {...alert} removeAlert={showAlert} />}
      </div>
      <div className='filter-container'>
        {categories.map((item, index) => {
          return (
            <button
              type='button'
              className='filter-btn'
              key={index}
              onClick={() => filterItems(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className='blogs-center'>
        {blogs.map((blog, index) => {
          const { id, img, style, title, content } = blog;
          return (
            <Blog_80
              key={id}
              id={id}
              img={img}
              style={style}
              title={title}
              content={content}
              removeItem={removeItem}
            />
          );
        })}
      </div>
      <button className='clear-btn' onClick={clearItem}>
        clear all blogs
      </button>
    </section>
  );
};

export default Bloglist_80;
