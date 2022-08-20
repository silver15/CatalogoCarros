import MainImagem from 'assets/images/main-image.png';
import './styles.css';
import ButtonIcon from 'components/buttonIcon';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="home-image-container">
          <img src={MainImagem} alt="Nome do Produto" />
        </div>
      </div>
      <div className="home-button">
        <ButtonIcon />
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
