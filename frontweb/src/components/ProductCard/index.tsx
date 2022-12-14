import './styles.css';

import ProductImg from 'assets/images/car-card.png';

import ButtonBay from 'components/ButtonBay';
const ProductCard = () => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-top-container">
          <img src={ProductImg} alt="Carro" />
        </div>
        <div className="card-botton-container">
          <h6>Audi Supra TT</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
          <div className="Button-card">
            <ButtonBay />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
