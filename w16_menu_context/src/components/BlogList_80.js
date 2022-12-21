import React from 'react';
import Blog_80 from './Blog_80';
import {useBlogContext_80} from '../BlogContext_80';

const BlogList_80 = () => {
  const { blogs } = useBlogContext_80();
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
