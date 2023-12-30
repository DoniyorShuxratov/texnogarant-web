import { useLocation } from "react-router-dom";

export default function NewsScreen() {
    const {state: news} = useLocation();

    return (
        <section className="news--screen">
            <div className="news--screen-container container">
                <div className="news--screen-title">
                    <h1>{news.newsTitle}</h1>
                </div>
                <div className="news--screen-img">
                    <img src={news.newsImg} alt="" />
                </div>
                <div className="news--screen-contant">
                    <span>{news.newsSubTitle}</span>
                    <p>{news.NewsContent}</p>
                </div> 
            </div>
        </section>
    )
}