import React,{Component} from 'react'
import { useState } from 'react';
import Category_80 from './components/Category_80';
import Menu_80 from './components/Menu_80';
import items from './data'

import { useMenuContext_80 } from './MenuContext';

const App_80 = () => {
  const {menuItems, filterItems, categories} = useMenuContext_80();

  return (
    <section className="menu">
    {/* title */}
    <div className="title">
      <h2>our menu 208410380</h2>
      <div className="underline"></div>
    </div>
    {/* filter buttons */}
    <Category_80 categories={categories} filterItems={filterItems}/>
    {/*menu items*/}
    <Menu_80 items={menuItems}/>
      
       {/* javascript */}
    <script src="app.js"></script>
    </section>
  );
}

export default App_80;
