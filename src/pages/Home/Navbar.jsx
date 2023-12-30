import { useEffect, useState } from 'react'
import {Logo} from '../../icons/logo'
import { MobLogo } from '../../icons/icon_mob'
import { IoNewspaper } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 760)
        }
   
        handleResize();
    
        window.addEventListener('resize', handleResize)
    
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className={`navbar ${isSmallScreen ? 'bottom-navbar' : ''}`}>
            <div className="navbar-container container">
                <a href="/"><Logo/></a>
                <ul className='navbar__nav'>
                    <li className="navbar__nav--item">
                        <a href="/news">Новости</a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/offices">Контакты</a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/dislocation">Дислокация</a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/products">Продукция</a>
                    </li> 
                    <li className="navbar__nav--item">
                        <a href="/contact">Easy guide</a>
                    </li>
                </ul>
            </div>
            <div className="bottom--container container">
                <ul className='navbar__nav'>
                    <li className="navbar__nav--item">
                        <a href="/"><MobLogo/></a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/news"><IoNewspaper fill='white' size={25}/></a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/offices"><IoMdContact fill='white' size={25}/></a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/dislocation"><FaLocationDot fill='white' size={25}/></a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/products"><FaShoppingCart fill='white' size={25}/></a>
                    </li> 
                </ul>
            </div>
        </div>
    )
}