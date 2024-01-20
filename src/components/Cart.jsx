import './Cart.css';

function Cart({ quantity, emptyCart }) {
  return (
    <div className='cart__container'>
      <p className='cart__tittle'>Cart</p>

      {quantity > 0 ? (
        <div className='description__container'>
          <div className='product__description__container'>
            <img
              src='/image-product-1-thumbnail.jpg'
              alt='Carrito'
              className='img__product__cart'
            />
            <p className='text__cart'>
              Fall Limited Edition Sneakers $125.00 x 3{' '}
              <strong className='price__total'>${125 * quantity}.00</strong>
            </p>
            <img
              src='/icon-delete.svg'
              alt='Delete'
              className='delete__cart'
              onClick={() => emptyCart()}
            />
          </div>
          <button className='button__cart__checkout'>Checkout</button>
        </div>
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
