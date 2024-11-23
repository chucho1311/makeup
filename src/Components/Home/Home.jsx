import Header from "../../Common/Header/Header"
import Footer from "../../Common/Footer/Footer";
import "./Home.css";
import { Link } from "react-router-dom";

import owner from "../../Common/Images/owner.jpg"
import mainMKP from "../../Common/Images/mainMakeup.jpg"
import mainUñas from "../../Common/Images/mainUñas.jpg"
import mainCabello from "../../Common/Images/mainCabello.jpg"
import artistic from "../../Common/Images/carousel1.jpg";
import carouselImg2 from "../../Common/Images/carousel2.jpg";
import quinciañeras from "../../Common/Images/animetionPhotos3.jpg"
import Carousel from "../../Common/Carousel/Carousel";

const Home = () => {

    const portada = () => {
        return (
            <div className="portada row justify-content-center">
                <img className="col-11 col-sm-10 col-md-5" src={owner} alt="portada" />
                <div className="portadaText col-11 col-sm-10 col-md-5">
                    <h2>Jennifer</h2>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>
        )
    }

    const section1 = () => {

        const img3 = "https://media.glamour.es/photos/616fa589157db8f8091d5927/master/w_1600%2Cc_limit/584537.jpg";

        return (
            <div className="section1 row justify-content-center">
                <a href="#makeup" className="col-10 col-sm-5 col-md-4 col-lg-3 cardContent " style={{ backgroundImage: `url(${mainMKP})` }}>
                    <button className="btnCard ">Maquillaje</button>
                </a>
                <div className="col-10 col-sm-5  col-md-4 col-lg-3 cardContent" style={{ backgroundImage: `url(${mainUñas})` }}>
                    <button className="btnCard ">Uñas</button>
                </div>
                <div className="col-10 col-sm-5 col-md-4 col-lg-3 cardContent" style={{ backgroundImage: `url(${mainCabello})` }}>
                    <button className="btnCard ">Cabello</button>
                </div>
            </div>
        )
    }

    const section2 = () => {

        const img1 = 'https://media.revistavanityfair.es/photos/60e82dd09bf55ca1055aac1e/master/w_1600%2Cc_limit/240734.jpg';

        return (
            <div className="section2 row justify-content-center" id="makeup" >
                <Link to="/makeupArtistic" className="col-9 col-sm-8 col-md-4 topicCard" style={{ backgroundImage: `url(${artistic})` }}>
                    <p>ARTISTICO</p>
                    <hr />
                </Link>
                <div className="col-9 col-sm-8 col-md-4 topicCard" style={{ backgroundImage: `url(${quinciañeras})` }}>
                    <p>Quinciañeras</p>
                    <hr />
                </div>
                <div className="col-9 col-sm-8 col-md-4 topicCard" style={{ backgroundImage: `url(${img1})` }}>
                    <p>CONOCE TUS BROCHAS</p>
                    <hr />
                </div>
                <div className="col-9 col-sm-8 col-md-4 topicCard" style={{ backgroundImage: `url(${img1})` }}>
                    <p>CONOCE TUS BROCHAS</p>
                    <hr />
                </div>
                {/* <div className="row justify-content-center">
                    <button className="btnCard col-1">Everything</button>
                </div> */}
            </div>
        );
    }

    const section3 = () => {

        return (
            <div className="section3">
                <div className="sectoin3Container row justify-content-center">
                    <h2>Titulo</h2>
                    <hr className="col-12 col-sm-8" />
                    <p className="col-12 col-sm-8">Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente.
                        En este espacio puedes contar tu historia y permitir que los usuarios sepan más sobre ti.
                    </p>
                </div>
                <button className="btnCard">Leer Más</button>
            </div>

        )
    }

    const section4 = () => {

        return (
            <div className="section4 row justify-content-center">
                <img className="col-sm-6 col-md-6 col-lg-3 imgSection4" src={artistic} alt="sect4" />
                <img className="col-sm-6 col-md-6 col-lg-3 imgSection4" src={carouselImg2} alt="sect4" />
                <img className="col-sm-6 col-md-6 col-lg-3 imgSection4" src="https://media.glamour.mx/photos/6716bc5ee861ba7ef445abd4/master/w_1600%2Cc_limit/maquillaje-beetlejuice-glam-4.jpg" alt="sect4" />
                <img className="col-sm-6 col-md-6 col-lg-3 imgSection4" src="https://institutorobertopiazza.com.ar/wp-content/uploads/2020/10/maquillaje-para-halloween-1.jpg" alt="sect4" />
            </div>
        )
    }

    return (
        <>
            <Header />
            <div style={{ display: "flex" }}>
                <div className="home" style={{ zIndex: "1" }}> 
                    {section1()}
                    {section2()}
                    {portada()}

                    {section4()}
                    {/* <Carousel/> */}
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Home;