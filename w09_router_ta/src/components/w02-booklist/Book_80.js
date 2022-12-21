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
  export default Book_80;
