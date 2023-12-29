import data from '../../data/data.json'
import { TopRightArrow } from '../../icons/top-right-arrow';
import { useNavigate } from 'react-router-dom';

const products = data?.products || [];
const lengthFourProduct = products.slice(0,4)

export default function OurProduct() {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate('/product-screen', {state: product});
    }
    return(
        <section className="intro--product--section">
            <div className="section-title container">
                <h2>Наша продукция</h2>
                <button>Смотреть все</button>
            </div>
            <div className="intro--product--container container">
                {lengthFourProduct?.map((item, i) => (
                    <button style={{backgroundImage: `linear-gradient(0deg, var(--primary-with-opacity) 0%, var(--primary-with-opacity) 50%), url(${item.imgSrc})`,}} key={i} className="intro--product--card" onClick={() => handleProductClick(item)}>
                        <div className="card--title">
                            <h3>{item.productName}</h3>
                            <span>{item.productSubName}</span>
                        </div>
                        <div className="card--sub">
                            <TopRightArrow />
                        </div>
                    </button>
                ))}
            </div>
        </section>
    )
}