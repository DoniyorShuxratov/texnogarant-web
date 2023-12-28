import { useNavigate } from 'react-router-dom'
import data from '../../data/dislocation.json'
import { TopRightArrow } from '../../icons/top-right-arrow'

export default function DislocationMaingreed() {
    const navigate = useNavigate();

    const handleDislocationClick = (dislocation) => {
        navigate('/dislocation-screen', {state: dislocation})
    }

    return(
        <section className="dislocation--section">
            <div className="dislocation--section-container container">
                <div className="section-title">
                    <h1>Дислокация</h1>
                </div>
                <div className="dislocation--grid">
                    {data?.dislocation?.map((item, i) =>(
                        <button key={i} className="dislocation--card" onClick={() => handleDislocationClick(item)}>
                            <h4>{item.place}</h4>
                            <TopRightArrow/>
                        </button>
                    ))}
                    
                </div>
            </div>
        </section>
    )
}