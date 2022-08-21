import ProductCard from 'components/ProductCard';
import ButtonPesquisa from 'components/buttonPesquisa';

const Catalog = () => {
  return (
    <>
      <ButtonPesquisa />
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
