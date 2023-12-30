import data from '../../data/news.json';
import {useNavigate} from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";

const news = data?.news || [];
const introNews = news.slice(0,6)

export default function News(){
    const navigate = useNavigate();

    const handleNewsClick = (news) => {
        navigate('/news-screen', {state: news})
    }

    return(
        <section className="intro--news--section">
            <div className="intro--news--container container">
                <div className="section-title">
                    <h2>Новости</h2>
                    <button>Смотреть все</button>
                </div>
                <div className="news--cards">
                    {introNews?.map((item, i) => (
                        <div key={i} className="news--card">
                            <div className="news--card--img">
                                <img src={item.newsImg} alt="" />
                            </div>
                            <div className="news--card--content">
                                <h4>{item.newsTitle}</h4>
                                <button className='news--card--content-btn' onClick={() => handleNewsClick(item)}>Читать дальше <IoIosArrowRoundForward size={25}/></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}