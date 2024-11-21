import "./Artistic.css";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";

import mainImg from "../../Common/Images/carousel1.jpg"
import quinciañera from "../../Common/Images/mainMakeup.jpg"

const Makeup = () => {

    scroll(top)

    const services = [
        {
            title: "Quinciañeras",
            photo: quinciañera,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Artistico",
            photo: mainImg,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Novias",
            photo: quinciañera,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ]

    return (
        <>
            <Header />
            <div className="row justify-content-center">
                <div className="Artistic col-11">
                    <div className="artisticContainer row justify-content-center">
                        <div className="imgContiainer col-12 col-sm-5">
                            <img className="img" src={mainImg} alt="mainIMage" />
                        </div>
                        <div className="descriptionContainer col-10 col-sm-6">
                            <h2>HOLA Y BIENVENIDA</h2>
                            <p>
                                Yo soy Elena Paula, una apasionada de la delicadeza y el buen lucir.
                                Amo mi taller, los espacios con mucha luz, y los prados en primavera.
                            </p>
                            <p>
                                Mi gran pasión es la joyería minimalista, cuido los detalles y terminados con una dedicación minuciosa.
                                Siempre digo que las joyas a medida tienen un alma que trasciende nuestras vidas.
                            </p>
                        </div>
                    </div>
                    <div className="serviceContainer row justify-content-center">
                        <h1>Servicios</h1>
                        {services.map((service, index) => {
                            return (
                                <div key={index} className="servicesCard col-10 col-sm-5 col-lg-3">
                                    <img className="servicesImg" src={service.photo} alt="quinciañera" />
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Makeup;