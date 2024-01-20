import './Cart.css';

function Cart({ quantity }) {
  return (
    <div className='cart__container'>
      {quantity > 0 ? (
        <>
          <p className='cart__tittle'>Cart</p>
          <div className='description__container'>
            <div className='product__description__container'>
              <img
                src='../../public/image-product-1-thumbnail.jpg'
                alt='Carrito'
                className='img__product__cart'
              />
              <p className='text__cart'>
                Fall Limited Edition Sneakers $125.00 x 3{' '}
                <strong className='price__total'>${125 * quantity}.00</strong>
              </p>
              <img
                src='../../public/icon-delete.svg'
                alt='Delete'
                className='delete__cart'
              />
            </div>
            <button className='button__cart__checkout'>Checkout</button>
          </div>
        </>
      ) : null}

      {quantity == 0 ? (
        <div className='cart__empty'>
          <p className='text__empty'>Your cart is empty.</p>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
