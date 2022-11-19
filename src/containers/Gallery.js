import React from 'react'

import '../styles/index.scss';

import Layout from "./Layout";
import HeroBanner from "../components/herobanner/HeroBanner";

const Gallery = () => {
    return (
        <>
            <Layout>
                <HeroBanner heading="Gallery"/>
                <section className="container my-5 py-5">

                </section>
            </Layout>
        </>
    )
}

export default Gallery