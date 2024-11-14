import Header from "../../Common/Header/Header"
import Footer from "../../Common/Footer/Footer";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {

    const section1 = () => {

        const img1 = "https://cyzone.cyzone.com/wp-content/uploads/2021/11/Thumb_Reel_HaloEyesPink_Nicolle.jpg";
        const img2 = "https://m.media-amazon.com/images/I/61yHh3MEe2L.jpg";
        const img3 = "https://media.glamour.es/photos/616fa589157db8f8091d5927/master/w_1600%2Cc_limit/584537.jpg";

        return (
            <div className="section1 row justify-content-center">
                <Link to={'/makeup'} className="col-10 col-sm-5 col-md-4 col-lg-3 cardContent" style={{ backgroundImage: `url(${img1})` }}>
                    <button className="btnCard ">Maquillaje</button>
                </Link>
                <div className="col-10 col-sm-5  col-md-4 col-lg-3 cardContent" style={{ backgroundImage: `url(${img2})` }}>
                    <button className="btnCard ">Uñas</button>
                </div>
                <div className="col-10 col-sm-5 col-md-4 col-lg-3 cardContent" style={{ backgroundImage: `url(${img3})` }}>
                    <button className="btnCard ">Cabello</button>
                </div>
            </div>
        )
    }

    const section2 = () => {

        const img1 = 'https://media.revistavanityfair.es/photos/60e82dd09bf55ca1055aac1e/master/w_1600%2Cc_limit/240734.jpg';

        return (
            <div className="section2 row justify-content-center" >
                <div className="col-9 col-sm-8 col-md-4 topicCard" style={{ backgroundImage: `url(${img1})` }}>
                    <p>CONOCE TUS BROCHAS</p>
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
                <div className="col-9 col-sm-8 col-md-4 topicCard" style={{ backgroundImage: `url(${img1})` }}>
                    <p>CONOCE TUS BROCHAS</p>
                    <hr />
                </div>
                <div className="row justify-content-center">
                    <button className="btnCard col-1">Everything</button>
                </div>
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
                <button className="btnCard" style={{ backgroundColor: "rgb(65, 95, 67)" }}>Leer Más</button>
            </div>

        )
    }

    const section4 = () => {
        return (
            <div className="section4 row justify-content-center">
                <img className="col-sm-6 col-md-6 col-lg-3 imgSection4" src="https://tiendaellas.com/cdn/shop/articles/Blog_ojos_basico_600x600_crop_center.png?v=1636664444" alt="sect4" />
                <img className="col-sm-6 col-md-6 col-lg-3 imgSection4" src="https://blog.cromantic.com/hs-fs/hubfs/7-maquillajes-aesthetic-para-ir-a-la-oficina-6-e1647048606252.jpg?width=500&name=7-maquillajes-aesthetic-para-ir-a-la-oficina-6-e1647048606252.jpg" alt="sect4" />
                <img className="col-sm-6 col-md-6 col-lg-3 imgSection4" src="https://media.glamour.mx/photos/6716bc5ee861ba7ef445abd4/master/w_1600%2Cc_limit/maquillaje-beetlejuice-glam-4.jpg" alt="sect4" />
                <img className="col-sm-6 col-md-6 col-lg-3 imgSection4" src="https://institutorobertopiazza.com.ar/wp-content/uploads/2020/10/maquillaje-para-halloween-1.jpg" alt="sect4" />
            </div>
        )
    }

    return (
        <>
            <Header />
            <div style={{display:"flex"}}>
                <div className="home" style={{ zIndex: "1" }}>
                    <div className="row justify-content-center title"> MAREZ</div>
                    <div className="row justify-content-center sub-title">
                        <hr className="col-10 col-sm-3 col-md-3 col-lg-3" style={{ border: "1px solid", margin: "0", color: "white" }} />
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            BLOG DE MAQUILLAJE
                        </div>
                        <hr className="col-10 col-sm-3 col-md-3 col-lg-3" style={{ border: "1px solid", margin: "0", color: "white" }} />
                    </div>

                    {section1()}
                    {section2()}
                    {section3()}
                    {section4()}
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Home;