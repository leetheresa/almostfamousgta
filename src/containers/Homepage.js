import React, {useState} from 'react'

import '../styles/index.scss';

import Layout from "./Layout";
import HeroBanner from "../components/herobanner/HeroBanner";
import PromoCard from "../components/promoCard/promoCard";

import LionHeartImage from "../assets/Lionheart-990x556.jpg";
import StGeorgePubImage from "../assets/1-990x556.jpg";
import HonestLawyer1Image from "../assets/Honest-Lawyer-Banner-939x556.jpg";
import OscarsRoadHouseImage from "../assets/Restaurant-990x556.jpg";
import SouthShoreImage from "../assets/shore.jpeg";

const imagePerRow = 4;

const Homepage = () => {
	const upcomingGigs = [
		{
			heading:"March 11 (2023) – Almost Famous at Honest Lawyer (Hamilton)",
			subHeading:"Honest Lawyer (Hamilton), No cover",
			phone:"(289) 674-1080",
			address:"1115 Fennell Ave East, Hamilton",
			description:"Show starts at 9pm",
			image:"/assets/d9a7793ceb95e807f941.jpg",
			date: "2023-03-11"
		},
		{
			heading: "November 27th (2022) – Almost Famous at Lionheart",
			subHeading: "Lionheart British Pub & Restaurant, No cover",
			phone: "(905) 824-6669",
			address: "Derry Road West, Unit 24, Mississauga",
			description: "Show starts at 9pm",
			image: "/assets/fe61f9398b57c26af9e1.jpg",
			date: "2022-11-27"
		},
		{
			heading: "December 16th (2022) - Almost Famous at the South Shore Bar & Grill",
			subHeading: "South Shore Bar & Grill",
			phone: "(416) 704-1820",
			address: "264 Browns Line, Toronto, ON, Canada, Ontario",
			description: "Show starts at 8pm",
			image: "/assets/8b6b7ecf7a7b323a4a21.jpeg",
			date: "2022-12-16"
		},
		{
			heading: "January 6th (2023) - Almost Famous at The St. George Pub",
			subHeading: "The St. George Pub, No cover",
			phone: "(905) 873-0555",
			address: "7 Main Street North, Georgetown",
			description: "Show starts at 9pm",
			image: "/assets/053b00df983972fdb6c4.jpg",
			date: "2023-01-06"
		},
		{
			heading: "January 14 (2023) – Almost Famous at Honest Lawyer (Hamilton)",
			subHeading: "Honest Lawyer (Hamilton), No cover",
			phone: "(289) 674-1080",
			address: "1115 Fennell Ave East, Hamilton",
			description: "Show starts at 9pm",
			image: "/assets/d9a7793ceb95e807f941.jpg",
			date: "2023-01-14"
		},
	];

	const recentGigs = [
		{
			heading:"October 8th (2022) – Almost Famous at The St. George Pub",
			subHeading:"The St. George Pub, No cover",
			phone:"(905) 873-0555",
			address:"7 Main Street North, Georgetown",
			description:"Show starts at 9pm",
			image: "/assets/053b00df983972fdb6c4.jpg",
			date: "2022-10-08"
		},
		{
			heading:"August 5th (2022) – Almost Famous at Oscar’s Roadhouse",
			subHeading:"Oscar’s Roadhouse Bar & Grill, No cover",
			phone:"(905) 799-1304",
			address:"1785 Queen St East, Brampton",
			description:"Show starts at 9pm",
			image:"/assets/36f94f01873eaa577e7a.jpg",
			date: "2022-08-05"
		},
		{
			heading:"July 16th (2022) – Almost Famous at Honest Lawyer – Fennell",
			subHeading: "Honest Lawyer (Fennell), No cover",
			phone: "(289) 674-1080",
			address: "1115 Fennell Ave East, Hamilton",
			description: "Show starts at 9pm",
			image: "/assets/d9a7793ceb95e807f941.jpg",
			date: "2022-01-16"
		},
	];

	const [next, setNext] = useState(imagePerRow);
	const handleMoreImage = () => {
		setNext(next + imagePerRow);
	};

	return (
		<Layout>
			<HeroBanner />
			<section className="container py-5">
				{upcomingGigs.sort((a,b) => new Date(a.date) - new Date(b.date)).map((gig, index) => {
					return (
						<div key={index}>
							<PromoCard heading={gig.heading}
									   subHeading={gig.subHeading}
									   phone={gig.phone}
									   address={gig.address}
									   description={gig.description}
									   image={gig.image}
							/>
						</div>
					);
				})}
			</section>
			<hr className="container" />
			<section className="container py-5">
				<h2 className="text-center afg-h1 mb-5 pb-5">Recent Performances</h2>

				{recentGigs.sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, next)?.map((item, index) => {
					return (
						<div key={index}>
							<PromoCard heading={item.heading}
									   subHeading={item.subHeading}
									   phone={item.phone}
									   address={item.address}
									   description={item.description}
									   image={item.image}
							/>
						</div>
					);
				})}
				{next < recentGigs?.length && (
					<button
						className="mt-4"
						onClick={handleMoreImage}
					>
						Load more
					</button>
				)}
			</section>
		</Layout>
	)
}
export default Homepage;