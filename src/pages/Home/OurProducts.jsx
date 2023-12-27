import data from '../../data/data.json';
import { TopRightArrow } from '../../icons/top-right-arrow';

export default function OurProduct() {

    return (
        <section className="intro--product--section">
            <div className="section-title container">
                <h1>Наша продукция</h1>
                <button>Смотреть все</button>
            </div>
            <div className="intro--product--container container">
                {data?.products?.map((item, i) => (
                    <button
                        style={{
                            backgroundImage: `linear-gradient(0deg, var(--primary-with-opacity) 0%, var(--primary-with-opacity) 50%), url(${item.productTypeBy?.img1})`,
                        }}
                        key={i}
                        className="intro--product--card"
                    >
                        <div className="card--title">
                            <h3>{item.productTypeBy?.name}</h3>
                        </div>
                        <div className="card--sub">
                            <TopRightArrow />
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}
