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
import CuchulainnImage from "../assets/Capture.jpg";
import HonestLawyer2Image from "../assets/honest-lawyer.jpg";
import EIFImage from "../assets/EFC-Win2.jpg";
import DakotaImage from "../assets/52598845_304819366882662_412119888920838144_o-1.jpg";
import RoyalLegionImage from "../assets/royal-101-990x556.png";
import BlackWolfImage from "../assets/Black-Wolf-973x556.jpg";
import DrumFlatImage from "../assets/Drums-N-Flats-1.jpg";
import HorseShoeImage from "../assets/Web-banner_AF_Horseshoe-Tavern_May-30-18.jpg";
import Spot1Image from "../assets/2017-12-28_15-37-06.jpg";
import CuchulainnCharityImage from "../assets/22815548_1688411837845013_4358704672892183037_n.jpg";
import HamiltonBullDogsImage from "../assets/hamilton-bulldogs-erie-otters.jpg";

const imagePerRow = 8;

const Homepage = () => {
	const upcomingGigs = [
		{
			heading:"March 11, 2023 – Almost Famous at Honest Lawyer (Hamilton)",
			subHeading:"Honest Lawyer (Hamilton), No cover",
			phone:"(289) 674-1080",
			address:"1115 Fennell Ave East, Hamilton",
			description:"Show starts at 9pm",
			image:"/assets/d9a7793ceb95e807f941.jpg",
			date: "2023-03-11"
		},
		{
			heading: "November 27th, 2022 – Almost Famous at Lionheart",
			subHeading: "Lionheart British Pub & Restaurant, No cover",
			phone: "(905) 824-6669",
			address: "Derry Road West, Unit 24, Mississauga",
			description: "Show starts at 9pm",
			image: "/assets/fe61f9398b57c26af9e1.jpg",
			date: "2022-11-27"
		},
		{
			heading: "December 16th, 2022 - Almost Famous at the South Shore Bar & Grill",
			subHeading: "South Shore Bar & Grill",
			phone: "(416) 704-1820",
			address: "264 Browns Line, Toronto, ON, Canada, Ontario",
			description: "Show starts at 8pm",
			image: "/assets/8b6b7ecf7a7b323a4a21.jpeg",
			date: "2022-12-16"
		},
		{
			heading: "January 6th, 2023 - Almost Famous at The St. George Pub",
			subHeading: "The St. George Pub, No cover",
			phone: "(905) 873-0555",
			address: "7 Main Street North, Georgetown",
			description: "Show starts at 9pm",
			image: "/assets/053b00df983972fdb6c4.jpg",
			date: "2023-01-06"
		},
		{
			heading: "January 14, 2023 – Almost Famous at Honest Lawyer (Hamilton)",
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
			heading:"October 8th, 2022 – Almost Famous at The St. George Pub",
			subHeading:"The St. George Pub, No cover",
			phone:"(905) 873-0555",
			address:"7 Main Street North, Georgetown",
			description:"Show starts at 9pm",
			image: "/assets/053b00df983972fdb6c4.jpg",
			date: "2022-10-08"
		},
		{
			heading:"August 5th, 2022 – Almost Famous at Oscar’s Roadhouse",
			subHeading:"Oscar’s Roadhouse Bar & Grill, No cover",
			phone:"(905) 799-1304",
			address:"1785 Queen St East, Brampton",
			description:"Show starts at 9pm",
			image:"/assets/36f94f01873eaa577e7a.jpg",
			date: "2022-08-05"
		},
		{
			heading:"July 16th, 2022 – Almost Famous at Honest Lawyer – Fennell",
			subHeading: "Honest Lawyer (Fennell), No cover",
			phone: "(289) 674-1080",
			address: "1115 Fennell Ave East, Hamilton",
			description: "Show starts at 9pm",
			image: "/assets/d9a7793ceb95e807f941.jpg",
			date: "2022-01-16"
		},
		{
			heading:"February 15th, 2020 – Almost Famous at Cuchulainn’s Irish Pub",
			subHeading: "Cuchulainn’s Irish Pub, No cover",
			phone: "(905) 821-3790",
			address: "158 Queen St S, Mississauga, Ontario L5M 1K8",
			description: "Show starts at 9:30pm",
			image: "/assets/84eb8df840a46d6450c0.jpg",
			date: "2020-02-15"
		},
		{
			heading:"February 8th, 2020 – Almost Famous at Honest Lawyer (Downtown)",
			subHeading: "Honest Lawyer (Downtown) , No cover",
			phone: "(905) 522-5297",
			address: "1115 Fennell Ave East, Hamilton",
			description: "Show starts at 9pm",
			image: "/assets/81d1fa5e3110d2da886a.jpg",
			date: "2020-02-08"
		},
		{
			heading:"January 4th, 2020 – Almost Famous at Cuchulainn’s Irish Pub",
			subHeading: "Cuchulainn’s Irish Pub, No cover",
			phone: "(905) 821-3790",
			address: "158 Queen St S, Mississauga, Ontario L5M 1K8",
			description: "Show starts at 9:30pm",
			image: "/assets/84eb8df840a46d6450c0.jpg",
			date: "2020-01-04"
		},
		{
			heading:"December 10, 2020 - Almost Famous wins EFC Talent Show",
			link1: "https://www.electrofed.com/2020/12/the-electrical-industrys-got-talent-show-eigt-a-huge-hit-winners-announced/",
			link1Title: "Click here to read more",
			link2: "https://www.youtube.com/channel/UCHoIVl7bjMpa5YjhxbJlAyQ",
			link2Title: "Follow YouTube link to watch video",
			image: "/assets/fcafac3f3d18ac1ebcac.jpg",
			date: "2020-12-10"
		},
		{
			heading:"December 14th, 2019 – Almost Famous at Cuchulainn’s Irish Pub",
			subHeading: "Cuchulainn’s Irish Pub, No cover",
			phone: "(905) 821-3790",
			address: "158 Queen St S, Mississauga, Ontario L5M 1K8",
			description: "Show starts at 9pm",
			image: "/assets/84eb8df840a46d6450c0.jpg",
			date: "2019-12-14"
		},
		{
			heading:"November 16th, 2019 – Almost Famous at Dakota’s Sports Bar & Grill",
			subHeading: "Dakota's sports bar, $5 Cover",
			address: "2814 Lake Shore Blvd, W Unit 2, Toronto, ON",
			description: "Show starts at 9pm",
			image: "/assets/b1d1a42e902763d6e7de.jpg",
			date: "2019-11-16"
		},
		{
			heading:"November 2nd, 2019 – Almost Famous at Cuchulainn’s Irish Pub",
			subHeading: "Cuchulainn’s Irish Pub, No cover",
			phone: "(905) 821-3790",
			address: "158 Queen St S, Mississauga, Ontario L5M 1K8",
			description: "Show starts at 9pm",
			image: "/assets/84eb8df840a46d6450c0.jpg",
			date: "2019-11-02"
		},
		{
			heading:"October 5th, 2019 – Almost Famous at Cuchulainn’s Irish Pub",
			subHeading: "Cuchulainn’s Irish Pub, No cover",
			phone: "(905) 821-3790",
			address: "158 Queen St S, Mississauga, Ontario L5M 1K8",
			description: "Show starts at 9pm",
			image: "/assets/84eb8df840a46d6450c0.jpg",
			date: "2019-10-05"
		},
		{
			heading:"September 7th, 2019 – Almost Famous at Cuchulainn’s Irish Pub",
			subHeading: "Cuchulainn’s Irish Pub, No cover",
			phone: "(905) 821-3790",
			address: "158 Queen St S, Mississauga, Ontario L5M 1K8",
			description: "Show starts at 9pm",
			image: "/assets/84eb8df840a46d6450c0.jpg",
			date: "2019-09-07"
		},
		{
			heading:"August 17th, 2019 – Almost Famous at Cuchulainn’s Irish Pub",
			subHeading: "Cuchulainn’s Irish Pub, No cover",
			phone: "(905) 821-3790",
			address: "158 Queen St S, Mississauga, Ontario L5M 1K8",
			description: "Show starts at 9pm",
			image: "/assets/84eb8df840a46d6450c0.jpg",
			date: "2019-08-17"
		},
		{
			heading:"August 10th, 2019 – Almost Famous Dinner/Dance with Rock Express",
			subHeading: "Doors open 5:30pm – Show starts at 6:00pm – Dinner at 7:00pm",
			address: "Royal Canadian Legion, Branch 101",
			description: "$35 Advanced $40 at the door, Ticket information",
			image: "/assets/4f18dc8758dfa5d6e376.png",
			date: "2019-08-10"
		},
		{
			heading:"July 6th, 2019 – Almost Famous at Dakota’s Sports Bar & Grill",
			subHeading: "Dakota's sports bar, $5 Cover",
			address: "2814 Lake Shore Blvd, W Unit 2, Toronto, ON",
			description: "Show starts at 9pm",
			image: "/assets/b1d1a42e902763d6e7de.jpg",
			date: "2019-07-06"
		},
		{
			heading:"June 22nd, 2019 – Almost Famous at The Black Wolf Smokehouse",
			subHeading: "The Black Wolf Smokehouse, $5 Cover",
			address: "139 Broadway Ave, Orangeville, ON",
			phone: "519-941-1313",
			description: "Show starts at 9pm",
			image: "/assets/2f5243cf5c68402294a0.jpg",
			date: "2019-06-22"
		},
		{
			heading:"August 24th, 2018 – Almost Famous at Drums N Flats",
			subHeading: "Drums N Flat, $5 Cover",
			address: "60 Randall Drive, Ajax, ON",
			description: "Show starts at 9pm",
			image: "/assets/81b6490c8eddddee3a6d.jpg",
			date: "2018-08-24"
		},
		{
			heading:"May 30th, 2018 – Almost Famous at The Horseshoe Tavern",
			subHeading: "Other acts: Hyness, Saint Yves, Six At Best, Infinite Repeat",
			address: "370 Queen Street West, Toronto, ON",
			description: "Show starts at 9pm. We go on at 11:30pm.",
			image: "/assets/1a440dccc088c2db7119.jpg",
			date: "2018-05-30"
		},
		{
			heading:"January 27th, 2018 – Almost Famous at Spot 1 Grill & Music Hall",
			subHeading: "Other acts: Torpedo Sunrise, Mid Life Crisis",
			address: "289 Rutherford Rd South, Brampton, ON",
			description: "Show starts at 9pm. We go on at 11pm.",
			image: "/assets/5866f2657c2b61f18603.jpg",
			date: "2018-01-27"
		},
		{
			heading:"December 9th, 2017 – Almost Famous at Cuchulainn’s Irish Pub, Charity Event",
			subHeading: "Other acts: The Groove Co, Ryan Dornan, Luke Reece, Poetry Slam",
			address: "158 Queen St South, Mississauga, ON",
			description: "Event starts at 8pm. We go on at 10:30pm.",
			image: "/assets/fe4925b5849f3feab283.jpg",
			date: "2017-10-09"
		},
		{
			heading:"November 10th, 2017 – Almost Famous at FirstOntario Centre",
			subHeading: "We will be playing at the FirstOntario Centre in the King Club (bar area) from 6:30 pm to 7:00 pm and during the 2 intermissions.",
			address: "101 York Blvd, Hamilton, ON",
			description: "6:00 PM",
			image: "/assets/9b34a261377bc32994dd.jpg",
			date: "2017-11-10"
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
									   link1={gig.link1}
									   link1Title={gig.link1Title}
									   link2={gig.link2}
									   link2Title={gig.link2Title}
							/>
						</div>
					);
				})}
			</section>
			<hr className="container px-0 bg-white" />
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
									   link1={item.link1}
									   link1Title={item.link1Title}
									   link2={item.link2}
									   link2Title={item.link2Title}
							/>
						</div>
					);
				})}
				{next < recentGigs?.length && (
					<div className="text-center pt-5">
						<button
							className="button mt-4 btn-lg btn btn-dark px-5 afg-h2"
							onClick={handleMoreImage}
						>
							Load more events...
						</button>
					</div>

				)}
			</section>
		</Layout>
	)
}
export default Homepage;