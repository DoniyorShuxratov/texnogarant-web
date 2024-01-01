import { GrInstagram } from "react-icons/gr";
import { FaMeta } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export default function Contact() {
    return (
        <section className="contact--section">
            <div className="section-title container">
                    <h1>Контакт</h1>
                </div>
            <div className="contact--container container">
                <div className="contact--field">
                    <div className="contact--field-phone">
                        <h4>Телефон</h4>
                        <hr />
                        <p>+998 93 062 22 77</p>
                    </div>
                    <div className="contact--field-email">
                        <h4>почта</h4>
                        <hr />
                        <p>info@sxf-group.com</p>
                    </div>
                    <div className="contact--field-sm">
                        <button><GrInstagram size={25} /></button>
                        <button><FaMeta size={25} /></button>
                        <button><FaYoutube size={25} /></button>
                        <button><FaTelegram size={25} /></button>
                        <button><BsTwitterX size={25} /></button>
                    </div>
                </div>

                <div className="contact--map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11989.528492361833!2d69.2841786146164!3d41.30055005009436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1703222812339!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}