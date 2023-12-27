import { useEffect, useState } from 'react'
import {Logo} from '../../icons/logo'
export default function Navbar() {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 760)
        }

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
            
        </div>
    )
}