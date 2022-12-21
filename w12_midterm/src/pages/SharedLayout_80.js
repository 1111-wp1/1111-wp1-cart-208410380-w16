import { Outlet } from 'react-router-dom';
import Navbar_80 from '../components/Navbar_80';

const SharedLayout_80 = () => {
  return (
    <>
      <Navbar_80 />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout_80;
