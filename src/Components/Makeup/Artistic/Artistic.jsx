import "./Artistic.css";

import img1 from "../../../Common/Images/artistic1.jpg";
import img2 from "../../../Common/Images/artistic2.jpg";
import img3 from "../../../Common/Images/artistic3.jpg";
import img4 from "../../../Common/Images/carousel1.jpg";


const Artistic = () => {

    return (
        <div id="artistico" className="artisticGallery row justify-content-center">
            <div className=" col-sm-12 col-md-6 col-lg-6 col-xl-7">
                <h2 className="row artisticTitle">Artistico</h2>
                <p className="description row">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <div className="box col-sm-8 col-md-5 col-lg-5 col-xl-4">
            </div>

        </div>
    )
}

export default Artistic;