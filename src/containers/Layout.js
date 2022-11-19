import React from 'react'

import '../styles/index.scss';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

const Layout = ({ children }) => {

    return (

        <div className="afg-content position-relative">
            <Header />
            <div className="pb-5">
                {children}
                <hr className="bg-white b-5"/>
                <section className="container text-center py-5 my-5">
                    <h3 className="afg-h2">Contact us:</h3>
                    <p>Email: <a href="mailto:almostfamousgta@gmail.com" target="_blank">almostfamousgta@gmail.com</a></p>
                    <p>Twitter: <a href="https://twitter.com/almostfamousGTA" target="_blank">@almostfamousgta</a></p>
                    <p>Links to ALL Links:  <a href="https://linktr.ee/almostfamousgta" target="_blank">linktr.ee/almostfamousgta</a></p>
                </section>
                <hr className="bg-white"/>
            </div>
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Layout