import React, { useState } from 'react';
import data from '../../data/data.json';
import { TopRightArrow } from '../../icons/top-right-arrow';
import { useNavigate } from 'react-router-dom';

export default function ProductMainGrid() {
    const navigate = useNavigate();
    const [selectedCompany, setSelectedCompany] = useState(null);

    const handleProductClick = (product) => {
        navigate('/product-screen', { state: product });
    }

    // Функция фильтрации продуктов по компании
    const filterProductsByCompany = (product) => {
        return selectedCompany ? product.company === selectedCompany : true;
    }

    const handleCompanyChange = (company) => {
        setSelectedCompany(company);
    }

    return (
        <section className="intro--product--section">
            <div className="section-title container">
                <h1>Наша продукция</h1>
            </div>
            <div className="company-filter container">
                <select id="companySelect" onChange={(e) => handleCompanyChange(e.target.value)}>
                    <option value="">Все компании</option>
                    {data.products.map((product) => (
                        <option key={product.id} value={product.company}>{product.company}</option>
                    ))}
                </select>
            </div>
            <div className="intro--product--container container">
                
                {data?.products?.filter(filterProductsByCompany).map((item, i) => (
                    <button
                        style={{ backgroundImage: `linear-gradient(0deg, var(--primary-with-opacity) 0%, var(--primary-with-opacity) 50%), url(${item.imgSrc})`, }}
                        key={i} className="intro--product--card" onClick={() => handleProductClick(item)}>
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
