import React from 'react';
import './css/home.css';
import Categories from './Categories';
import Menu from './Menu';
import Cart from './Cart';

function Home() {
  return (
    <main>
        <Categories />
        <Menu />
        <Cart />
    </main>
  )
}

export default Home