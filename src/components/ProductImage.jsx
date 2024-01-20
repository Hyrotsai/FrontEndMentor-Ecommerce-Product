import { useState } from 'react';
import './ProductImage.css';
import ProductPreview from './ProductPreview';

function ProductImage() {
  const [preview, setPreview] = useState(false);
  const [numberImg, setNumberImg] = useState(1);

  const closePreview = () => {
    setPreview(false);
  };

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

  return (
    <div className='img__container'>
      <img
        src={`/image-product-${numberImg}.jpg`}
        alt='Principal'
        className='img__principal'
      />
      <img
        src='/icon-previous.svg'
        alt='Izquierda'
        className='svg__izq only__mobile'
        onClick={() => handlePrev()}
      />
      <img
        src='/icon-next.svg'
        alt='Derecha'
        className='svg__der only__mobile'
        onClick={() => handleNext()}
      />
      <div className='img__preview__container only__desktop'>
        <img
          src='/image-product-1-thumbnail.jpg'
          alt='Primario'
          className={`img__preview ${
            numberImg == 1 ? 'img__preview__active' : null
          }`}
          onClick={() => {
            setNumberImg(1);
            setPreview(true);
          }}
        />
        <img
          src='/image-product-2-thumbnail.jpg'
          alt='Secundario'
          className={`img__preview ${
            numberImg == 2 ? 'img__preview__active' : null
          }`}
          onClick={() => {
            setNumberImg(2);
            setPreview(true);
          }}
        />
        <img
          src='/image-product-3-thumbnail.jpg'
          alt='Terceario'
          className={`img__preview ${
            numberImg == 3 ? 'img__preview__active' : null
          }`}
          onClick={() => {
            setNumberImg(3);
            setPreview(true);
          }}
        />
        <img
          src='/image-product-4-thumbnail.jpg'
          alt='Cuarto'
          className={`img__preview ${
            numberImg == 4 ? 'img__preview__active' : null
          }`}
          onClick={() => {
            setNumberImg(4);
            setPreview(true);
          }}
        />
      </div>
      {preview && (
        <ProductPreview closePreview={closePreview} number={numberImg} />
      )}
    </div>
  );
}

export default ProductImage;
