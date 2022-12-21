import './App.css';

const App = () => {
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <img src="https://m.media-amazon.com/images/I/71dDj1W87kL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
      <h1>Things We Never Got Over</h1>
      <h4>Lucy Score</h4>
    </article>
  );

}


export default App;
