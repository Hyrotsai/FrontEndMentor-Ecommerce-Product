import { useState } from 'react';
import './ProductDescription.css';

function ProductDescription({ handleAddCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleSuma = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleResta = () => {
    setQuantity((prev) => {
      if (prev == 0) return 0;
      return prev - 1;
    });
  };

  const getTotal = () => {
    handleAddCart(quantity);
  };

  return (
    <div className='text__container'>
      <p className='sub__tittle'>SNEAKER COMPANY</p>
      <h1 className='tittle'>Fall Limited Edition Sneakers</h1>
      <p className='parrafo'>
        These low-profile sneakers are your perfect casual wear companion,
        Featuring a durable rubber outer sole, they&#39;ll withstand everything
        the weather can offer.
      </p>
      <div>
        <p className='main__price'>$125.00</p>
        <p className='discount__percentage'>50%</p>
        <p className='discount__price only__mobile'>$250.00</p>
      </div>
      <p className='discount__price only__desktop'>$250.00</p>
      <div className='cart__button__container'>
        <div className='price__container'>
          <img
            src='../../public/icon-minus.svg'
            alt='Resta'
            className='svg__resta'
            onClick={() => handleResta()}
          />
          <p className='count'>{quantity}</p>
          <img
            src='../../public/icon-plus.svg'
            alt='Suma'
            className='svg__suma'
            onClick={() => handleSuma()}
          />
        </div>
        <button className='button__cart' onClick={() => getTotal()}>
          <div className='button__items__containers'>
            <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
                fill='#69707D'
                fillRule='nonzero'
                className='svg__button'
              />
            </svg>
            <p>Add to cart</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ProductDescription;
