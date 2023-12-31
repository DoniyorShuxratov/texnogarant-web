import { useNavigate } from 'react-router-dom'
import { TopRightArrow } from '../../icons/top-right-arrow'

export default function NumbersMainGreed() {
    const navigate = useNavigate();

    const ExtraNumbersScreen = () => {
        navigate('/extra-numbers-screen');
    }

    return(
        <section className="dislocation--section">
            <div className="dislocation--section-container container">
                <div className="section-title">
                    <h1>Дислокация</h1>
                </div>
                <div className="dislocation--grid">
                    <button className="dislocation--card">
                        <h4>Офисы</h4>
                        <TopRightArrow/>
                    </button>
                    <button className="dislocation--card">
                        <h4>Технологии</h4>
                        <TopRightArrow/>
                    </button>
                    <button className="dislocation--card">
                        <h4>Меннджеры</h4>
                        <TopRightArrow/>
                    </button>
                    <button className="dislocation--card">
                        <h4>Продажи</h4>
                        <TopRightArrow/>
                    </button>
                    <button className="dislocation--card" onClick={ExtraNumbersScreen}>
                        <h4>Доп. номера</h4>
                        <TopRightArrow/>
                    </button>
                </div>
            </div>
        </section>
    )
}