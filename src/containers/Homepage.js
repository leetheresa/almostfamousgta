import React from 'react'

import '../styles/index.scss';

import Layout from "./Layout";
import ButtonDefault from "../components/buttons/ButtonDefault";
import ButtonSolid from "../components/buttons/ButtonSolid";


const Homepage = () => {
	return (
		<>
			<Layout>
				<section className="afg-hero-banner">
					<p><strong>Body - Homepage</strong></p>

					<ButtonDefault />
					<ButtonSolid />
				</section>
			</Layout>
		</>
	)
}

export default Homepage