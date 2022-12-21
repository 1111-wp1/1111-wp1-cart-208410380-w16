import React from 'react';
import Blog_80 from './Blog_80';
import {useBlogContext} from '../App_80';

const BlogList_80 = () => {
  const { blogs } = useBlogContext();
  return (
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
            />
          );
        })}
      </div>
  );
};

export default BlogList_80;
