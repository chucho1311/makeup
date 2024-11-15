import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='header row'>
            <div className='squeare1 col-8 col-sm-10 col-md-10 col-lg-10'>
                <Link to={'/'} className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=FFFFFF' alt='casa' />
                </Link>
                <Link className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=EMfHtOm6xPEe&format=png&color=FFFFFF' alt='blog' />
                </Link>
                <Link className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=15263&format=png&color=FFFFFF' alt='blog' />
                </Link>
                {/* <button className='headerBtn'>
                    Contacto
                </button> */}
            </div>
            <div className="squeare2 col-2 col-sm-1 col-md-1 col-lg-1">
                <Link className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=85154&format=png&color=FFFFFF' alt='instagram  ' />
                </Link>
                <Link className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=BFGcUuGkjgWI&format=png&color=FFFFFF' alt='whatsapp' />
                </Link>
            </div>
        </div>
    )
}

export default Header;