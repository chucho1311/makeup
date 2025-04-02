import "./Social.css";
// import img1 from "../../../Common/Images/novia1.jpg";
// import img2 from "../../../Common/Images/novia2.jpg";
// import img3 from "../../../Common/Images/novia3.jpg";
// import img4 from "../../../Common/Images/novia4.jpg";



const Social = () => {

    return (
        <div className="socialContainer row " id="social">
            <div className=" col-lg-12 col-xl-3">
                <div className="row justify-content-center" style={{ height: "100%" }}>
                    <div className="imgSocial1 col-5 col-xl-10"></div>
                    <div className="imgSocial2 col-5 col-xl-10"></div>
                </div>
            </div>
            <div className="socialDescription col-12 col-xl-6">
                <div className="row justify-content-center">
                    <h1 className="socialTitle col-12">Social</h1>
                    <div className="col-12">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </div>
                </div>
            </div>
            <div className="col-12 col-xl-3">
                <div className="row justify-content-center" style={{ height: "100%" }}>
                    <div className="imgSocial3 col-5 col-xl-10"></div>
                    <div className="imgSocial4 col-5 col-xl-10"></div>
                </div>
            </div>
        </div>
    )
}

export default Social;