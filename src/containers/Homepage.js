import React from 'react'

import '../styles/index.scss';

import Layout from "./Layout";
import ButtonDefault from "../components/buttons/ButtonDefault";
import ButtonSolid from "../components/buttons/ButtonSolid";

import Banner from "../assets/otpp-home-spotlight-1160x663px.jpeg"

const Homepage = () => {
	return (
		<>
			<Layout>
				<div className="container homepage">
					<section className="hero add-in-view-on-view">
						<p><strong>Body - Homepage</strong></p>
						<img src={Banner} alt="otp-banner" />
						<ButtonDefault />
						<ButtonSolid />
					</section>
				</div>
			</Layout>
		</>
	)
}

export default Homepage