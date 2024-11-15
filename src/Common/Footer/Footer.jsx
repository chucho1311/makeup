import "./Footer.css";

const Footer = () => {

    return (
        <div className="footer row justify-content-center">
            {/* <h5>Suscribete</h5> */}
            {/* <input className="inputFooter col-10 col-sm-5 col-md-4 col-lg-3" type="text" />
            <button className="btnFooter col-10 col-sm-2">Enviar</button> */}
            <p style={{margin:"20px"}}>Política de Privacidad</p>
            <div className="col-8 col-sm-3">
                <button className="iconFooter">
                    <img className='iconFooter' src='https://img.icons8.com/?size=100&id=85154&format=png&color=737373' alt='instagram' />
                </button>
                <button className="iconFooter">
                    <img className='iconFooter' src='https://img.icons8.com/?size=100&id=85192&format=png&color=737373' alt='whatsapp' />
                </button>
                <button className="iconFooter">
                    <img className='iconFooter' src='https://img.icons8.com/?size=100&id=87090&format=png&color=737373' alt='pinterest' />
                </button>
            </div>
        </div>
    )
}

export default Footer;