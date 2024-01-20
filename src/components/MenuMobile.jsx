import './MenuMobile.css';

function MenuMobile({ handleCloseMenu }) {
  return (
    <div className='menu__mobile__container'>
      <div className='menu__mobile'>
        <img
          src='/icon-close.svg'
          alt='Close'
          className='close__button'
          onClick={() => handleCloseMenu()}
        />
        <p className='menu__mobile__text'>Collections</p>
        <p className='menu__mobile__text'>Men</p>
        <p className='menu__mobile__text'>Women</p>
        <p className='menu__mobile__text'>About</p>
        <p className='menu__mobile__text'>Contact</p>
      </div>
    </div>
  );
}

export default MenuMobile;
