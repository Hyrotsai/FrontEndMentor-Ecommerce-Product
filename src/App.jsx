import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Product from './components/Product';

function App() {
  const [quantity, setQuantity] = useState(0);

  const handleAddCart = (item) => {
    setQuantity(item);
  };

  return (
    <>
      <section className='menu__section'>
        <Menu quantity={quantity} />
      </section>
      <section className='content__section'>
        <Product handleAddCart={handleAddCart} />
      </section>
    </>
  );
}

export default App;
