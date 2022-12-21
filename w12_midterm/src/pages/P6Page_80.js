import { useEffect, useState } from "react";
import Product_80 from "../components/Product_80";
import midterm_data_80 from "../midterm_data_80";
import Alert_80 from "../components/Alert_80";

const P6Page_80 = () => {
  const [products, setProducts] = useState(midterm_data_80);
  const [searchName, setSearchName] = useState("");
  console.log("products", products);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  useEffect(() => {
    const filterProducts = midterm_data_80.filter((product) =>
      product.title.toLowerCase().includes(searchName.toLowerCase())
    );
    setProducts(filterProducts);
  }, [searchName]);

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearProducts = () => {
    showAlert(true, "all products deleted", "danger");
    setProducts([]);
  };

  const fetchProducts = () => {
    setProducts(midterm_data_80);
  };

  const filterItems = (category) => {
    if (category === "all") {
      setProducts(midterm_data_80);
    } else {
      const newProducts = midterm_data_80.filter(
        (product) => product.category === category
      );
      setProducts(newProducts);
    }
  };
  return (
    <>
      <section className="main-section">
        <div className="filter-left">
          <div className="left-content">
            <form className="input-form">
              <input
                type="text"
                value={searchName}
                onChange={(e) => {
                  setSearchName(e.target.value);
                }}
                className="search-input"
                placeholder="search..."
              />
            </form>
            <h4>Company</h4>
            <article className="companies">
              <button
                className="company-btn"
                onClick={() => filterItems("all")}
              >
                all
              </button>
              <button
                className="company-btn"
                onClick={() => filterItems("Ikea")}
              >
                ikea
              </button>
              <button
                className="company-btn"
                onClick={() => filterItems("Marcos")}
              >
                marcos
              </button>
              <button
                className="company-btn"
                onClick={() => filterItems("Caressa")}
              >
                caressa
              </button>
            </article>
            <button className="clear-btn" onClick={clearProducts}>
              Clear All
            </button>
            <button className="fetch-btn" onClick={fetchProducts}>
              Fetch All
            </button>
          </div>
        </div>
        <div className="products-right">
          <div className="products-container">
            {alert.show && <Alert_80 {...alert} removeAlert={showAlert} />}
            {products.map((product) => {
              const { id, img, title, price } = product;
              return (
                <Product_80
                  key={id}
                  id={id}
                  img={img}
                  title={title}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default P6Page_80;
