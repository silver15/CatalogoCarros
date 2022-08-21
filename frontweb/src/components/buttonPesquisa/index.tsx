import './styles.css';

const ButtonPesquisa = () => {
  return (
    <div className="btn-container">
      <input type="text" name="name" placeholder="Digite sua Busca" />

      <div className="btn-icon-container">
        <h6>BUSCAR</h6>
      </div>
    </div>
  );
};

export default ButtonPesquisa;
