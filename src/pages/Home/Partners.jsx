import partnerImage from '../../srcImages/partner_1.png'
export default function PartersIntro() {
    return(
        <section className="partners-intro--section">
            <div className="section-title container">
                <h2>Наши партнеры</h2>
            </div>
            <div className="partners-intro--list">
                <div className="parter-list">
                    <img src={partnerImage} alt="" />
                </div>
                <div className="parter-list">
                    <img src={partnerImage} alt="" />
                </div>
                <div className="parter-list">
                    <img src={partnerImage} alt="" />
                </div>
                <div className="parter-list">
                    <img src={partnerImage} alt="" />
                </div>
                <div className="parter-list">
                    <img src={partnerImage} alt="" />
                </div>
                <div className="parter-list">
                    <img src={partnerImage} alt="" />
                </div>
                <div className="parter-list">
                    <img src={partnerImage} alt="" />
                </div>
            </div>
        </section>

    )

}