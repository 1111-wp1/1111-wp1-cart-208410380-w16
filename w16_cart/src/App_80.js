import React from 'react';

// components
import Navbar_80 from './components/Navbar_80';
import CartContainer_80 from './components/CartContainer_80';
// items
import { useGlobalContext_80 } from './Context_80';

const App_xx = () => {
  const {loading, cart} = useGlobalContext_80();
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  return (
    <main>
      <Navbar_80 />
      <CartContainer_80 />
    </main>
  );
};

export default App_xx;
