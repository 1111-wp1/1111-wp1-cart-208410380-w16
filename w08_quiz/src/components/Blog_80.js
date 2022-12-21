import { useState } from 'react';

const Blog_80 = ({ id, img, style, title, content, removeItem}) => {
  // console.log('id', id);
  return (
    <article className='blog'>
      <img src={img} alt='Coffee photo' className='img blog-img' />
      <div className='blog-content'>
        <span>{style}</span>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className='item-control'>
          <a href='#'>read more</a>
          <div className='btn-container'>
            <button
              type='button'
              className='delete-btn'
              onClick={() => removeItem(id)}
            >
              {' '}
              delete{' '}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Blog_80;
