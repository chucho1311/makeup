import "./Artistic.css";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";

import mainImg from "../../Common/Images/carousel1.jpg"
import quinciañera from "../../Common/Images/mainMakeup.jpg"
import artistic1 from "../../Common/Images/artistic1.jpg"
import artistic2 from "../../Common/Images/artistic2.jpg"
import artistic3 from "../../Common/Images/artistic3.jpg"
import artistic4 from "../../Common/Images/artistic4.jpg"
import Carousel from "../../Common/Carousel/Carousel";

const Makeup = () => {

    scroll(top)

    const topics = [
        {
            title: "Body Paint",
            photo: artistic1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Caracterización",
            photo: artistic2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Payaso",
            photo: artistic3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Pop Art",
            photo: artistic4,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ]

    const slides = [
        {
            "image": artistic1
        },
        {
            "image": artistic2
        },
        {
            "image": artistic3
        },
        {
            "image": artistic4
        },
        {
            "image": mainImg
        },
        {
            "image": quinciañera
        },
    ]

    return (
        <>
            <Header />

            <h2 className="topicTitle row">Maquillaje artistico</h2>
            {topics.map((item, index) => {
                if (index % 2 == 0) {
                    return (
                        <div key={index} className="artistCard row justify-content-center">
                            <img className="col-10 col-sm-5 col-md-4 col-lg-3" src={item.photo} alt="imgTopic" />
                            <div className="cardText col-10 col-sm-5 col-md-5">
                                <h2>{item.title}</h2>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                        <div key={index} className="artistCard row justify-content-center" style={{ backgroundColor: "rgb(80, 72, 72)", color: "white" }}>
                            <div className="cardText col-10 col-sm-5 col-md-5">
                                <h2>{item.title}</h2>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                            <img className="col-10 col-sm-5 col-md-4 col-lg-3" src={item.photo} alt="imgTopic" />
                        </div>
                    )
                }
            })}
            <Carousel slides={slides} />
            <Footer />
        </>
    )
}

export default Makeup;