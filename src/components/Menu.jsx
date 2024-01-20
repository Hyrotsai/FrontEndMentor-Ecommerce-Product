import { useState } from 'react';
import Cart from './Cart';
import './Menu.css';
import MenuMobile from './MenuMobile';

function Menu({ quantity }) {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className='menu__container'>
      <div className='menu__items'>
        <img
          src='../../public/icon-menu.svg'
          alt='menu'
          className='menu only__mobile'
          onClick={() => setShowMenu(!showCart)}
        />
        <img src='../../public/logo.svg' alt='Logo' className='menu__logo' />
        <p className='menu__text only__desktop'>Collections</p>
        <p className='menu__text only__desktop'>Mens</p>
        <p className='menu__text only__desktop'>Womens</p>
        <p className='menu__text only__desktop'>About</p>
        <p className='menu__text only__desktop'>Contact</p>
      </div>
      <div className='menu__items'>
        <img
          src='../../public/icon-cart.svg'
          alt='Cart'
          className='img__cart'
          onClick={() => setShowCart(!showCart)}
        />
        {quantity > 0 ? <p className='number__cart'>{quantity}</p> : null}
        <img
          src='../../public/image-avatar.png'
          alt='Avatar'
          className='img__avatar'
        />
      </div>
      {showCart && <Cart quantity={quantity} />}
      {showMenu && <MenuMobile handleCloseMenu={handleCloseMenu} />}
    </div>
  );
}

export default Menu;
