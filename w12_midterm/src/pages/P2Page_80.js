import { useState } from 'react';
import midterm_data_80 from '../midterm_data_80';

const P2Page_80 = () => {
  const [products, setProducts] = useState(midterm_data_80);
  console.log('products', products);
  return (
    <>
      <section className="main-section">
      <div className="filter-left">
        <div className="left-content">
            <form className="input-form">
              <input type="text" className="search-input" placeholder="search..." />
            </form>
            <h4>Company</h4>
            <article className="companies">
              <button className="company-btn">all</button>
              <button className="company-btn">ikea</button>
              <button className="company-btn">marcos</button>
              <button className="company-btn">caressa</button>
            </article>
          </div>
        </div>
      <div className="products-right">
        <div className="products-container">
        <div className="single-product">
              <img src="./images/product-8.jpg" class="single-product-img img" alt="emperor bed" />
              <footer>
                <h5 class="name">emperor bed</h5>
                <span class="price">$21.99</span>
              </footer>
            </div>
      <div className="single-product">
              <img src="./images/product-10.jpg" className="single-product-img img" alt="entertainment center" />
              <footer>
                <h5 className="name">entertainment center</h5>
                <span className="price">$29.98</span>
              </footer>
            </div>
      {products.map((product) => {
        const {id, img, title, price} = product;
        return (
          <div className="single-product" key={id} >
          <img src={img} className="single-product-img img" alt="emperor bed" />
          <footer>
            <h5 className="name">{title}</h5>
            <span className="price">{price}</span>
          </footer>
        </div>
        )
      })}
           
    </div>
    </div>
    </section>
    </>
  );
};
export default P2Page_80;
