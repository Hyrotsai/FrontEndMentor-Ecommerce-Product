import { useEffect, useState } from 'react';
import './ProductPreview.css';

function ProductPreview({ closePreview, number }) {
  const [numberImg, setNumberImg] = useState(1);

  const handleNext = () => {
    setNumberImg((prev) => {
      if (prev == 4) return 1;
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setNumberImg((prev) => {
      if (prev == 1) return 4;
      return prev - 1;
    });
  };

  const changeImg = (number) => {
    setNumberImg(number);
  };

  useEffect(() => {
    setNumberImg(number);
  }, [number]);

  return (
    <div className='preview__container'>
      <div className='preview__principal'>
        <img
          src={`/image-product-${numberImg}.jpg`}
          alt='Principal'
          className='img__preview__principal'
        />
        <img
          src='/icon-close.svg'
          alt='Close'
          className='img__close'
          onClick={() => closePreview()}
        />
        <img
          src='/icon-previous.svg'
          alt='Izq'
          className='svg__left'
          onClick={() => handlePrev()}
        />
        <img
          src='/icon-next.svg'
          alt='Der'
          className='svg__right'
          onClick={() => handleNext()}
        />
      </div>
      <div className='preview__secundaria'>
        <img
          src='/image-product-1-thumbnail.jpg'
          alt='Uno'
          className={`img__preview__secundaria ${
            numberImg == 1 ? 'img__preview__active2' : null
          }`}
          onClick={() => changeImg(1)}
        />
        <img
          src='/image-product-2-thumbnail.jpg'
          alt='Dos'
          className={`img__preview__secundaria ${
            numberImg == 2 ? 'img__preview__active2' : null
          }`}
          onClick={() => changeImg(2)}
        />
        <img
          src='/image-product-3-thumbnail.jpg'
          alt='Tres'
          className={`img__preview__secundaria ${
            numberImg == 3 ? 'img__preview__active2' : null
          }`}
          onClick={() => changeImg(3)}
        />
        <img
          src='/image-product-4-thumbnail.jpg'
          alt='Cuadtro1'
          className={`img__preview__secundaria ${
            numberImg == 4 ? 'img__preview__active2' : null
          }`}
          onClick={() => changeImg(4)}
        />
      </div>
    </div>
  );
}

export default ProductPreview;
