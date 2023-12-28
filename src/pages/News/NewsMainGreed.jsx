import data from '../../data/news.json';
import {useNavigate} from 'react-router-dom'

export default function NewsMainGreed() {
    const headNewsItem = data?.news?.[0] || {};

    const navigate = useNavigate();

    const handleNewsClick = (news) => {
        navigate('/news-screen', {state: news})
    }

    return(
        <section className="intro--news--section" style={{backgroundColor: `var(--white)`}}>
            <div className="intro--news--container container">
                <div className="head--news">
                    <div className="head--news--img">
                        <img src={headNewsItem.newsImg} alt="" srcset="" />
                    </div>
                    <div className="head--news--contant">
                        <h1>{headNewsItem.newsTitle}</h1>
                        <p>{headNewsItem.NewsContent}</p>
                    </div>
                </div>
                <div className="section-title">
                    <h1>Новости</h1>
                </div> 
                <div className="news--cards--main">
                    {data?.news?.map((item, i) => (
                        <div key={i} className="news--card">
                            <div className="news--card--img">
                                <img src={item.newsImg} alt="" />
                            </div>
                            <div className="news--card--content">
                                <h4>{item.newsTitle}</h4>
                                <button onClick={() => handleNewsClick(item)}>Читать дальше</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}