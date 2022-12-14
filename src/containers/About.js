import React from 'react'

import '../styles/index.scss';

import Layout from "./Layout";
import HeroBanner from "../components/herobanner/HeroBanner";

import EIFImage from "../assets/EFC-Win2.jpg";
import AFLogo from "../assets/YouTube-Banner-2020-blurred-logo-only-top.png";
import YTLogo from "../assets/yt-logo.png";
import RichImage from "../assets/Rich-2.jpg";
import Richard2Image from "../assets/Richard_web.jpg";
import MikeImage from "../assets/Mike.jpg";
import PaulImage from "../assets/paul.png";
import DonnImage from "../assets/Donn-D.jpg";

const About = () => {
    return (
        <>
            <Layout>
                <HeroBanner heading="About The Band"/>
                <div className="container d-block d-sm-flex py-5">
                    <div className="col-12 col-sm-6">
                        <a href="https://www.electrofed.com/2020/12/the-electrical-industrys-got-talent-show-eigt-a-huge-hit-winners-announced/" target="_blank">
                            <img src={EIFImage} className="w-100 mb-5"/>
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 d-flex align-items-center flex-column justify-content-center">
                        <time className="text-center d-block afg-h2 mb-5">December 10th, 2020</time>
                        <img src={AFLogo} alt="Almost Famous Band Logo with star" />
                        <h2 className="mt-5 afg-h1 text-center">Wins EFC Talent Show!</h2>
                        <p className="mb-5"><a href="https://www.electrofed.com/2020/12/the-electrical-industrys-got-talent-show-eigt-a-huge-hit-winners-announced/" target="_blank">Click here/image</a> for more information.</p>
                        <a href="https://www.youtube.com/channel/UCHoIVl7bjMpa5YjhxbJlAyQ" target="_blank">
                            <img src={YTLogo} alt="YouTube logo" />
                        </a>
                        <p className="my-5"><a href="https://www.youtube.com/channel/UCHoIVl7bjMpa5YjhxbJlAyQ" target="_blank">Follow YouTube link</a> to watch video.</p>
                    </div>
                </div>
                <hr className="container bg-white my-5 px-0"/>
                <section className="container my-5 py-5">
                    <p className="mb-5">Did you know that Mississauga is the home to:</p>
                    <ul className="mb-5">
                        <li>Former NHL coach and Hockey Night in Canada commentator Don Cherry</li>
                        <li>KFC???s founder Colonel Sanders</li>
                        <li>World???s oldest mayor Hazel ???Hurricane??? McCallion</li>
                    </ul>
                    <p className="mb-5">You can add to the list now, the soon-to-be-famous rock cover band, ALMOST FAMOUS.  You???re welcome Mississauga!</p>
                    <p className="mb-5">Formed back in early 2014, the group is a collection of guys who love to play and perform rock songs from their favorite artists ??? The Black Crowes, Lenny Kravitz, The Tragically Hip, The Beatles and ZZ Top to name just a few.</p>
                    <p className="mb-5">Their MISSION is to bring the fun, energy and excitement back into live music, whether that be at your favorite bar, concert venue, festival or corporate function.</p>
                    <p>THEY are <b>ALMOST FAMOUS</b>: Rich, Richard, Donn, Mike and Paul.</p>
                    <div className="d-flex justify-content-center align-items-center flex-column pt-5 mt-5">
                        <img src={RichImage} />
                        <h3 className="text-center mt-4">~ Lead Vocals/ Band Manager ~ <br/> Rich</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column pt-5 mt-5">
                        <img src={Richard2Image} />
                        <h3 className="text-center mt-4">~ Bass ~ <br/> Richard</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column pt-5 mt-5">
                        <img src={DonnImage} />
                        <h3 className="text-center mt-4">~ Drums ~ <br/> Donn</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column pt-5 mt-5">
                        <img src={MikeImage} />
                        <h3 className="text-center mt-4">~ Lead Guitar ~ <br/> Mike</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column pt-5 mt-5">
                        <img src={PaulImage} />
                        <h3 className="text-center mt-4">~ Keyboards ~ <br/> Paul</h3>
                    </div>
                    <h3 className="pt-5 mt-5">Where we've performed</h3>
                    <ul class="list-unstyled">
                        <li>Oscar???s Roadhouse & Grill ??? Brampton</li>
                        <li>Honest Lawyer (Fennell) ??? Hamilton</li>
                        <li>Honest Lawyer (Downtown) ??? Hamilton</li>
                        <li>Cuchulainn???s Irish Pub ??? Mississauga</li>
                        <li>Dakota???s ??? Etobicoke</li>
                        <li>The Black Wolf Smokehouse ??? Orangeville</li>
                        <li>Drums N Flats ??? Ajax</li>
                        <li>The Horseshoe Tavern ??? Toronto</li>
                        <li>Stonewalls ??? Hamilton</li>
                        <li>Spot One ??? Brampton</li>
                        <li>Ellen???s Bar & Grill ??? Brampton</li>
                        <li>Duffy???s Tavern ??? Toronto</li>
                        <li>The Blue Goose Tavern ??? Etobicoke</li>
                        <li>Shakers Smokehouse BBQ and Sports Bar ??? Oakville</li>
                        <li>Etobicoke Local ??? Toronto</li>
                        <li>The Schwaben Club ??? Kitchener</li>
                        <li>Welland Rib Fest ??? Welland</li>
                        <li>Milton Boom Fest ??? Milton</li>
                        <li>The Tennessee ??? Toronto</li>
                        <li>Hamilton Bulldogs Concert Series ??? Hamilton</li>
                        <li>Neuro-Palooza 4 ??? Bay City Music Hall ??? Hamilton</li>
                        <li>Christine???s Charity Toy Drive ??? Mississauga</li>
                        <li>Grundfos Corporate Christmas Party ??? Mississauga</li>
                    </ul>
                </section>
                <hr className="bg-white b-5"/>
                <section className="container text-center py-5 my-5">
                    <h3 className="afg-h2">Contact us:</h3>
                    <p>Email: <a href="mailto:almostfamousgta@gmail.com" target="_blank">almostfamousgta@gmail.com</a></p>
                    <p>Twitter: <a href="https://twitter.com/almostfamousGTA" target="_blank">@almostfamousgta</a></p>
                    <p>Links to ALL Links:  <a href="https://linktr.ee/almostfamousgta" target="_blank">linktr.ee/almostfamousgta</a></p>
                </section>
                <hr className="bg-white"/>
            </Layout>
        </>
    )
}

export default About