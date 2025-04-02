import "./Makeup.css";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";

// Topic Images
import artistic from "../../Common/Images/carousel1.jpg";
import quinciañeras from "../../Common/Images/animetionPhotos3.jpg"
import social from "../../Common/Images/social.jpg"
import novia from "../../Common/Images/novia.jpg"

// Carousel Images
import mainImg from "../../Common/Images/carousel1.jpg"
import quinciañera from "../../Common/Images/mainMakeup.jpg"
import artistic1 from "../../Common/Images/artistic1.jpg"
import artistic2 from "../../Common/Images/artistic2.jpg"
import artistic3 from "../../Common/Images/artistic3.jpg"
import artistic4 from "../../Common/Images/artistic4.jpg"
import Carousel from "../../Common/Carousel/Carousel";
import Artistic from "./Artistic/Artistic";
import Quinciañera from "./Quinciañera/Quinciañera";
import Novias from "./Novias/Novias";
import Social from "./Social/Social";

const Makeup = () => {

    scroll(top)
    // Slides Images
    // const slides = [
    //     {
    //         "image": artistic1
    //     },
    //     {
    //         "image": artistic2
    //     },
    //     {
    //         "image": artistic3
    //     },
    //     {
    //         "image": artistic4
    //     },
    //     {
    //         "image": mainImg
    //     },
    //     {
    //         "image": quinciañera
    //     },
    // ]

    const topics = () => {

        const img1 = 'https://media.revistavanityfair.es/photos/60e82dd09bf55ca1055aac1e/master/w_1600%2Cc_limit/240734.jpg';
        const subTopics = [
            {
                title: "Artistico",
                image: artistic,
                section: "#artistico",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Quinciañeras",
                image: quinciañeras,
                section: "#quinciañeras",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Novias",
                image: novia,
                section: "#novias",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Social",
                image: social,
                section: "#social",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
        ]

        return (
            <div className="topics row justify-content-center" >
                {subTopics.map((item, index) => {
                    return (
                        <a href={item.section} className="col-9 col-sm-8 col-md-4 topicCard" style={{ backgroundImage: `url(${item.image})` }} key={index}>
                            <p>{item.title}</p>
                            <hr />
                        </a>
                    )
                })}
            </div>
        );
    }

    return (
        <>
            <Header />

            <h1 className="topicTitle row">Make Up</h1>
            {topics()}
            <Artistic/>
            <Quinciañera/>
            <Novias/>
            <Social/>
            {/* <Carousel slides={slides} /> */}
            <Footer />
        </>
    )
}

export default Makeup;