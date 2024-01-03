import { Logo } from "../../icons/logo";
import { GrInstagram } from "react-icons/gr";
import { FaMeta } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export default function Footer(){
    return(
        <section className="footer--scetion">
            <div className="footer--section-container container">
                <div className="footer--logo">
                    <Logo />
                </div>
                <div className="footer--navbar">
                    <ul className="navbar__nav">
                        <li className="navbar__nav--item">
                            <a href="/">Home</a>
                        </li>
                        <li className="navbar__nav--item">
                            <a href="/about">About</a>
                        </li>
                        <li className="navbar__nav--item">
                            <a href="/products">Products</a>
                        </li>
                        <li className="navbar__nav--item">
                            <a href="/services">Services</a>
                        </li>
                        <li className="navbar__nav--item">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="footer--sm">
                    <button><GrInstagram size={25} /></button>
                    <button><FaMeta size={25} /></button>
                    <button><FaYoutube size={25} /></button>
                    <button><FaTelegram size={25} /></button>
                    <button><BsTwitterX size={25} /></button>
                </div>
                <div className="footer--ofdocs">
                    <h5>© TEXNOGARANT. TEXNOPARK 2023</h5>
                    <h5>design by OMY</h5>
                </div>
            </div>
        </section>

    )
}