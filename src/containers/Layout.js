import React from 'react'

import '../styles/index.scss';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="page-wrapper">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout