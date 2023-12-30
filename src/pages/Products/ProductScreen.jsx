import { useLocation } from 'react-router-dom';

export default function ProductScreen() {
  const { state: product } = useLocation();

  return (
    <section className='product--screen'>
        <div className="product--screen-container container">
            <div className="product--img">
                <img src={product.imgSrc1} alt=""/>
                <img src={product.imgSrc2} alt=""/>
                <img src={product.imgSrc3} alt=""/>
            </div>
            <div className="product--content">
                <div className="product--content-title">
                    <h1>{product.productName}</h1>
                </div>
                <div className="product--content-paragraph">
                    <p>{product.productSubName}</p>
                </div>
                <div className="product--content-table">
                    <img src={product.productDescription} alt="" />
                </div>
            </div>
        </div>
    </section>
  );
}
