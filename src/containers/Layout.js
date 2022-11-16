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
            </div>
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Layout