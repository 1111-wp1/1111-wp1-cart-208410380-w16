import { Link, Outlet } from 'react-router-dom';
import Navbar_80 from '../components/Navbar_80';

const ShareLayout_80 = () => {
  return (
    <>
      <Navbar_80 />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default ShareLayout_80;
