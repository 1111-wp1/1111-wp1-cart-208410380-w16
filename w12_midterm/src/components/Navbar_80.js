import { Link } from 'react-router-dom';

const Navbar_80 = () => {
  return (
    <nav className='navbar'>
      <div>
        <h4>Pocheng Chu -- 208410380</h4>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/p1_80'>P1_80</Link>
        <Link to='/p2_80'>P2_80</Link>
        <Link to='/p3_80'>P3_80</Link>
        <Link to='/P4_80'>P4_80</Link>
        <Link to='/p5_80'>P5_80</Link>
        <Link to='/p6_80'>P6_80</Link>
      </div>
    </nav>
  );
};

export default Navbar_80;
