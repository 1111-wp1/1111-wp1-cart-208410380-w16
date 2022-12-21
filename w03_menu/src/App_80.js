import { useState } from 'react';
import Category_80 from './components/Category_80';
import Menu_80 from './components/Menu_80';
import items from './data';

const allCategories = ['all', 'breakfast', 'lunch', 'shakes', 'dinner'];

const App_80 = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories]= useState(allCategories);
  
  // console.log('menuItems', menuItems);
  return (
    <section className="menu">
    {/* title */}
    <div className="title">
      <h2>our menu</h2>
      <div className="underline"></div>
    </div>
    {/* filter buttons */}
    <Category_80 categories={categories}/>
    {/*menu items*/}
    <Menu_80 items={menuItems}/>
      
       {/* javascript */}
    <script src="app.js"></script>
    </section>
  );
}

export default App_80;
