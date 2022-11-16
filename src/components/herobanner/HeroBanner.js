import React from "react";
import StageImage from "../../assets/stage.jpg";

class HeroBanner extends React.Component {
        render() {
        return (
            <div>
                <section className="afg-hero-banner__wrapper position-relative">
                    <div className="afg-hero-banner">
                        <img src={StageImage} alt="Almost Famous GTA band logo" className="w-100" />
                        <div className="container py-5">
                            <h1 className="text-center">Almost Famous Upcoming Shows <span className="afg-hero-banner__seo">Almost Famous GTA</span></h1>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default HeroBanner