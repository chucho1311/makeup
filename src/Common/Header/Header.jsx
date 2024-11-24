import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className='header row'>
            <nav className='navbar col-12 col-sm-12 col-md-11 col-lg-11'>
                <Link to={'/'} className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=1A1A1A' alt='casa' />
                </Link>
                <Link className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=EMfHtOm6xPEe&format=png&color=1A1A1A' alt='blog' />
                </Link>
                <Link className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=15263&format=png&color=1A1A1A' alt='blog' />
                </Link>
                <Link className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=85154&format=png&color=1A1A1A' alt='instagram  ' />
                </Link>
                <Link className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=BFGcUuGkjgWI&format=png&color=1A1A1A' alt='whatsapp' />
                </Link>
            </nav>
            {/* <nav className="squeare2 col-2 col-sm-1 col-md-1 col-lg-1">
                <Link className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=85154&format=png&color=1A1A1A' alt='instagram  ' />
                </Link>
                <Link className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=BFGcUuGkjgWI&format=png&color=1A1A1A' alt='whatsapp' />
                </Link>
            </nav> */}
            {/* <div className='col-12'>
                <div className="row justify-content-center title"> MAREZ</div>
                <div className="row justify-content-center sub-title">
                    <hr className="col-10 col-sm-3 col-md-3 col-lg-3" style={{ border: "1px solid", margin: "0", color: "black" }} />
                    <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                        MAKE UP - NAILS - HAIR
                    </div>
                    <hr className="col-10 col-sm-3 col-md-3 col-lg-3" style={{ border: "1px solid", margin: "0", color: "black" }} />
                </div>
            </div> */}
        </header>
    )
}

export default Header;