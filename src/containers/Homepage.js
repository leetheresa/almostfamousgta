import React from 'react'

import '../styles/index.scss';

import Layout from "./Layout";
import HeroBanner from "../components/herobanner/Herobanner";
import PromoCard from "../components/promoCard/promoCard";

import LionHeartImage from "../assets/Lionheart-990x556.jpg";
import StGeorgePubImage from "../assets/1-990x556.jpg";
import HonestLawyer1Image from "../assets/Honest-Lawyer-Banner-939x556.jpg";
import OscarsRoadHouseImage from "../assets/Restaurant-990x556.jpg";

const Homepage = () => {
	return (
		<>
			<Layout>
				<HeroBanner />
				<section className="container py-5">
					<PromoCard heading={"November 27th (2022) – Almost Famous at Lionheart"}
							   subHeading={"Lionheart British Pub & Restaurant, No cover"}
							   phone={"(905) 824-6669"}
							   address={"Derry Road West, Unit 24, Mississauga"}
							   description={"Show starts at 9pm"}
							   image={LionHeartImage}
					/>
					<PromoCard heading={"January 6th (2023) - Almost Famous at The St. George Pub"}
							   subHeading={"The St. George Pub, No cover"}
							   phone={"(905) 873-0555"}
							   address={"7 Main Street North, Georgetown"}
							   description={"Show starts at 9pm"}
							   image={StGeorgePubImage}
					/>
					<PromoCard heading={"January 14 (2023) – Almost Famous at Honest Lawyer (Hamilton)"}
							   subHeading={"Honest Lawyer (Hamilton), No cover"}
							   phone={"(289) 674-1080"}
							   address={"1115 Fennell Ave East, Hamilton"}
							   description={"Show starts at 9pm"}
							   image={HonestLawyer1Image}
					/>
					<PromoCard heading={"March 11 (2023) – Almost Famous at Honest Lawyer (Hamilton)"}
							   subHeading={"Honest Lawyer (Hamilton), No cover"}
							   phone={"(289) 674-1080"}
							   address={"1115 Fennell Ave East, Hamilton"}
							   description={"Show starts at 9pm"}
							   image={HonestLawyer1Image}
					/>
				</section>
				<hr className="container" />
				<section className="container py-5">
					<h2 className="text-center afg-h1 mb-5 pb-5">Recent Performances</h2>
					<PromoCard heading={"October 8th (2022) – Almost Famous at The St. George Pub"}
							   subHeading={"The St. George Pub, No cover"}
							   phone={"(905) 873-0555"}
							   address={"7 Main Street North, Georgetown"}
							   description={"Show starts at 9pm"}
							   image={StGeorgePubImage}
					/>
					<PromoCard heading={"August 5th (2022) – Almost Famous at Oscar’s Roadhouse"}
							   subHeading={"Oscar’s Roadhouse Bar & Grill, No cover"}
							   phone={"(905) 799-1304"}
							   address={"1785 Queen St East, Brampton"}
							   description={"Show starts at 9pm"}
							   image={OscarsRoadHouseImage}
					/>
				</section>
			</Layout>
		</>
	)
}

export default Homepage