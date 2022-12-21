import React from 'react'
import { data } from './data'
import Book_80 from './Book_80'

const Booklist_80 = () => {
  return (
    <section className='bookList'>
    { data.map( (book, index) => {
      const {id, img, title, author} = book;
      return <Book_80 key={id} img={img} title={title} author={author}/>
    } ) }
  </section>
  )
}

export default Booklist_80
