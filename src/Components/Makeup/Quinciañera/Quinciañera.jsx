import "./Quinciañera.css";
import img1 from "../../../Common/Images/animationPhotos1.jpg";
import img2 from "../../../Common/Images/animetionPhotos2.jpg";
import img3 from "../../../Common/Images/mainMakeup.jpg";
import img4 from "../../../Common/Images/quinciañera1.jpg";
import img5 from "../../../Common/Images/quinciañera2.jpg";
import img6 from "../../../Common/Images/quinciañera3.jpg";



const Quinciañera = () => {

    return (
        <div className="container-quinciañera row ">
            <h1 className="col-12">Quinciañera</h1>
            <div className="gallery">
                <img src={img5} alt="1" />
                <img src={img2} alt="2" />
                <img src={img6} alt="3" />
                <img src={img4} alt="4" />
                <img src={img3} alt="5" />
                <img src={img1} alt="6" />

            </div>
        </div>
    )
}

export default Quinciañera;