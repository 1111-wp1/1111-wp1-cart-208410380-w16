import './App_80.css';

// const firstbook = {
//   img : 'https://m.media-amazon.com/images/P/194563183X.01._SCLZZZZZZZ_SX500_.jpg',
//   title : 'Things We Never Got Over',
//   author : 'Lucy Score'
// }

// const secondbook ={
//   img : 'https://m.media-amazon.com/images/P/1496731115.01._SCLZZZZZZZ_SX500_.jpg',
//   title : 'The Wife Before: A Spellbinding Psychological Thriller with a Shocking Twist',
//   author : 'Shanora Williams'
// }

// const thirdbook ={
//   img : 'https://m.media-amazon.com/images/P/1629998958.01._SCLZZZZZZZ_SX500_.jpg',
//   title : 'The Harbinger II',
//   author : 'Cahn'
// }

const data = [
  {
    id: 1,
    img : 'https://m.media-amazon.com/images/P/194563183X.01._SCLZZZZZZZ_SX500_.jpg',
    title : 'Things We Never Got Over',
    author : 'Lucy Score'
  },
  {
    id: 2,
    img : 'https://m.media-amazon.com/images/P/1496731115.01._SCLZZZZZZZ_SX500_.jpg',
    title : 'The Wife Before: A Spellbinding Psychological Thriller with a Shocking Twist',
    author : 'Shanora Williams'
  },
  {
    id: 3,
    img : 'https://m.media-amazon.com/images/P/1629998958.01._SCLZZZZZZZ_SX500_.jpg',
    title : 'The Harbinger II',
    author : 'Cahn'
  },
  { 
    id: 4,
    img : 'https://images-na.ssl-images-amazon.com/images/I/61vjauf3PsL._SX329_BO1,204,203,200_.jpg',
    title : 'The Book of Mysteries',
    author : 'Jonathan Cahn'
  },
  {
    id: 5,
    img : 'https://m.media-amazon.com/images/P/B098J337VY.01._SCLZZZZZZZ_SX500_.jpg',
    title : 'The Love of My Life: A Novel',
    author : 'Rosie Walsh'
  }


]

const App_80 = () => {
  return (
    <section className='bookList'>
      { data.map( (book, index) => {
        const {id, img, title, author} = book;
        return <Book_80 key={id} img={img} title={title} author={author}/>
      } ) }

      {/* <Book_80 img={firstbook.img} title={firstbook.title} author={firstbook.author}/>
      <Book_80 img={secondbook.img} title={secondbook.title} author={secondbook.author}/>
      <Book_80 img={thirdbook.img} title={thirdbook.title} author={thirdbook.author}/>
     */}
    </section>
  );
}

const Book_80 = ({ img, title, author}) => {
  // console.log('props',props )
  // const {img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );

}


export default App_80;
