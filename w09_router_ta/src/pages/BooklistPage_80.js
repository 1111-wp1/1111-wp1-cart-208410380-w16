import React from 'react';
import { booklist_data } from '../booklist_data';
import Book_80 from '../components/w02-booklist/Book_80';

const Booklist_80 = () => {
  return (
    <section className='bookList'>
      {booklist_data.map((book, index) => {
        const { id, img, title, author } = book;
        return <Book_80 key={id} img={img} title={title} author={author} />;
      })}
    </section>
  );
};

export default Booklist_80;
