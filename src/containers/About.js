import React from 'react'

import '../styles/index.scss';

import Layout from "./Layout";
import banner from "../assets/otpp-home-spotlight-1160x663px.jpeg"

const About = () => {
    return (
        <>
            <Layout>
                <div className="container internalpages">
                    <section className="hero add-in-view-on-view">
                        <p><strong>Body - About</strong></p>
                        <img src={banner} alt="otp-banner" />
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default About