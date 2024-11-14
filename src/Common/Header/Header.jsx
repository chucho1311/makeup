import './Header.css';

const Header = () => {

    return (
        <div className='header row justify-content-between'>
            <div className='squeare1 col-10 col-lg-4'>
                <button className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=1A1A1A' alt='casa' />
                </button>
                <button className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=EMfHtOm6xPEe&format=png&color=1A1A1A' alt='blog' />
                </button>
                <button className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=15263&format=png&color=1A1A1A' alt='blog' />
                </button>
                <button className='headerBtn'>
                    Contacto
                </button>
            </div>
            <div className="squeare2 col-10 col-sm-8 col-lg-2">
                <button className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=85154&format=png&color=FFFFFF' alt='instagram  ' />
                </button>
                <button className='headerBtn'>
                    <img className='imgIcon' src='https://img.icons8.com/?size=100&id=BFGcUuGkjgWI&format=png&color=FFFFFF' alt='whatsapp' />
                </button>
            </div>
        </div>
    )
}

export default Header;