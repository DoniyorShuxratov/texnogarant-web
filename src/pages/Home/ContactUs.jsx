import { GrInstagram } from "react-icons/gr";
import { FaMeta } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

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
                    <YMaps>
                        <div>
                            <Map width={350} height={450} defaultState={{ center: [41.302931, 69.314794], zoom: 15 }}>
                                <Placemark geometry={[41.302931, 69.314794]} />
                            </Map>
                        </div>
                    </YMaps>
                </div>
            </div>
        </section>
    )
}