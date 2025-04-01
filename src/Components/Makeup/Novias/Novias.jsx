import "./Novias.css";
import img from "../../../Common/Images/novia.jpg";
import img1 from "../../../Common/Images/novia1.jpg";
import img2 from "../../../Common/Images/novia2.jpg";
import img3 from "../../../Common/Images/novia3.jpg";
import img4 from "../../../Common/Images/novia4.jpg";
import img5 from "../../../Common/Images/novia5.jpg";
import img6 from "../../../Common/Images/novia6.jpg";



const Novias = () => {

    return (
        <div className="noviasContainer row ">
            <h1 className="noviaTitle col-12">Novias</h1>
            <img className="imgNovia col-12 col-sm-4" src={img5} alt="1" />
            <img className="imgNovia col-12 col-sm-4" src={img2} alt="2" />
            <img className="imgNovia col-12 col-sm-4" src={img3} alt="3" />
            <img className="imgNovia col-12 col-sm-4" src={img4} alt="4" />
            <img className="imgNovia col-12 col-sm-4" src={img1} alt="5" />
            <img className="imgNovia col-12 col-sm-4" src={img6} alt="6" />
        </div>
    )
}

export default Novias;