const Product_80 = ({id, img, title, price}) => {
  return (
    <>
        <div className="single-product" key={id} >
          <img src={img} className="single-product-img img" alt="emperor bed" />
          <footer>
            <h5 className="name">{title}</h5>
            <span className="price">{price}</span>
          </footer>
        </div>
    </>
  );
};
export default Product_80;
