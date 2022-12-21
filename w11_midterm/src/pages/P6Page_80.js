import { useEffect, useState } from 'react';
import Product_80 from '../components/Product_80';
import midterm_data_80 from '../midterm_data_80';

const P6Page_80 = () => {
  const [searchName, setSearchName] = useState('');
  const [products, setProducts] = useState(midterm_data_80);

  console.log('products', products);

  return (
    <>
      <h2>P6Page_80</h2>
    </>
  );
};
export default P6Page_80;
