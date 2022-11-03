import React from 'react'

import '../styles/index.scss';

import Layout from "./Layout";
import ButtonDefault from "../components/buttons/ButtonDefault";
import ButtonSolid from "../components/buttons/ButtonSolid";


const Homepage = () => {
	return (
		<>
			<Layout>
				<div className="container homepage">
					<section className="hero">
						<p><strong>Body - Homepage</strong></p>

						<ButtonDefault />
						<ButtonSolid />
					</section>
				</div>
			</Layout>
		</>
	)
}

export default Homepage