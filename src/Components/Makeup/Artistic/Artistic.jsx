import "./Artistic.css";

import bodyPaint from "../../../Common/Images/artistic1.jpg";
import character from "../../../Common/Images/artistic2.jpg";
import clown from "../../../Common/Images/artistic3.jpg";
import popArt from "../../../Common/Images/artistic4.jpg";


const categories = [
    {
        photo: bodyPaint,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
        photo: character,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
        photo: clown,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
        photo: popArt,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    }
]

const Artistic = () => {

    return (
        <div className="artistic-container row justify-content-center">
            <h1 className="col-10">Artistico</h1>
            {/* <div className="col-4 card">
                <img className="cardImg" src={bodyPaint} alt="BodyPaint"/>
                <p className="text">Texto</p>
            </div>
            <div className="col-4">
                Caracterizacion
            </div >
            <div className="col-4">
                Payaso
            </div>
            <div className="col-4">
                Pop Art
            </div> */}
            {categories.map((item,index) => {
                return (
                    <div className="card col-10 col-sm-8 col-md-5 col-lg-4 col-xl-3 col-xxl-2" key={index}>
                        <div className="front">
                            <img className="cardImg" src={item.photo} alt="BodyPaint" />
                        </div>
                        <div className="back">
                            <p>{item.description} </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Artistic;