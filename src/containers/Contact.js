import React from 'react'

import '../styles/index.scss';

import Layout from "./Layout";
import HeroBanner from "../components/herobanner/HeroBanner";

import AFLogo from "../assets/YouTube-Banner-2020-blurred-logo-only-top.png";

const Contact = () => {
    return (
        <>
            <Layout>
                <HeroBanner heading="Contact Us"/>
                <div className="container">
                    <section className="container text-center py-5 my-5 d-flex flex-column align-items-center">
                        <img src={AFLogo} alt="Almost Famous logo image with star" className="col-12 col-sm-6 py-5 mt-5" />

                        <div className=" py-5 my-5">
                            <h3 className="afg-h2">Contact us:</h3>
                            <p>Email: <a href="mailto:almostfamousgta@gmail.com" target="_blank">almostfamousgta@gmail.com</a></p>
                            <p>Twitter: <a href="https://twitter.com/almostfamousGTA" target="_blank">@almostfamousgta</a></p>
                            <p>Links to ALL Links:  <a href="https://linktr.ee/almostfamousgta" target="_blank">linktr.ee/almostfamousgta</a></p>
                        </div>

                    </section>
                </div>
            </Layout>
        </>
    )
}

export default Contact