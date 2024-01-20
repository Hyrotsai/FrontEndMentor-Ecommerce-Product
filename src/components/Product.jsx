import './Product.css';
import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';

function Product({ handleAddCart }) {
  return (
    <div className='product__container'>
      <ProductImage />
      <ProductDescription handleAddCart={handleAddCart} />
    </div>
  );
}

export default Product;
